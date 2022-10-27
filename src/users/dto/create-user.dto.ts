import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "Почта пользователя" })
  readonly email: string;
  @ApiProperty({ example: "********", description: "Пароль пользователя" })
  readonly password: string;
}
