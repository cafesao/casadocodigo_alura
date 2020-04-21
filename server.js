//Importações
require('marko/node-require.js').install()

const markoExpress = require('marko/express.js')
const express = require('express')
const routes = require('./src/app/routes/routes.js')

//Constantes
const server = express()

//Codigo
server.use(express.json())
server.use(markoExpress())
server.use('/api', routes)

//Iniciação do servidor
server.listen(3000, () => {
  console.log('Server iniciado na porta 3000')
})
