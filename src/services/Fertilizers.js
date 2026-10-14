import axios from "axios";
export const fertilizerApiUrl=`${process.env.NEXT_PUBLIC_API_URL}fertilizers/`
export const storeFertilizer = (data) => {
  const formData = new FormData();
  formData.append("brand_name", " ");
  formData.append("product_name", data.product_name);
  formData.append("chemical_name", data.chemical_name);
  formData.append("product_used_time", data.product_used_time);
  formData.append("product_used_limit", data.product_used_limit);
  formData.append("description", data.description);
  formData.append("prices", data.prices);
  formData.append("advantage", data.advatage);

  if (data.image && data.image.length > 0) {
    formData.append("image", data.image[0]);
  }

  return fetch(fertilizerApiUrl, {
    method: "POST",
    body: formData
  });
};