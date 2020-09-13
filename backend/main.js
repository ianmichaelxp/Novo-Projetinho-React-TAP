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

    app.listen(5000, () => {
        console.log('Servidor rodando no endereço http://localhost:5000');
    })

    // let c1 = new Cadastro({ nome: 'Michael', valor: '2' });
    // await c1.save();
    // console.log("c1 está salvo");
    // let cadastros = await Cadastro.find();
    // console.log(cadastros);
});