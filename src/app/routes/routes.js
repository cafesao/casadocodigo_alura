//Importações
const express = require('express')
const serverController = require('../controllers/serverController.js')

//Constantes
const routes = express.Router()

//Rotas
routes.get('/', serverController.paginaInicial)
routes.get('/livros', serverController.coletarLivros)
routes.get('/livros/adicionar', serverController.formLivro)
routes.post('/livros', serverController.adicionarLivro)

//Exportações
module.exports = routes
