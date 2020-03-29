exports.up = function(knex) { //reponsável pela criação da tabela
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    });

};

exports.down = function(knex) { //caso dê algo errado na tabela o que faço
    return knex.schema.dropTable('ongs');

};