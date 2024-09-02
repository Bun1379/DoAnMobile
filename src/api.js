// src/api.js
import axios from 'axios';

// Tạo một instance của axios với cấu hình mặc định
const api = axios.create({
    baseURL: 'http:///localhost:3000/api/v1', // Địa chỉ cơ sở của API
    timeout: 10000, // Thời gian chờ yêu cầu (10 giây)
    headers: {
        'Content-Type': 'application/json',
        // Thêm bất kỳ header tùy chỉnh nào ở đây nếu cần
    },
});

// Ví dụ về cách cấu hình interceptor để xử lý lỗi toàn cục
api.interceptors.response.use(
    response => response,
    error => {
        // Xử lý lỗi toàn cục
        console.error('Có lỗi xảy ra:', error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);

export default api;
