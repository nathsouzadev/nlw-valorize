import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController{
    async handle(request: Request, response: Response){
        const { user_id } = request;

        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const sendCompliments = await listUserSendComplimentsService.execute(user_id);

        return response.json(sendCompliments);
    }
}

export { ListUserSendComplimentsController }
