const express = require('express');
const router = express.Router();
const Cadastro = require('../models/Cadastro')

const getProdutoID = async(req, res, next) => {
    try {
        let cadastro = await Cadastro.findById(req.params.id);
        if (cadastro === null) {
            res.status(404).json({ erro: 'Cadastro não encontrado.' });
        } else {
            req.cadastro = cadastro;
            next();
        }

    } catch (erro) {
        res.status(500).json({ erro: 'Id não existe no bd.' });
    }
}

//FIND ALL
router.get('/', async(req, res) => {
    res.json(await Cadastro.find());
});

//FIND BY ID
router.get('/:id', getProdutoID, (req, res) => {
    res.json(req.cadastro);
});

//POST
router.post('/', async(req, res) => {
    let cadastro = await new Cadastro(req.body).save();
    res.json(cadastro);
});

//PUT
router.put('/:id', getProdutoID, async(req, res) => {

    await Cadastro.update(req.body)
    res.send('Atualização concluída.');
});

//DELETE
router.delete('/:id', getProdutoID, async(req, res) => {
    await req.cadastro.delete();
    res.send('Cadastro excluído.');
});
module.exports = router;