const mongoose = require("mongoose");

async function main() {
    mongoose.set("strictQuery", true);
    const DB_USER = process.env.DB_USER
    const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@mycluster.wizesps.mongodb.net/databaseB?retryWrites=true&w=majority`)
        .then(() => {
            console.log('Conexão com o MongoDB efetuada com sucesso!')
        })
        .catch(() => {
            console.log('Não foi possível efetuar a conexão com o MongoDB!')
        })
}

module.exports = main;
