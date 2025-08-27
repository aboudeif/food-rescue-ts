import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";


export class RegisterDto {
  @IsNotEmpty() name: string;
  @IsEmail() email: string;
  @IsNotEmpty() password: string;
  @IsOptional() @IsEnum(Role) role?: Role;
  @IsOptional() lat?: number;
  @IsOptional() lng?: number;
}