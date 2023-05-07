import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{

    @ApiProperty({example: 'Razumova@gmail.com', description: 'Адрес электронной почты'})
    @IsString({message: 'email должен быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'Пароль пользователя'})
    @IsString({message: 'Пароль должен быть строкой'})
    @Length(4, 16, {message:'Не меньше 4 и не больше 16 символов'})
    readonly password: string;
}

