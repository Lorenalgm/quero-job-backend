
exports.up = knex => knex.schema.createTable('trilhas', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.integer('trilha_categoria_id').references('trilhas_categorias.id').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trilhas');
