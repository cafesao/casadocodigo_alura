//Importações
require('marko/node-require.js').install()

const markoExpress = require('marko/express.js')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/app/routes/routes.js')

//Constantes
const server = express()

//Codigo
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
server.use(markoExpress())
server.use('/api', routes)

//Iniciação do servidor
server.listen(3000, () => {
  console.log('Server iniciado na porta 3000')
})
