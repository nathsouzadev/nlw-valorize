import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepositories }from "../repositories/UsersRepository";
import { sign } from "jsonwebtoken";

interface IAutheticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAutheticateRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("Insert a email!");
        }

        const user = await usersRepository.findOne({ email });

        if (!user){
            throw new Error("Invalid email/password!");
        }

        if(!password){
            throw new Error("Please insert a password");
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch){
            throw new Error("Invalid email/password!");
        }
        
        const token = sign({
            email: user.email,
        }, "e74e188171024ba763887827a28ff35f",
        {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }
