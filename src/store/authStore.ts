import { create  } from "zustand";
import { persist } from "zustand/middleware";
import AuthInfoModel from "../models/userinfo.model";

type authState = {
    authInfo: AuthInfoModel | null
    updateAuthInfo: (userData : AuthInfoModel | null) => void
};
  
export const useAuthStore = create<authState>()(
    persist(
      (set) => ({
        authInfo: null,
        updateAuthInfo: (authData : AuthInfoModel | null) => set({ authInfo: authData })
      }),
      { name: "authStore" }
    )
);