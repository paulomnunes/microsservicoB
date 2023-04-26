const mongoose = require('mongoose')

const { encrypt, decrypt } = require('../utils/crypto')

const schemaOptions = {
    toJSON: { getters: true },
    toObject: { getters: true },
};

const Schema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        unique: true,
        set: encrypt,
        get: decrypt,
    },
    idade: {
        type: Number,
        required: true
    },
    listaDeBens: {
        type: [String],
        default: [],
        set: encrypt,
        get: decrypt,
    },
    endereco: {
        type: String,
        required: true,
        set: encrypt,
        get: decrypt,
    },
    fontesDeRenda: {
        type: [String],
        default: [],
        set: encrypt,
        get: decrypt,
    }
}, schemaOptions);

const DadosScore = mongoose.model('DadosScore', Schema);
module.exports = DadosScore;