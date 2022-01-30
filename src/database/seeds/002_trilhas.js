/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('trilhas').del()
    .then(function () {
      return knex('trilhas').insert([
        {id: 1, nome: 'Área', trilha_categoria_id: 1},
        {id: 2, nome: 'Currículo', trilha_categoria_id: 1},
        {id: 3, nome: 'Portfólio', trilha_categoria_id: 1},
        {id: 4, nome: 'Vagas ', trilha_categoria_id: 1},
        {id: 5, nome: 'Entrevistas', trilha_categoria_id: 1},
        {id: 6, nome: 'Cursos', trilha_categoria_id: 1},
        {id: 7, nome: 'Entrevista ', trilha_categoria_id: 2}
      ]);
    });
};
