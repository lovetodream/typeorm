import { Inject } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { EntityClassOrSchema } from '../interfaces/entity-class-or-schema.type';
export declare const InjectRepository: (entity: EntityClassOrSchema, connection?: string) => ReturnType<typeof Inject>;
export declare const InjectConnection: (connection?: DataSource | DataSourceOptions | string) => ReturnType<typeof Inject>;
export declare const InjectEntityManager: (connection?: DataSource | DataSourceOptions | string) => ReturnType<typeof Inject>;
