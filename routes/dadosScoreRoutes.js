const router = require('express').Router()
const DadosScore = require('../models/DadosScore')
router.post('/', async (req, res) => {
    const { cpf, idade, listaDeBens, endereco, fontesDeRenda } = req.body
    const dadosScore = {
        cpf, idade, listaDeBens, endereco, fontesDeRenda
    }

    if (!cpf) {
        return res.status(400).json({ message: 'O CPF é obrigatório' });
    }
    if (!idade) {
        return res.status(400).json({ message: 'A idade é obrigatória' });
    }
    if (!endereco) {
        return res.status(400).json({ message: 'O endereco é obrigatório' });
    }

    try {
        await DadosScore.create(dadosScore)
        res.status(201).json({ message: 'Dados do score cadastrado com sucesso!' })
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.cpf) {
            res.status(409).json({ message: 'CPF já cadastrado.' })
        } else {
            console.log(error.code)
            res.status(500).json({ message: 'Erro ao cadastrar os dados do score.', error })
        }
    }
})

router.get('/', async (req, res) => {
    const dadosScore = await DadosScore.find()
    try {
        res.status(200).json(dadosScore)
    } catch (error) {
        console.log(error.code)
        res.status(500).json({ message: 'Erro ao consultar os dados do score.', error })

    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const dadosScore = await DadosScore.findOne({ _id: id })

        if (!dadosScore) {
            return res.status(404).json({ message: 'Não foram encontrados dados correspondentes ao ID informado.' })
        }

        res.status(200).json(dadosScore)
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'ID inválido.' });
        }
        res.status(500).json({ message: 'Erro ao consultar os dados do ID informado.', error })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { cpf, idade, listaDeBens, endereco, fontesDeRenda } = req.body
    const dadosScore = {
        cpf, idade, listaDeBens, endereco, fontesDeRenda
    }

    try {
        const updatePerson = await DadosScore.updateOne({ _id: id }, dadosScore)
        if (updatePerson === 0) {
            return res.status(404).json({ message: 'Não foram encontrados dados correspondentes ao ID informado.' })
        }
        res.status(200).json(dadosScore)
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'ID inválido.' });
        }
        res.status(500).json({ message: 'Erro ao consultar os dados do ID informado.', error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const dadosScore = await DadosScore.findOne({ _id: id })

    if (!dadosScore) {
        return res.status(404).json({ message: 'Não foram encontrados dados correspondentes ao ID informado.' })
    }
    try {
        await DadosScore.deleteOne({ _id: id })
        res.status(200).json({ message: 'Dados score removido com sucesso!' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir os dados do ID informado.', error })
    }

})

module.exports = router