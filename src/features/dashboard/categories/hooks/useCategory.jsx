"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { toast } from "sonner";
import debounce from "lodash/debounce";

import {
  storeFertilizer,
  fertilizerApiUrl,
  fetchFertilizers,
} from "@/services/Fertilizers";

import {
  convertSearchPramsToObject,
  extractSearchPramsObjectFromUrl,
} from "@/utils/url";

export const useStoreCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchRef = useRef(null);
  const [fetchUrl, setFetchUrl] = useState(fertilizerApiUrl);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("desc");
  const FILTER_KEYS = [
    "date_from",
    "date_to",
    "price_min",
    "price_max",
    "chemical_name",
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
        ? `${fertilizerApiUrl}?${queryString}`
        : fertilizerApiUrl
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

  // Fetch fertilizer records using SWR.
  const { data, isLoading, error, mutate } = useSWR(
    fetchUrl,
    fetchFertilizers
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
      price_min: params.price_min ? Number(params.price_min) : null,
      price_max: params.price_max ? Number(params.price_max) : null,
      chemical_name: params.chemical_name ?? null,
    };
  }, [getCurrentParams]);
  // Support both paginated and unpaginated API responses.
  const fertilizers = useMemo(() => {
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

  const sortedFertilizers = useMemo(() => {
    return [...fertilizers].sort((a, b) => {
      let valueA = a?.[sortBy];
      let valueB = b?.[sortBy];

      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return 1;
      if (valueB == null) return -1;

      if (sortBy === "created_at") {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      } else if (sortBy === "prices") {
        valueA = Number(valueA);
        valueB = Number(valueB);
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
  }, [fertilizers, sortBy, sortDirection]);

  // Create a fertilizer record.
  const onSubmit = async (formData) => {
    try {
      const payload = {
        brand_name: formData.brand_name,
        product_name: formData.product_name,
        chemical_name: formData.chemical_name,
        product_used_time: formData.product_used_time,
        product_used_limit: formData.product_used_limit,
        description: formData.description,
        prices: formData.prices,
        advatage: formData.advatage,
        image: formData.image?.[0] || formData.image || null,
      };

      const response = await storeFertilizer(payload);
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

      toast.success("Fertilizer created successfully");

      reset();
      await mutate();

      if (formData.back_to_fertilizers) {
        router.push("/fertilizers");
      }
    } catch (error) {
      console.error("Failed to create fertilizer:", error);

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
    fertilizers,
    sortedFertilizers,
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

    // URL
    router,
    updateUrlParams,
     filters,
    applyFilters,
    clearFilter,
    resetFilters,
  };
};