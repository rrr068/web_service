import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.articleService.createArticle(createArticleDto);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: number): Promise<Article[]> {
    return await this.articleService.findAllArticle(userId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: number,
    @Body() UpdateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.findOneArticle(id, UpdateArticleDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateArticle(updateArticleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Article> {
    return await this.articleService.deleteArticle(id);
  }
}
