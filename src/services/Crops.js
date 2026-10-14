import axios from "axios";
import useAccountStore from "@/store/useAccountStore";

export const cropApiUrl = `${process.env.NEXT_PUBLIC_API_URL}crops/`;

export const fetchCrops = (...args) => {
  return fetch(...args, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Token ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());
};

export const fetchCrop = (id) => {
  return fetch(`${cropApiUrl}${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Token ${useAccountStore.getState().token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch crop detail");
    }
    return res.json();
  });
};

export const storeCrop = (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("variety", data.variety);
  formData.append("planting_method", data.planting_method);
  formData.append("harvesting", data.harvesting);
  formData.append("plant_shape", data.plant_shape);
  formData.append("soil_type", data.soil_type);
  formData.append("climate", data.climate);

  // Handle image attachment supporting both FileList arrays and single File objects
  if (data.image) {
    const imageFile = Array.isArray(data.image) ? data.image[0] : data.image;
    if (imageFile) {
      formData.append("image", imageFile);
    }
  }

  return fetch(cropApiUrl, {
    method: "POST",
    // Note: When sending FormData via fetch, omit explicit "Content-Type" 
    // so the browser automatically handles the multipart/form-data boundary.
    body: formData,
  });
};