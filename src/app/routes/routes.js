//Importações
const express = require('express')
const serverController = require('../controllers/serverController.js')

//Constantes
const routes = express.Router()

//Rotas
routes.get('/', serverController.paginaInicial)
routes.get('/livros', serverController.coletarLivros)
routes.get('/livros/adicionar', serverController.formLivro)
routes.get('/livros/form/:id', serverController.buscarLivro)
routes.put('/livros', serverController.editarLivro)
routes.post('/livros', serverController.adicionarLivro)
routes.delete('/livros/:id', serverController.removerLivro)

//Exportações
module.exports = routes
