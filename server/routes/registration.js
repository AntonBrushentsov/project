import express from 'express';
import payload from 'request-payload';
import cryptoJS from 'crypto-js';
import { getUserByLogin, addNewUser } from '../database';

const router = express.Router();

router.post('/', (req, res) => {
    payload(req,  body => {
        const { login, password } = JSON.parse(body);
        console.log('LOGIN: ', login);
        console.log('PASSWORD: ', password);
        const encrypted = cryptoJS.AES.encrypt(password, login).toString();
        console.log('ENCRYPTED: ', encrypted);
        getUserByLogin(login).then(result => {
            if (result.length !== 0) {
                res.send({ serverError:'Пользователь с таким именем уже существует', answer: ''});
            } else {
                addNewUser(login, encrypted).catch(error => console.error(error));
                res.send({serverError:'', answer: 'Вы успешно зарегистрировались'});
            }
        });
    });
});

export default router;