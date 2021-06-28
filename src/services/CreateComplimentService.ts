import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepository";
import { UsersRepositories }from "../repositories/UsersRepository";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const usersRepository = getCustomRepository(UsersRepositories);

        if(!message){
            throw new Error("Please insert a message!");
        }

        if(user_sender === user_receiver){
            throw new Error("You don't know register a message for yourself!");
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver);

        if (!userReceiverExists){
            throw new Error("Select a valid user!");
        }
        
        const compliment = complimentsRepository.create({ tag_id, user_sender, user_receiver, message })

        await complimentsRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }
