const { Jogo } = require('../models');


const listarJogos = async (req, res) => {
  try {
    const jogos = await Jogo.findAll();
    res.json(jogos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterJogo = async (req, res) => {
    try {
      const jogo = await Jogo.findByPk(req.params.id);
      if (jogo) {
        res.json(jogo);
      } else {
        res.status(404).json({ error: 'Jogo não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const criarJogo = async (req, res) => {
  try {
    const { nome, genero } = req.body;
    const jogo = await Jogo.create({ nome, genero });
    res.status(201).json(jogo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const atualizarJogo = async (req, res) => {
    try {
      const { nome, genero } = req.body;
      const jogo = await Jogo.findByPk(req.params.id);
      if (jogo) {
        await jogo.update({ nome, genero });
        res.json(jogo);
      } else {
        res.status(404).json({ error: 'Jogo não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Deletar um jogo
  const deletarJogo = async (req, res) => {
    try {
      const jogo = await Jogo.findByPk(req.params.id);
      if (jogo) {
        await jogo.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Jogo não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    listarJogos,
    obterJogo,
    criarJogo,
    atualizarJogo,
    deletarJogo
  };