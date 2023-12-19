import express from 'express';
import cors from 'cors';
import { simulacao } from './app/functions/processamento.js';

const app = express();
const porta = process.env.PORT || 3000;

// Configurando requisições de diferentes origens
app.use(cors());

// Configurando suporte a JSON
app.use(express.json());

// Configurando suporte a dados de formulários (input)
app.use(express.urlencoded({ extended: true }));

app.post('/simulacao', (req, res) => {
    const { valorSolicitado, valorMinimo, taxaDeCusto } = req.body;

    simulacao(valorSolicitado, valorMinimo, taxaDeCusto, res);
});

// Configurando o servidor
app.listen(porta, () => {
    console.log('Servidor Express rodando...' + porta);
});
