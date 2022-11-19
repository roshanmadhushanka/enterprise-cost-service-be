import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { Site } from '../../domain/site/entity/site.entity';

const logger = new Logger('orm');

const configuration: Options = {
  entities: [Site],
  dbName: 'enterprise-cost',
  type: 'mysql',
  port: 3306,
  user: 'admin',
  password: 'password',
  logger: logger.log.bind(logger),
};

export default configuration;
