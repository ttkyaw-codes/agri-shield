import useAccountStore from "@/stores/useAccountStore";
export const checkProfile = async (updateToken) => {
  return fetch(`${profileApiUrl}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${updateToken}`,
    },
  })
};