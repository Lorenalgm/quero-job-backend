
exports.up = knex => knex.schema.createTable('trilhas_recursos', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('link')
    table.text('descricao')
    table.integer('recurso_tipo_id').references('recursos_tipos.id').notNullable()
    table.integer('area_id').references('areas.id').notNullable()
    table.integer('trilha_id').references('trilhas.id').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trilhas_recursos');
