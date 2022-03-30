import { Type } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DataSource, DataSourceOptions } from 'typeorm';
import { EntityClassOrSchema } from '../interfaces/entity-class-or-schema.type';
/**
 * This function generates an injection token for an Entity or Repository
 * @param {EntityClassOrSchema} entity parameter can either be an Entity or Repository
 * @param {string} [connection='default'] Connection name
 * @returns {string} The Entity | Repository injection token
 */
export declare function getRepositoryToken(entity: EntityClassOrSchema, connection?: DataSource | DataSourceOptions | string): Function | string;
/**
 * This function generates an injection token for an Entity or Repository
 * @param {Function} This parameter can either be an Entity or Repository
 * @returns {string} The Repository injection token
 */
export declare function getCustomRepositoryToken(repository: Function): string;
/**
 * This function returns a Connection injection token for the given Connection, ConnectionOptions or connection name.
 * @param {DataSource | DataSourceOptions | string} [connection='default'] This optional parameter is either
 * a Connection, or a ConnectionOptions or a string.
 * @returns {string | Function} The Connection injection token.
 */
export declare function getConnectionToken(connection?: DataSource | DataSourceOptions | string): string | Function | Type<DataSource>;
/**
 * This function returns a Connection prefix based on the connection name
 * @param {DataSource | DataSourceOptions | string} [connection='default'] This optional parameter is either
 * a Connection, or a ConnectionOptions or a string.
 * @returns {string | Function} The Connection injection token.
 */
export declare function getConnectionPrefix(connection?: DataSource | DataSourceOptions | string): string;
/**
 * This function returns an EntityManager injection token for the given Connection, ConnectionOptions or connection name.
 * @param {DataSource | DataSourceOptions | string} [connection='default'] This optional parameter is either
 * a Connection, or a ConnectionOptions or a string.
 * @returns {string | Function} The EntityManager injection token.
 */
export declare function getEntityManagerToken(connection?: DataSource | DataSourceOptions | string): string | Function;
export declare function handleRetry(retryAttempts?: number, retryDelay?: number, connectionName?: string, verboseRetryLog?: boolean, toRetry?: (err: any) => boolean): <T>(source: Observable<T>) => Observable<T>;
export declare function getConnectionName(options: DataSourceOptions): string;
export declare const generateString: () => string;
