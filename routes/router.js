const router = require("express").Router();

const dadosScoreRouter = require("./dadosScoreRouter");

router.use("/dadosScore", dadosScoreRouter);

router
    .get('/', (req, res) => {
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
router.use((req, res, next) => {
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

module.exports = router;