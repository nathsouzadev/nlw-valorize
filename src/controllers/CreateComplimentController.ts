import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController{
    async handle(request: Request, response: Response){
        const { tag_id, user_receiver, message } = request.body;
        const user_sender = request.user_id;

        const createComplimentsService = new CreateComplimentService();

        const compliment = await createComplimentsService.execute({ tag_id, user_sender, user_receiver, message });

        return response.json(compliment);
    }
}

export { CreateComplimentController }
