import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAccountStore = create(
  persist(
    (set) => ({
      account: null,
      token: null,

      // Save account and token after login
      setAccount: (account, token) =>
        set({
          account,
          token,
        }),

      // Update account information
      updateAccount: (account) =>
        set({ account }),

      // Update authentication token
      setToken: (token) =>
        set({ token }),

      // Clear account and token after logout
      logout: () =>
        set({
          account: null,
          token: null,
        }),
    }),
    {
      name: "account-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAccountStore;
