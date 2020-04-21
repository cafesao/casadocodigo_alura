//Importações
const express = require('express')
const serverController = require('../controllers/serverController.js')

//Constantes
const routes = express.Router()

//Rotas
routes.get('/', serverController.coletarTudo)
routes.get('/livros', serverController.coletarLivros)

//Exportações
module.exports = routes
