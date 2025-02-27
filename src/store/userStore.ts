import { create  } from "zustand";
import { UserModel } from "../models/userinfo.model";

export const useUserStore = create((set: any) => ({
    userList: [],

    updateUserList: (users : UserModel[]) => set({ userList: users })
}))