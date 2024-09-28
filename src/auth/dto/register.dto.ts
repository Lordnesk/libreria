import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsString()
    @MinLength(1, {message: "This camp can't be empty"})
    username: string;

    @IsEmail({}, {message: "This camp can't be empty"})
    email: string;

    @IsString()
    @MinLength(6, {message: "This camp can't be empty"})
    @Transform(({ value }) => value.trim())
    password: string;
}