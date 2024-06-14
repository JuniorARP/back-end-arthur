import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Tasks } from './entity/Tasks';


const PostgresAppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cpltpviju9rs73fk4d5g-a.oregon-postgres.render.com',
  port: 5432,
  username: 'tarefasdb_user',
  password: '4gocQ3cwqc5jDpPvu6Bi0seXoQXwHFTR',
  database: 'tarefasdb',
  synchronize: true,
  logging: true,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
  ssl: true,
});


const SqliteAppDataSource = new DataSource({
  type: 'sqlite',
  database: 'tarefasdb.sql',
  synchronize: true,
  logging: true,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
});


export const AppDataSource =
  process.env.ENV === 'PROD' ? PostgresAppDataSource : SqliteAppDataSource;
