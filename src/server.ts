import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

// Configurações de middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
    res.send('Backend do CRM está rodando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});