import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSongRequestDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;
    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, {each: true})
    readonly artists: number[];
    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate: Date;
    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date
    @IsString()
    @IsOptional()
    readonly lyrics?: string;
}