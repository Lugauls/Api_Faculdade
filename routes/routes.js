const express = require ('express')
const router = express.Router()
const jogoController = require('../controllers/jogoController');
const produtoraController = require('../controllers/produtoraController');

router.get('/jogos', jogoController.listarJogos);
router.get('/jogos/:id', jogoController.obterJogo);
router.post('/jogos', jogoController.criarJogo);
router.put('/jogos/:id', jogoController.atualizarJogo);
router.delete('/jogos/:id', jogoController.deletarJogo);

router.get('/produtoras', produtoraController.listarProdutoras);
router.get('/produtoras/:id', produtoraController.obterProdutora);
router.post('/produtoras', produtoraController.criarProdutora);
router.put('/produtoras/:id', produtoraController.atualizarProdutora);
router.delete('/produtoras/:id', produtoraController.deletarProdutora);


router.get('/oi', (req, res)=> {
    res.send("Oi")
})
module.exports = router