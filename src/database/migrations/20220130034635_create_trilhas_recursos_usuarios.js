
exports.up = knex => knex.schema.createTable('trilhas_recursos_usuarios', table => {
    table.increments('id')
    table.integer('trilha_recurso_id').references('trilhas_recursos.id').notNullable()
    table.integer('usuario_id').references('usuarios.id').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('trilhas_recursos_usuarios');
