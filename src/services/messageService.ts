import { getAuthRequest, postAuthRequest } from "./https";

const baseUrl = import.meta.env.VITE_API_URL;

export const getMessageListApi = () => {
    return getAuthRequest(`${baseUrl}/messages`);
}

export const getMessageDetailsApi = (id: string) => {
    return getAuthRequest(`${baseUrl}/messages/${id}`);
}

export const updateMessageToMarkReadApi = (body: {id: string}) => {
    return postAuthRequest(`${baseUrl}/messages/markread`, body);
}

export const deleteMessageApi = (data: { id: string }) => {
    return postAuthRequest(`${baseUrl}/messages/delete`, data);
}