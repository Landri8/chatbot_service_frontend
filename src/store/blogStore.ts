import { create  } from "zustand";
import { BlogModel } from "../models/bloginfo.model";

export const useBlogStore = create((set: any) => ({
    blogList: [],

    updateBlogList: (blogs : BlogModel[]) => set({ blogList: blogs })
}))