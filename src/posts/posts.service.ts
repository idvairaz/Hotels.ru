import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./create-post.dto";
import {Post} from "./posts.model";
import {InjectModel} from "@nestjs/sequelize";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepo: typeof Post,
                private fileService: FilesService) {
    }
    async  create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postRepo.create({...dto, image: fileName})
    }
}
