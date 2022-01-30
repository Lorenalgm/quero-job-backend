/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('trilhas_categorias').del()
    .then(function () {
      return knex('trilhas_categorias').insert([
        {id: 1, nome: 'Teórico'},
        {id: 2, nome: 'Prático'}
      ]);
    });
};
