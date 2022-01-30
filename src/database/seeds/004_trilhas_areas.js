/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('trilhas_areas').del()
    .then(function () {
      return knex('trilhas_areas').insert([
        {id: 1, area_id: 1, trilha_id: 1},
        {id: 2, area_id: 1, trilha_id: 2},
        {id: 3, area_id: 1, trilha_id: 3},
        {id: 4, area_id: 1, trilha_id: 4},
        {id: 5, area_id: 1, trilha_id: 5},
        {id: 6, area_id: 1, trilha_id: 6},
        {id: 7, area_id: 1, trilha_id: 7},
        {id: 8, area_id: 2, trilha_id: 1},
        {id: 9, area_id: 2, trilha_id: 2},
        {id: 10, area_id: 2, trilha_id: 4},
        {id: 11, area_id: 2, trilha_id: 5},
        {id: 12, area_id: 2, trilha_id: 6},
        {id: 13, area_id: 2, trilha_id: 7}
      ]);
    });
};
