import { MessageCreationFormData } from "../screens/contactus/schemas/MessageCreationFormSchema";
import { postRequest } from "./https";

const baseUrl = import.meta.env.VITE_API_URL;

export const sendMessageApi = (data: MessageCreationFormData) => {
    return postRequest(`${baseUrl}/app/messages`, data);
}