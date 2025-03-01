import { MessageCreationFormData } from "../screens/contactus/schemas/MessageCreationFormSchema";
import { getRequest, postRequest } from "./https";

const baseUrl = import.meta.env.VITE_API_URL;

export const sendMessageApi = (data: MessageCreationFormData) => {
    return postRequest(`${baseUrl}/app/messages`, data);
}

export const getVerficationCodeApi = (body: { email: string }) => {
    return postRequest(`${baseUrl}/app/otp/get`, body);
}

export const verifyEmailApi = (body: { email: string, otp: string }) => {
    return postRequest(`${baseUrl}/app/otp/verify`, body);
}

export const getBlogsApi = () => {
    return getRequest(`${baseUrl}/app/blogs`);
}

export const getBlogDetailsApi = (id: string) => {
    return getRequest(`${baseUrl}/app/blogs/${id}`);
}