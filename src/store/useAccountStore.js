import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAccountStore = create(
  persist(
    (set) => ({
      account: null,
      token: null,
      role: null,

      // Save account information
      setAccount: (account) => set({ account }),

      // Save authentication token
      setToken: (token) => set({ token }),

      // Save user role: "user" or "admin"
      setRole: (role) => set({ role }),

      // Update account information
      updateAccount: (account) => set({ account }),

      // Clear session after logout
      logout: () =>
        set({
          account: null,
          token: null,
          role: null,
        }),
    }),
    {
      name: "account-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAccountStore;