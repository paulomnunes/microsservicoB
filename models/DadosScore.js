const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        unique: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    listaDeBens: {
        type: [String],
        default: [],
    },
    endereco: {
        type: String,
        required: true
    },
    fontesDeRenda: {
        type: [String],
        default: [],
    }
});
const DadosScore = mongoose.model('DadosScore', Schema)
module.exports = DadosScore