import {IsNumber, IsString} from "class-validator";

export class AddRoleDto{
    @IsString({message: 'Роль должна быть строкой'})
    readonly value: string;

    @IsNumber({}, {message: 'Id должен быть числом'})
    readonly userId: number;
}