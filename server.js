//Importações
require('marko/node-require.js').install()

const markoExpress = require('marko/express.js')
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./src/app/routes/routes.js')

//Constantes
const server = express()

//Codigo
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
server.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method
      delete req.body._method
      return method
    }
  }),
)
server.use('/estatico', express.static('./src/app/public'))
server.use(markoExpress())
server.use('/api', routes)

//Iniciação do servidor
server.listen(3000, () => {
  console.log('Server iniciado na porta 3000')
})
