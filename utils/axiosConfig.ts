import axios from "axios"

const PORT: string = "4000"
const IP: string = "10.0.8.37"

export const axiosInstance = axios.create({
    baseURL: `http://${IP}:${PORT}/`,
});