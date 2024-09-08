import axiosClient from "./AxiosClient";

class AuthorAPI {

    static async Signup(data) {
        const url = '/user/signup';
        return axiosClient.post(url, data);
    }

    static async Login(data) {
        const url = '/user/login';
        return axiosClient.post(url, data);
    }

    static async SendOTP(data) {
        const url = '/user/send-otp';
        return axiosClient.post(url, data);
    }

    static async ResetPW(data) {
        const url = '/user/reset-password';
        return axiosClient.post(url, data);
    }
}

export default AuthorAPI;