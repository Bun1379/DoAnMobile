import axios from 'axios';
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:3000/api/v1';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => queryString.stringify(params)
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

axiosPrivate.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosPrivate.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    console.log(error);

    if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');

        // Thêm cờ `shouldNavigateToLogin` để thông báo component điều hướng
        return Promise.reject({ ...error, shouldNavigateToLogin: true });
    }
    return Promise.reject(error);
});

export { axiosClient, axiosPrivate };
