import { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "e74e188171024ba763887827a28ff35f") as IPayload;

        request.user_id = sub;

        return next();
    } catch (error) {
        response.status(401).end();
    }
    
    return next();

}
