
exports.up = knex => knex.schema.createTable('recursos_tipos', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('recursos_tipos');
