
exports.up = knex => knex.schema.createTable('trilhas_categorias', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trilhas_categorias');
