import axios from "axios";
export const fertilizerApiUrl=`${process.env.NEXT_PUBLIC_API_URL}fertilizers/`
export const fertilizers = [
    {
        "brand_name": "Awba",
        "product_name": "Urea Fertilizer",
        "chemical_name": "Nitrogen 46%",
        "product_used_time": "Vegetative growth",
        "product_used_limit": "Follow crop-specific dosage",
        "description": "Nitrogen fertilizer supporting leaf and stem growth.",
        "prices": 3000,
        "advatage": "Supports vegetative growth and chlorophyll formation.",
    },
    {
        "brand_name": "Yara",
        "product_name": "DAP Fertilizer",
        "chemical_name": "NPK 18-46-0",
        "product_used_time": "At planting",
        "product_used_limit": "Follow soil-test recommendation",
        "description": "Phosphorus-rich fertilizer with nitrogen.",
        "prices": 3500,
        "advatage": "Supports early root development.",
    },
    {
        "brand_name": "ICL",
        "product_name": "MOP Fertilizer",
        "chemical_name": "Potassium chloride",
        "product_used_time": "Before planting or during growth",
        "product_used_limit": "Follow crop-specific dosage",
        "description": "Potassium fertilizer for agricultural crops.",
        "prices": 1500,
        "advatage": "Supports crop quality and stress tolerance.",
    },
    {
        "brand_name": "Yara",
        "product_name": "NPK 15-15-15",
        "chemical_name": "Nitrogen 15%, Phosphorus 15%, Potassium 15%",
        "product_used_time": "Planting or crop growth",
        "product_used_limit": "Follow soil-test recommendation",
        "description": "Balanced compound fertilizer.",
        "prices": 4000,
        "advatage": "Provides three primary plant nutrients.",
    },
    {
        "brand_name": "Coromandel",
        "product_name": "SSP Fertilizer",
        "chemical_name": "Single Super Phosphate",
        "product_used_time": "Before planting",
        "product_used_limit": "Follow product label",
        "description": "Phosphorus fertilizer containing calcium and sulfur.",
        "prices": 2000,
        "advatage": "Supplies phosphorus and secondary nutrients.",
    },
    {
        "brand_name": "IFFCO",
        "product_name": "Zinc Sulphate",
        "chemical_name": "Zinc sulphate",
        "product_used_time": "When zinc deficiency is identified",
        "product_used_limit": "Follow formulation-specific label",
        "description": "Micronutrient fertilizer supplying zinc.",
        "prices": 800,
        "advatage": "Helps correct zinc deficiency.",
    },
    {
        "brand_name": "Green Earth",
        "product_name": "Organic Compost",
        "chemical_name": "Organic matter",
        "product_used_time": "Before planting or soil preparation",
        "product_used_limit": "Based on soil and crop requirements",
        "description": "Mature organic compost for soil improvement.",
        "prices": 1200,
        "advatage": "Improves soil structure and organic matter.",
    },
    {
        "brand_name": "Yara",
        "product_name": "Calcium Nitrate",
        "chemical_name": "Calcium nitrate",
        "product_used_time": "During crop growth when required",
        "product_used_limit": "Follow product label",
        "description": "Water-soluble source of calcium and nitrate nitrogen.",
        "prices": 3200,
        "advatage": "Supplies calcium and nitrogen.",
    },
    {
        "brand_name": "ICL",
        "product_name": "Magnesium Sulphate",
        "chemical_name": "Magnesium sulphate",
        "product_used_time": "When magnesium is required",
        "product_used_limit": "Follow product label",
        "description": "Magnesium and sulfur fertilizer.",
        "prices": 1800,
        "advatage": "Supports chlorophyll formation and photosynthesis.",
    },
    {
        "brand_name": "K+S",
        "product_name": "SOP Fertilizer",
        "chemical_name": "Potassium sulphate",
        "product_used_time": "During soil preparation or crop growth",
        "product_used_limit": "Follow soil-test recommendation",
        "description": "Potassium and sulfur fertilizer with low chloride content.",
        "prices": 3800,
        "advatage": "Provides potassium for chloride-sensitive crops.",
    },
]
export const fetchFertilizers=(...args)=>{
  return fetch(...args,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${useAccountStore.getState().token}`,
    },
  }).then(res=>res.json())

}
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