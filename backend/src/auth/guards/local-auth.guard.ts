// (1) 必要なパッケージをインストール
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// LocalAuthGuardクラスの作成
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();

    if (result && request.user) {
      return true;
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
