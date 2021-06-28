import { getCustomRepository } from "typeorm";
import { TagsRepositories }from "../repositories/TagsRepository";

class ListTagsService {
    async execute(){
        const tagsRepository = getCustomRepository(TagsRepositories);

        const tags = await tagsRepository.find();
        
        return tags
    }
}

export { ListTagsService }
