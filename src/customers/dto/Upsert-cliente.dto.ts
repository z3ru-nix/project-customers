import { IsEmail, IsNotEmpty } from "class-validator";
export class UpsertEmailDTO{
        @IsEmail()
        @IsNotEmpty()
        email: string;

}