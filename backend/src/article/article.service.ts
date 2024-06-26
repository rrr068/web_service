import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Article } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const { name, body, userId } = createArticleDto;
    return await this.prisma.article.create({
      data: {
        name,
        body,
        userId,
      },
    });
  }

  async findAllArticle(userId: number): Promise<Article[]> {
    return await this.prisma.article.findMany({
      where: { userId },
    });
  }

  async findOneArticle(id: number, data: UpdateArticleDto): Promise<Article> {
    return this.prisma.article.update({
      where: { id },
      data,
    });
  }

  async updateArticle(UpdateArticleDto: UpdateArticleDto): Promise<Article> {
    const { id, name, body } = UpdateArticleDto;
    return await this.prisma.article.update({
      data: { name, body },
      where: { id },
    });
  }

  deleteArticle(id: number): Promise<Article> {
    return this.prisma.article.delete({ where: { id } });
  }
}
