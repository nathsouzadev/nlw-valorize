import { Request, Response, NextFunction } from 'express';
import { UsersRepositories }from "../repositories/UsersRepository";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    
    const { user_id } = request;

    const usersRepository = new UsersRepositories();
    
    const { admin } = await usersRepository.findOne(user_id);
    
    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "User not authorized"
    })

}
