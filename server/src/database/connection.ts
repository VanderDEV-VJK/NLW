import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

// Migrations = Histórico do banco de dados

// create table points = eu
// create table users = amigo

// somente executando um comando pode ser unido as duas tabelas em uma.