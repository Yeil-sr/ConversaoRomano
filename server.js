const express = require('express');
const bodyParser = require('body-parser');
const NumerosRomanos = require('./numerosRomanos');
const path = require('path');

const app = express();
const port = 8080;
const numerosRomanos = new NumerosRomanos();

const assets = path.join(__dirname, 'assets');
app.use('/assets', express.static(assets));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/processar', (req, res) => {
    const { number1, number2, operation } = req.body;

    try {
        let resultado;
        switch (operation) {
            case 'add':
                resultado = numerosRomanos.adicionar(number1, number2);
                break;
            case 'subtract':
                resultado = numerosRomanos.subtrair(number1, number2);
                break;
            case 'multiply':
                resultado = numerosRomanos.multiplicar(number1, number2);
                break;
            case 'divide':
                resultado = numerosRomanos.dividir(number1, number2);
                break;
            case 'convertToRoman':
            case 'convertToInteger':
                // Se a operação é converter, apenas processa o primeiro número
                resultado = numerosRomanos.processarEntrada(number1);
                break;
            default:
                return res.status(400).send('Operação inválida.');
        }

        // Converte o resultado final se necessário
        resultado = numerosRomanos.converterResultado(resultado, operation);

        res.json({ resultado });
    } catch (error) {
        res.status(500).send(`Erro: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
