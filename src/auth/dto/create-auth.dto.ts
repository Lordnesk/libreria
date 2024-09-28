import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAuthDto{
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    email: string;

    @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}
