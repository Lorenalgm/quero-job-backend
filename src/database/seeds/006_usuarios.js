/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('usuarios').del()
    .then(function () {
      return knex('usuarios').insert([
        {id: 1, nome: 'Lorena', email: 'lorena@querojob.com', senha: 'admin', area_id: 1},
        {id: 1, nome: 'Luma', email: 'lorena@querojob.com', area_id: 1},
        {id: 1, nome: 'Bianca', email: 'lorena@querojob.com', area_id: 2}
      ]);
    });
};
