import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  body?: string;

  @IsNotEmpty()
  userId: number;
}
