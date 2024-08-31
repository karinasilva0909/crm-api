import express from 'express';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3301;

// Middleware para analisar o corpo das requisições
app.use(express.json());

app.use('/api', userRoutes); // Usando as rotas de usuário

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
