
exports.up = knex => knex.schema.createTable('usuarios', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('email').notNullable()
    table.text('senha').notNullable()
    table.integer('area_id').references('areas.id').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trilhas');
