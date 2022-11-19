import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Site {
  @PrimaryKey()
  id: number;

  @Property()
  code: string;

  @Property()
  name: string;
}
