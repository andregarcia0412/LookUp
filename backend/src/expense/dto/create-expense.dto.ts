import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateExpenseDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    category: string

    @IsString()
    description: string

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsNumber()
    @IsNotEmpty()
    user_id: number
}
