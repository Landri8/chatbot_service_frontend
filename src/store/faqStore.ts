import { create  } from "zustand";
import { FAQModel } from "../models/faqInfo.model";

export const useFAQStore = create((set: any) => ({
    faqList: [],

    updateFAQList: (faqs : FAQModel[]) => set({ faqList: faqs })
}))