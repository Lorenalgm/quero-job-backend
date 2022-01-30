const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const usuarios = await knex.select().table('usuarios')
        
        return response.json(usuarios);
    },
    async store(request, response){
        const { nome, email, senha, area_id } = request.body;

        try {
            let usuario = await knex('usuarios').insert({
                nome: nome,
                email: email,
                senha: senha,
                area_id: area_id
            }).returning('*');

            usuario = usuario[0];

            return response.status(201).json(usuario);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar o usuário'});
        }
    },
    async delete(request, response){
        const {usuario_id} = request.params;

        try {
            await knex('usuarios').where('id', usuario_id).delete();
            return response.status(200).json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {Usuário.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir o usuário'});
        }
    },
}