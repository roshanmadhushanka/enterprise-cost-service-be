import { Injectable } from '@nestjs/common';
import { Site } from '../entity/site.entity';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: EntityRepository<Site>,
  ) {}

  async getSites(): Promise<Site[]> {
    return this.siteRepository.findAll();
  }
}
