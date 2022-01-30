/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('areas').del()
    .then(function () {
      return knex('areas').insert([
        {id: 1, nome: 'Desenvolvimento'},
        {id: 2, nome: 'Vendas'}
      ]);
    });
};
