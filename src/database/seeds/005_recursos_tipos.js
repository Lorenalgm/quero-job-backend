/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('recursos_tipos').del()
    .then(function () {
      return knex('recursos_tipos').insert([
        {id: 1, nome: 'Vídeo'},
        {id: 2, nome: 'Artigo'},
        {id: 3, nome: 'Texto'}
      ]);
    });
};
