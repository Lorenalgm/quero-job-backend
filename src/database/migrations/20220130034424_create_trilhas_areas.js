
exports.up = knex => knex.schema.createTable('trilhas_areas', table => {
    table.increments('id')
    table.integer('trilha_id').references('trilhas.id').notNullable()
    table.integer('area_id').references('areas.id').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trilhas_areas');
