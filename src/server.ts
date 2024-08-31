import express from 'express';
import sequelize from './config/database';

const app = express();
const PORT = 3301;

const start = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();
