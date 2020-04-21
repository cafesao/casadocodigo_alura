const db = require('../config/database')

const livroDao = {
  buscarlista: () =>
    new Promise((resolve, reject) =>
      db.all('SELECT * FROM livros', (erro, resultados) => {
        if (erro) return reject('Não foi possivel listar os livros')
        return resolve(resultados)
      }),
    ),

  buscarID: (id) =>
    new Promise((resolve, reject) =>
      db.get(
        `
        SELECT *
        FROM livros
        WHERE id = ?
        `,
        [id],
        (erro, livro) => {
          if (erro) return reject('Não foi possível encontrar o livro!')
          return resolve(livro)
        },
      ),
    ),

  adiciona: ({ titulo, preco, descricao }) =>
    new Promise((resolve, reject) =>
      db.run(
        `
      INSERT INTO livros (
        titulo,
        preco,
        descricao
      ) values (?,?,?)
      `,
        [titulo, preco, descricao],
        (erro) => {
          if (erro) {
            console.log(err)
            return reject('Não foi possivel adicionar o livro')
          }

          resolve()
        },
      ),
    ),
  atualizar: ({ titulo, preco, descricao, id }) =>
    new Promise((resolve, reject) =>
      db.run(
        `
      UPDATE livros SET
      titulo = ?,
      preco = ?,
      descricao = ?
      WHERE id = ?
      `,
        [titulo, preco, descricao, id],
        (erro) => {
          if (erro) return reject('Não foi possível atualizar o livro!')
          resolve()
        },
      ),
    ),

  remover: (id) =>
    new Promise(
      (resolve, reject) =>
        new Promise((resolve, reject) => {
          db.run(
            `
        DELETE
        FROM livros
        WHERE id = ?
      `,
            [id],
            (erro) => {
              if (erro) return reject('Não foi possível remover o livro!')
              return resolve()
            },
          )
        }),
    ),
}

module.exports = livroDao
