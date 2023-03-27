import { UserService } from "./user.service";
import { CreateUserDto } from "../../dto/create-user.dto";
import { LoginUserDto } from "../../dto/loginUser.dto";
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    register(newUser: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    login(User: LoginUserDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
