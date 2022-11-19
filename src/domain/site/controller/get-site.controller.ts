import { Controller, Get } from '@nestjs/common';
import { SiteService } from '../serrvice/site.service';

@Controller('/sites')
export class GetSiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get()
  getSites() {
    return this.siteService.getSites();
  }
}
