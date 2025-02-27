import 'axios';
import axios, { AxiosResponse } from 'axios';
import ResponseModel from '../models/response.model';
import HTTPStatus from '../constants/httpStatusConst';
import { useAuthStore } from '../store/authStore';

const getAuthToken = () => {
    return useAuthStore.getState().authInfo?.accessToken; 
};

const getRefreshToken = () => {
    return useAuthStore.getState().authInfo?.refreshToken;
}

const handleAccessTokenExpired = async (data: AxiosResponse<any, any>, callback: () => Promise<any>) => {
    const response: ResponseModel = data.data;
    if (response.statusCode === HTTPStatus.UNAUTHORIZED) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refreshtoken`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getRefreshToken()}`
                }
            });
            
            const refreshedData: ResponseModel = response.data;
            
            if (refreshedData.statusCode === HTTPStatus.SUCCESS) {
                useAuthStore.getState().updateAuthInfo(refreshedData.data);
                return callback();
            } else {
                useAuthStore.getState().updateAuthInfo(null);
                localStorage.removeItem('authStore');
                throw new Error('Failed to refresh token');
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            throw error;
        }
    }
    return data;
};

export const getRequest = (url: string) : Promise<AxiosResponse<any, any>>  => {
    return axios.get(url);
}

export const postRequest = (url: string, body: any) : Promise<AxiosResponse<any, any>> => {
    return axios.post(url, body);
}   

export const getAuthRequest = async (url: string) : Promise<AxiosResponse<any, any>> => {
    try {
        const response = await axios.get(url, {headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
        }});
        
        return handleAccessTokenExpired(response, () => getAuthRequest(url));
    } catch (error) {
        console.error('Error in getAuthRequest:', error);
        throw error;
    }
}

export const postAuthRequest = async (url: string, body: any): Promise<AxiosResponse<any, any>> => {
    try {
        const response = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            }
        });
        
        return handleAccessTokenExpired(response, () => postAuthRequest(url, body));
    } catch (error) {
        console.error('Error in postAuthRequest:', error);
        throw error;
    }
};
