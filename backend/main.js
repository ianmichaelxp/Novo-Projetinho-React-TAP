require('dotenv').config();

const PORTA = parseInt(process.env.PORTA);
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const cadastroController = require('./controllers/CadastroController');


db.on('error', (error) => console.log(error));
db.once('open', async() => {
    console.log("BD conectado!");

    const app = express();

    app.use(cors());
    app.use(express.static('public'));
    app.use(bodyParser.json());

    app.use('/cadastros', cadastroController);

    app.listen(PORTA, () => {
        console.log('Servidor rodando no endereço http://localhost:' + PORTA);
    })

});