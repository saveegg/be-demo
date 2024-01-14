import { ApiProperty } from "@nestjs/swagger"
import { IsString, MaxLength, MinLength } from "class-validator"

export class TodoDto {
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    title: string

    @ApiProperty()
    @IsString()
    @MaxLength(150)
    description: string
}