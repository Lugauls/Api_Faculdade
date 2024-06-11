const { Produtora } = require('../models');


const listarProdutoras = async (req, res) => {
  try {
    const produtoras = await Produtora.findAll();
    res.json(produtoras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterProdutora = async (req, res) => {
  try {
    const produtora = await Produtora.findByPk(req.params.id);
    if (produtora) {
      res.json(produtora);
    } else {
      res.status(404).json({ error: 'Produtora não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const criarProdutora = async (req, res) => {
  try {
    const { nome, sede } = req.body;
    const produtora = await Produtora.create({ nome, sede });
    res.status(201).json(produtora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const atualizarProdutora = async (req, res) => {
  try {
    const { nome, sede } = req.body;
    const produtora = await Produtora.findByPk(req.params.id);
    if (produtora) {
      await produtora.update({ nome, sede });
      res.json(produtora);
    } else {
      res.status(404).json({ error: 'Produtora não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deletarProdutora = async (req, res) => {
  try {
    const produtora = await Produtora.findByPk(req.params.id);
    if (produtora) {
      await produtora.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Produtora não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarProdutoras,
  obterProdutora,
  criarProdutora,
  atualizarProdutora,
  deletarProdutora
};