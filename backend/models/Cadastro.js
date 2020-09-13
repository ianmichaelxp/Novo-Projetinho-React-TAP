const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    cep: String,
    cidade: String,
    cpf: Number,
    email: String,
    endereco: String,
    estado: String,
    formato: Boolean,
    nome: String,
    numero: Number,
    senha: String,
    sobrenome: String
});


module.exports = mongoose.model('Cadastro', cadastroSchema);