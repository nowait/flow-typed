declare class Knex$Migrate {
  latest(): Promise<any>,
  rollback(): Promise<any>
}

declare type Knex$TransactionBody<T> = (tx:Knex$Transaction<T>) => Promise<T>;
declare class Knex$Transaction<T> mixins Knex$QueryBuilder<T>, events$EventEmitter, Promise {
  commit(connection?: any, value?: any): Promise<any>,
  rollback(): Promise<any>,
  savepoint(connection?: any): Promise<any>
}

declare type Knex$QueryBuilderFn<T> = (
  qb: Knex$QueryBuilder<T>
) => Knex$QueryBuilder<T> | void;

declare class Knex$QueryBuilder<T> mixins Promise<T> {
  select(key?: string[]): this,
  select(...key: string[]): this,
  timeout(ms: number, options?: { cancel: boolean }): this,
  column(key: string[]): this,
  column(...key: string[]): this,
  with(alias: string, w: string | Knex$QueryBuilderFn<T>): this,
  withSchema(schema: string): this,
  returning(column: string): this,
  returning(...columns: string[]): this,
  returning(columns: string[]): this,
  as(name: string): this,
  transacting(trx: ?Knex$Transaction<T>): this,
  where(builder: Knex$QueryBuilderFn<T>): this,
  where(column: string, value: any): this,
  where(column: string, operator: string, value: any): this,
  where(conditions: {[column: string]: any}): this,
  whereNot(builder: Knex$QueryBuilderFn<T>): this,
  whereNot(column: string, value: any): this,
  whereNot(column: string, operator: string, value: any): this,
  whereIn(column: string, values: any[]): this,
  whereNotIn(column: string, values: any[]): this,
  whereNull(column: string): this,
  whereNotNull(column: string): this,
  whereExists(column: string): this,
  whereNotExists(column: string): this,
  whereBetween(column: string, range: number[]): this,
  whereNotBetween(column: string, range: number[]): this,
  whereRaw(sql: string, bindings?: Knex$RawBindings): this,
  orWhere(builder: Knex$QueryBuilderFn<T>): this,
  orWhere(column: string, value: any): this,
  orWhere(column: string, operator: string, value: any): this,
  orWhereNot(builder: Knex$QueryBuilderFn<T>): this,
  orWhereNot(column: string, value: any): this,
  orWhereNot(column: string, operator: string, value: any): this,
  orWhereIn(column: string, values: any[]): this,
  orWhereNotIn(column: string, values: any[]): this,
  orWhereNull(column: string): this,
  orWhereNotNull(column: string): this,
  orWhereExists(column: string): this,
  orWhereNotExists(column: string): this,
  orWhereBetween(column: string, range: number[]): this,
  orWhereNotBetween(column: string, range: number[]): this,
  orWhereRaw(sql: string, bindings?: Knex$RawBindings): this,
  innerJoin(table: string, c1: string, operator: string, c2: string): this,
  innerJoin(table: string, c1: string, c2: string): this,
  innerJoin(builder: Knex$QueryBuilder<T>, c1?: string, c2?: string): this,
  innerJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  leftJoin(table: string, c1: string, operator: string, c2: string): this,
  leftJoin(table: string, c1: string, c2: string): this,
  leftJoin(builder: Knex$QueryBuilder<T>): this,
  leftJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  leftOuterJoin(table: string, c1: string, operator: string, c2: string): this,
  leftOuterJoin(table: string, c1: string, c2: string): this,
  leftOuterJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  rightJoin(table: string, c1: string, operator: string, c2: string): this,
  rightJoin(table: string, c1: string, c2: string): this,
  rightJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  rightOuterJoin(table: string, c1: string, operator: string, c2: string): this,
  rightOuterJoin(table: string, c1: string, c2: string): this,
  rightOuterJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  outerJoin(table: string, c1: string, operator: string, c2: string): this,
  outerJoin(table: string, c1: string, c2: string): this,
  outerJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  fullOuterJoin(table: string, c1: string, operator: string, c2: string): this,
  fullOuterJoin(table: string, c1: string, c2: string): this,
  fullOuterJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  crossJoin(column: string, c1: string, c2: string): this,
  crossJoin(column: string, c1: string, operator: string, c2: string): this,
  crossJoin(table: string, builder: Knex$QueryBuilderFn<T>): this,
  joinRaw(sql: string, bindings?: Knex$RawBindings): this,
  distinct(): this,
  groupBy(column: string): this,
  groupByRaw(sql: string, bindings?: Knex$RawBindings): this,
  orderBy(column: string, direction?: 'desc' | 'asc'): this,
  orderByRaw(sql: string, bindings?: Knex$RawBindings): this,
  offset(offset: number): this,
  limit(limit: number): this,
  having(column: string, operator: string, value: mixed): this,
  havingIn(column: string, values: Array<mixed>): this,
  havingNotIn(column: string, values: Array<mixed>): this,
  havingNull(column: string): this,
  havingNotNull(column: string): this,
  havingExists(builder: Knex$QueryBuilderFn<T> | Knex$QueryBuilder<T>): this,
  havingNotExists(builder: Knex$QueryBuilderFn<T> | Knex$QueryBuilder<T>): this,
  havingBetween<T>(column: string, range: [T, T]): this,
  havingNotBetween<T>(column: string, range: [T, T]): this,
  havingRaw(column: string, operator: string, value: mixed): this,
  havingRaw(column: string, value: mixed): this,
  havingRaw(raw: string, bindings?: Knex$RawBindings): this,
  union(): this,
  unionAll(): this,
  count(column?: string): this,
  countDistinct(column?: string): this,
  min(column?: string): this,
  max(column?: string): this,
  sum(column?: string): this,
  sumDistinct(column?: string): this,
  avg(column?: string): this,
  avgDistinct(column?: string): this,
  pluck(column: string): this,
  first(): this,
  from(table: string): this,
  from(builder: Knex$QueryBuilderFn<T> | Knex$Knex<T> | Knex$QueryBuilder<T>): this,
  into(table: string): this,
  insert(val: Object | Object[], returning?: string|Array<string>): this,
  del(): this,
  delete(): this,
  update(column: string, value: any): this,
  update(val: Object, returning: string|Array<string>): this,
  returning(columns: string[]): this
}

