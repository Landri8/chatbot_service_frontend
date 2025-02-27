import { FAQCreationFormData } from "../screens/faq/schemas/FAQCreationFormSchema";
import { FAQUpdateFormData } from "../screens/faq/schemas/FAQUpdateFormSchema";
import { getAuthRequest, postAuthRequest } from "./https";

const baseUrl = import.meta.env.VITE_API_URL;

export const createFAQApi = (data: FAQCreationFormData) => {
    return postAuthRequest(`${baseUrl}/faqs/create`, data);
}

export const getFAQListApi = () => {
    return getAuthRequest(`${baseUrl}/faqs`);
}

export const getFAQDetailsApi = (id: string) => {
    return getAuthRequest(`${baseUrl}/faqs/${id}`);
}

export const updateFAQApi = (data: FAQUpdateFormData) => {
    return postAuthRequest(`${baseUrl}/faqs/update`, data);
}

export const deleteFAQApi = (data: { id: string }) => {
    return postAuthRequest(`${baseUrl}/faqs/delete`, data);
}