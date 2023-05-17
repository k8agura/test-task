import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@user-mail.ru', description: 'Почтовый адрес пользователя'})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'Пароль пользователя'})
    readonly password: string;
}