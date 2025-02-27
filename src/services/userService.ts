import { UserCreationFormData } from "../screens/admin/users/schemas/UserCreationFormSchema";
import { UserUpdateFormData } from "../screens/admin/users/schemas/UserUpdateFormSchema";
import { getAuthRequest, postAuthRequest } from "./https";

const baseUrl = import.meta.env.VITE_API_URL;

export const createUserApi = (data: UserCreationFormData) => {
    return postAuthRequest(`${baseUrl}/users/create`, data);
}

export const getUserListApi = () => {
    return getAuthRequest(`${baseUrl}/users`);
}

export const getUserDetailsApi = (id: string) => {
    return getAuthRequest(`${baseUrl}/users/${id}`);
}

export const updateUserApi = (data: UserUpdateFormData) => {
    return postAuthRequest(`${baseUrl}/users/update`, data);
}

export const deleteUserApi = (data: { id: string }) => {
    return postAuthRequest(`${baseUrl}/users/delete`, data);
}