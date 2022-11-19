import { Module } from '@nestjs/common';
import { SiteModule } from './domain/site/site.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forRoot(), SiteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
