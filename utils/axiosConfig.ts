import axios from "axios";

export const PORT: string = "4000";
export const IP: string = "192.168.46.134";
export const BASE_URI: string = `http://${IP}:${PORT}/`;

export const axiosInstance = axios.create({
    baseURL: BASE_URI,
});