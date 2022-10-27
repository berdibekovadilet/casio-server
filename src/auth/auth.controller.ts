import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/users.model";
import { AuthService } from "./auth.service";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Вход существующего пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: "Регистрация нового пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
