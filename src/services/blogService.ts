import { BlogCreationFormData } from "../screens/admin/blogs/schemas/BlogCreationFormSchema";
import { BlogUpdateFormData } from "../screens/admin/blogs/schemas/BlogUpdateFormSchema";
import { getAuthRequest, postAuthRequest } from "./https";

const baseUrl = import.meta.env.VITE_API_URL;

export const createBlogApi = (data: BlogCreationFormData) => {
    return postAuthRequest(`${baseUrl}/blogs/create`, data);
}

export const getBlogListApi = () => {
    return getAuthRequest(`${baseUrl}/blogs`);
}

export const getBlogDetailsApi = (id: string) => {
    return getAuthRequest(`${baseUrl}/blogs/${id}`);
}

export const updateBlogApi = (data: BlogUpdateFormData) => {
    return postAuthRequest(`${baseUrl}/blogs/update`, data);
}

export const deleteBlogApi = (data: { id: string }) => {
    return postAuthRequest(`${baseUrl}/blogs/delete`, data);
}