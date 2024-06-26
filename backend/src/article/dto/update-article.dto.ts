import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  id: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  body?: string;
}
