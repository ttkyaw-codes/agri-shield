"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchCrop, cropApiUrl } from "@/services/Crops";

const useCropDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error, mutate } = useSWR(
    id ? `${id}` : null,
    fetchCrop
  );

  return {
    crop: data,
    isLoading,
    error,
    mutate,
  };
};

export default useCropDetail;