import { CreateUserDto } from "../../dto/create-user.dto";
import { LoginUserDto } from "../../dto/loginUser.dto";
export declare class UserService {
    register({ name, lastName, email, password }: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    login({ email, password }: LoginUserDto): Promise<{
        name: string;
        email: string;
        id: string;
    }>;
}