declare class Knex$Knex<T> mixins Knex$QueryBuilder<T>, Promise, events$EventEmitter {
  static (config: Knex$Config): Knex$Knex<T>,
  static QueryBuilder: typeof Knex$QueryBuilder,
  $call: (tableName: string) => Knex$QueryBuilder<T>,
  raw(sqlString: string, bindings?: Knex$RawBindings): any,
  client: any,
  destroy(): Promise<void>,
  transaction (run:Knex$TransactionBody<T>):Knex$Transaction<T>,
  migrate: Knex$Migrate
}

declare type Knex$PostgresConfig = {
  client?: 'pg',
  connection?: {
    host?: string,
    user?: string,
    password?: string,
    database?: string,
    charset?: string
  },
  searchPath?: string
};

declare type Knex$RawBindings = Array<mixed> | {[key: string]: mixed };

declare type Knex$MysqlConfig = {
  client?: 'mysql',
  connection?: {
    host?: string,
    user?: string,
    password?: string,
    database?: string
  }
};
declare type Knex$SqliteConfig = {
  client?: 'sqlite3',
  connection?: {
    filename?: string
  }
};
declare type Knex$Config =
  | Knex$PostgresConfig
  | Knex$MysqlConfig
  | Knex$SqliteConfig;

declare module 'knex' {
  declare type Error = {
    name: string,
    length: number,
    severity: string,
    code: string,
    detail: string,
    hint?: string,
    position?: any,
    intenralPosition?: any,
    internalQuery?: any,
    where?: any,
    schema: string,
    table: string,
    column?: any,
    dataType?: any,
    constraint?: string,
    file: string,
    line: string,
    routine: string
  };
  declare export type $Transaction<T> = Knex$Transaction<T>;
  declare export type $QueryBuilder<T> = Knex$QueryBuilder<T>;
  declare var exports: typeof Knex$Knex;
}
