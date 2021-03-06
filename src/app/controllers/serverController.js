//Importação
const listaMarko = require('../views/livros/lista/lista.marko')
const formMarko = require('../views/livros/form/form.marko')

//Banco de Dados
const db = require('../config/database')
const livroDao = require('../infra/lista-dao')

//Exportações + Metodos
module.exports = {
  paginaInicial(req, res) {
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
    livroDao
      .buscarlista()
      .then((livros) =>
        res.marko(listaMarko, {
          livros,
        }),
      )
      .catch((erro) => console.log(erro))
  },

  formLivro(req, res) {
    res.marko(formMarko, { livro: {} })
  },

  adicionarLivro(req, res) {
    livroDao
      .adiciona(req.body)
      .then(res.redirect('/api/livros'))
      .catch((erro) => console.log(erro))
  },

  removerLivro(req, res) {
    const id = req.params.id

    livroDao
      .remover(id)
      .then(() => res.status(200).end())
      .catch((err) => console.log(err))
  },

  buscarLivro(req, res) {
    const id = req.params.id

    livroDao
      .buscarID(id)
      .then((livro) => res.marko(formMarko, { livro }))
      .catch((err) => console.log(err))
  },

  editarLivro(req, res) {
    livroDao
      .atualizar(req.body)
      .then(res.redirect('/api/livros'))
      .catch((err) => console.log(err))
  },
}
