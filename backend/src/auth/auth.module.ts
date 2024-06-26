import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserService } from '../user/user.service'; // 修正: ファイル名の大文字小文字
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    LocalAuthGuard,
    JwtStrategy,
    LocalStrategy,
    PrismaService,
    UserService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
