const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'site',
    password: '12345',
    port: 5432,
});

client.connect().catch( err => console.log('ERROR: ', err));

module.exports.getDescriptionByID = async function(id) {   
    const query = await client.query('SELECT description FROM tables.description where id = $1', [id]); 
    return query.rows;
}

module.exports.getUserByLogin = async function(login) {   
    const query = await client.query('SELECT login, password  FROM tables.users where login = $1', [login]); 
    return query.rows;
}