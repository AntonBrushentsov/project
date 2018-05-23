import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'site',
    password: '12345',
    port: 5432,
});

client.connect().catch(err => console.log('ERROR: ', err));

export async function getDescriptionByID(id) {
    const query = await client.query('SELECT description FROM tables.description where id = $1', [id]);
    return query.rows;
}

export async function getUserByLogin(login) {
    const query = await client.query('SELECT login, password FROM tables.users where login = $1', [login]);
    return query.rows;
}


export async function addNewUser(login, encryptedPassword) {
    const query = await client.query('insert into tables.users (login, password) values($1, $2)', [login, encryptedPassword]);
    return query.rows;
}

export async function addTokenToUser(token, login) {
    const query = await client.query('update tables.users set token = $1 where login = $2', [token, login]);
    return query.rows;
}

export async function getUserByToken(token) {
    const query = await client.query('SELECT login, password FROM tables.users where token = $1', [token]);
    return query.rows;
}

export async function deleteToken(token) {
    const query = await client.query('update tables.users set token = default where token = $1', [token]);
    return query.rows;
}