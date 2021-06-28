import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepository";

class ListUserReceiveComplimentsService {
    async execute(user_id: string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        
        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            }
        })

        return compliments
    }
}

export { ListUserReceiveComplimentsService }
