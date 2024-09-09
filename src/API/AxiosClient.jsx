import axios from 'axios';
import queryString from 'query-string';
import { Alert } from 'react-native'; // Để hiển thị cảnh báo
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://192.168.0.103:3000/api/v1'; // Đổi địa chỉ IP cho phù hợp

// Tạo axios client chung
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => queryString.stringify(params),
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => queryString.stringify(params),
});

axiosPrivate.interceptors.request.use(config => {
    const token = AsyncStorage.getItem('token');
    if (!token) {
        // Nếu không có token, điều hướng về trang login
        Alert.alert("Thông báo", "Vui lòng đăng nhập lại.");
        return Promise.reject(new Error("Không có token, vui lòng đăng nhập lại."));
    } else {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    }
}, error => {
    return Promise.reject(error);
});

export { axiosClient, axiosPrivate };
