import { axiosInstance } from "../../../../utils/axiosConfig";

export class HomeService {
    getAllProducts() {
        return axiosInstance.get('product-items')
    }
}