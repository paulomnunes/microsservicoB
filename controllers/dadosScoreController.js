const DadosScoreModel = require("../models/DadosScore");

const dadosScoreController = {
    create: async (req, res) => {
        console.log(req.body.cpf)
        console.log(req.body.idade)
        console.log(req.body.listaDeBens)
        console.log(req.body.endereco)
        console.log(req.body.fontesDeRenda)
        try {
            const dadosScore = {
                cpf: req.body.cpf,
                idade: req.body.idade,
                listaDeBens: req.body.listaDeBens,
                endereco: req.body.endereco,
                fontesDeRenda: req.body.fontesDeRenda,
            };
            console.log(dadosScore)
            if (!dadosScore.cpf) {
                return res.status(400).json({ message: 'O CPF é obrigatório' });
            }
            if (!dadosScore.idade) {
                return res.status(400).json({ message: 'A idade é obrigatória' });
            }
            if (!dadosScore.endereco) {
                return res.status(400).json({ message: 'O endereço é obrigatório' });
            }

            const response = await DadosScoreModel.create(dadosScore);

            res.status(201).json({ response, msg: "Dados do score criado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar os dados do score.', error })
        }
    },
    getAll: async (req, res) => {
        try {
            const dadosScores = await DadosScoreModel.find();

            res.json(dadosScores);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao consultar os dados do score.', error })
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const dadosScore = await DadosScoreModel.findById(id);

            if (!dadosScore) {
                res.status(404).json({ msg: "Dados do score não encontrado" });
                return;
            }

            res.json(dadosScore);
        } catch (error) {
            return res.status(404).json({ message: 'Não foram encontrados dados correspondentes ao ID informado.' })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const dadosScore = await DadosScoreModel.findById(id);

            if (!dadosScore) {
                res.status(404).json({ msg: "Dados do score não encontrado" });
                return;
            }

            const deletedDadosScore = await DadosScoreModel.findByIdAndDelete(id);

            res.status(200).json({ deletedDadosScore, msg: "Dados do score excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao excluir os dados do ID informado.', error })
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const dadosScore = {
                cpf: req.body.cpf,
                idade: req.body.idade,
                listaDeBens: req.body.listaDeBens,
                endereco: req.body.endereco,
                fontesDeRenda: req.body.fontesDeRenda,
            };

            const updateDadosScore = await DadosScoreModel.findByIdAndUpdate(id, dadosScore);

            if (!updateDadosScore) {
                res.status(404).json({ msg: "Dados do score não encontrado" });
                return;
            }

            res.status(200).json({ dadosScore, msg: "Dados do score atualizado com sucesso" });
        } catch (error) {
            if (error.kind === 'ObjectId') {
                return res.status(400).json({ message: 'ID inválido.' });
            }
            res.status(500).json({ message: 'Erro ao atualizar os dados do ID informado.', error })
        }
    }
}

module.exports = dadosScoreController;