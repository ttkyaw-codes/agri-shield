"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { toast } from "sonner";
import debounce from "lodash/debounce";

import {
  storeCrop,
  cropApiUrl,
  fetchCrops,
} from "@/services/Crops";

import {
  convertSearchPramsToObject,
  extractSearchPramsObjectFromUrl,
} from "@/utils/url";

export const useCrop = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchRef = useRef(null);
  const [fetchUrl, setFetchUrl] = useState(cropApiUrl);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("desc");
  
  // Filter keys tailored to crop fields
  const FILTER_KEYS = [
    "date_from",
    "date_to",
    "soil_type",
    "climate",
    "variety",
  ];

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm();

  // Convert query parameters into a plain object.
  const getCurrentParams = useCallback(() => {
    return convertSearchPramsToObject(searchParams);
  }, [searchParams]);

  // Update the URL query parameters.
  const updateUrlParams = useCallback(
    (newParams) => {
      const cleanedParams = Object.fromEntries(
        Object.entries(newParams).filter(
          ([, value]) => value !== undefined && value !== null && value !== ""
        )
      );

      const queryString = new URLSearchParams(
        Object.entries(cleanedParams).map(([key, value]) => [
          key,
          String(value),
        ])
      ).toString();

      router.push(
        queryString
          ? `${window.location.pathname}?${queryString}`
          : window.location.pathname
      );
    },
    [router]
  );

  // Keep the API URL synchronized with browser query parameters.
  useEffect(() => {
    const currentParams = getCurrentParams();
    const queryString = new URLSearchParams(currentParams).toString();

    setFetchUrl(
      queryString
        ? `${cropApiUrl}?${queryString}`
        : cropApiUrl
    );

    if (searchRef.current) {
      searchRef.current.value = currentParams.q || "";
    }

    // Synchronize sorting controls with the URL, when provided.
    if (currentParams.sort_by) {
      setSortBy(currentParams.sort_by);
    }

    if (currentParams.sort_direction) {
      setSortDirection(currentParams.sort_direction);
    }
  }, [getCurrentParams]);

  // Fetch crop records using SWR.
  const { data, isLoading, error, mutate } = useSWR(
    fetchUrl,
    fetchCrops
  );

  const applyFilters = useCallback(
    (draft) => {
      const current = getCurrentParams();
      const next = { ...current, page: 1 };

      FILTER_KEYS.forEach((key) => {
        const value = draft?.[key];
        if (value === undefined || value === null || value === "") {
          delete next[key];
        } else {
          next[key] = value;
        }
      });

      updateUrlParams(next);
    },
    [getCurrentParams, updateUrlParams]
  );

  const clearFilter = useCallback(
    (key) => {
      const current = getCurrentParams();
      const next = { ...current, page: 1 };
      delete next[key];
      updateUrlParams(next);
    },
    [getCurrentParams, updateUrlParams]
  );

  // Clear every filter
  const resetFilters = useCallback(() => {
    const current = getCurrentParams();
    const next = { ...current, page: 1 };
    FILTER_KEYS.forEach((k) => delete next[k]);
    updateUrlParams(next);
  }, [getCurrentParams, updateUrlParams]);

  const filters = useMemo(() => {
    const params = getCurrentParams();
    return {
      date_from: params.date_from ?? null,
      date_to: params.date_to ?? null,
      soil_type: params.soil_type ?? null,
      climate: params.climate ?? null,
      variety: params.variety ?? null,
    };
  }, [getCurrentParams]);

  // Support both paginated and unpaginated API responses.
  const crops = useMemo(() => {
    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.results)) {
      return data.results;
    }

    return [];
  }, [data]);

  // Search input debounce.
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        const currentParams = getCurrentParams();

        if (value.trim()) {
          updateUrlParams({
            ...currentParams,
            q: value.trim(),
            page: 1,
          });
        } else {
          const { q, ...remainingParams } = currentParams;

          updateUrlParams({
            ...remainingParams,
            page: 1,
          });
        }
      }, 500),
    [getCurrentParams, updateUrlParams]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const onSearchChange = (event) => {
    debouncedSearch(event.target.value);
  };

  const clearSearchInput = () => {
    debouncedSearch.cancel();

    if (searchRef.current) {
      searchRef.current.value = "";
    }

    const currentParams = getCurrentParams();
    const { q, ...remainingParams } = currentParams;

    updateUrlParams({
      ...remainingParams,
      page: 1,
    });
  };

  // Pagination.
  const handlePaginate = (url) => {
    if (!url) return;

    const newParams = extractSearchPramsObjectFromUrl(url);
    updateUrlParams(newParams);
  };

  // Change page size.
  const handleLimit = (event) => {
    updateUrlParams({
      ...getCurrentParams(),
      page: 1,
      limit: event.target.value,
    });
  };

  // Sort records locally.
  const handleSort = ({ sort_by, sort_direction }) => {
    if (!sort_by || !["asc", "desc"].includes(sort_direction)) {
      return;
    }

    setSortBy(sort_by);
    setSortDirection(sort_direction);
  };

  const sortedCrops = useMemo(() => {
    return [...crops].sort((a, b) => {
      let valueA = a?.[sortBy];
      let valueB = b?.[sortBy];

      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return 1;
      if (valueB == null) return -1;

      if (sortBy === "created_at") {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      } else {
        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();
      }

      if (valueA < valueB) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });
  }, [crops, sortBy, sortDirection]);

  // Create a crop record with the specified fields.
  const onSubmit = async (formData) => {
    try {
      const payload = {
        name: formData.name,
        variety: formData.variety,
        planting_method: formData.planting_method,
        harvesting: formData.harvesting,
        plant_shape: formData.plant_shape,
        soil_type: formData.soil_type,
        climate: formData.climate
      };

      const response = await storeCrop(payload);
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        Object.entries(result).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(String(message));
            });
          } else if (typeof messages === "string") {
            toast.error(messages);
          } else {
            toast.error(`${field}: ${JSON.stringify(messages)}`);
          }
        });

        return;
      }

      toast.success("Crop created successfully");

      reset();
      await mutate();

      if (formData.back_to_crops) {
        router.push("/crops");
      }
    } catch (error) {
      console.error("Failed to create crop:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    }
  };

  return {
    // Data
    data,
    crops,
    sortedCrops,
    fetchUrl,
    isLoading,
    error,
    mutate,

    // Form
    register,
    handleSubmit,
    onSubmit,
    reset,
    setValue,
    isSubmitting,
    errors,

    // Search
    searchRef,
    onSearchChange,
    clearSearchInput,

    // Pagination
    handlePaginate,
    handleLimit,

    // Sorting
    sortBy,
    sortDirection,
    handleSort,

    // URL & Filters
    router,
    updateUrlParams,
    filters,
    applyFilters,
    clearFilter,
    resetFilters,
  };
};