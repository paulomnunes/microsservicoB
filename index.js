require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const dadosScoreRoutes = require('./routes/dadosScoreRoutes')
app.use('/dadosScore', dadosScoreRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo ao microsserviço dos dados de score',
        endpoints: {
            dadosScore: {
                description: 'Operações relacionadas aos dados de score',
                routes: {
                    getAll: { method: 'GET', url: '/dadosScore' },
                    getById: { method: 'GET', url: '/dadosScore/:id' },
                    create: { method: 'POST', url: '/dadosScore' },
                    update: { method: 'PATCH', url: '/dadosScore/:id' },
                    delete: { method: 'DELETE', url: '/dadosScore/:id' }
                }
            }
        }
    })
})

// Middleware para lidar com rotas não encontradas
app.use((req, res, next) => {
    res.status(404).json({
        message: "Rota não encontrada, confira abaixo as rotas disponíveis",
        endpoints: {
            dadosScore: {
                description: 'Operações relacionadas aos dados de score',
                routes: {
                    getAll: { method: 'GET', url: '/dadosScore' },
                    getById: { method: 'GET', url: '/dadosScore/:id' },
                    create: { method: 'POST', url: '/dadosScore' },
                    update: { method: 'PATCH', url: '/dadosScore/:id' },
                    delete: { method: 'DELETE', url: '/dadosScore/:id' }
                }
            }
        }
    });
});

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@mycluster.wizesps.mongodb.net/databaseB?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conexão com o MongoDB efetuada com sucesso!')
    })
    .catch(() => {
        console.log('Não foi possível efetuar a conexão com o MongoDB!')
    })
app.listen(3000)