import { getRequest, postAuthRequest, postRequest } from "./https"

const baseUrl = import.meta.env.VITE_API_URL;

export const loginApi = (data: any) => {
    return postRequest(`${baseUrl}/auth/login`, data);
}

export const logoutApi = (data: {id: string, email: string}) => {
    return postAuthRequest(`${baseUrl}/auth/logout`, data);
}