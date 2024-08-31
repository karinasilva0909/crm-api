import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'digielevate_crm',
  dialect: 'mysql',
  username: 'digielevate_crm',
  password: 'Z}33m_3[N*ID',
  host: 'digielevate.com.br',
  models: [__dirname + '/../models'],
  port: 3306,
});

export default sequelize;
