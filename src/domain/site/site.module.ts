import { Module } from '@nestjs/common';
import { GetSiteController } from './controller/get-site.controller';
import { SiteService } from './serrvice/site.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Site } from './entity/site.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Site] })],
  controllers: [GetSiteController],
  providers: [SiteService],
})
export class SiteModule {}
