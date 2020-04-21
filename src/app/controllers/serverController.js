//Importação
const listaMarko = require('../views/livros/lista/lista.marko')

//Exportações + Metodos
module.exports = {
  coletarTudo(req, res) {
    res.send(`
          <html lang="pt-br">
              <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Casa do Codigo</title>
              </head>
              <body>
                  <h1>Casa do Codigo</h1>
                  <a href="/api/livros">Consultar Livros</a>
              </body>
          </html>
          `)
  },

  coletarLivros(req, res) {
    res.marko(listaMarko, {
      livros: [
        {
          id: 1,
          titulo: 'Fundamentos do Node',
        },
        {
          id: 2,
          titulo: 'Node Avançado',
        },
      ],
    })
  },
}
