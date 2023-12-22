import { axiosInstance } from "../../../../utils/axiosConfig";
import { UserCredentials } from "../../../models/user/user.dto";

export class SignupService {
    signUp(userPayLoads: UserCredentials) {
        return axiosInstance.post('/user-cred/signin', userPayLoads);
    }
}