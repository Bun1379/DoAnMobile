import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = 'http://192.168.0.103:3000/api/v1'; // Đổi địa chỉ IP cho phù hợp

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => queryString.stringify(params),
});

export default axiosClient;
