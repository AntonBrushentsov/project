import express from 'express';
import payload from 'request-payload';
import cryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { getUserByLogin, addTokenToUser } from '../database';

const router = express.Router();

router.post('/', (req, res) => {
    payload(req, body => {
        const { login, password } = JSON.parse(body);
        getUserByLogin(login).then(result => {
            if (result.length === 0) {
                res.send({ serverError: 'Пользователь с таким именем не существует' });
            } else {
                const p = result[0].password;
                const decrypted = cryptoJS.AES.decrypt(p, login).toString(cryptoJS.enc.Utf8);
                if(password === decrypted) {
                    const user = {
                        login: login
                    };
                    jwt.sign({ user }, 'someSecretKey', (err, token) => {
                        addTokenToUser(token, login).catch(error => console.error(error));
                        res.json({token});
                    });
                } else {
                    res.send({ serverError: 'Неверный пароль' });
                }
            }
        }).catch(error => console.error(error));        

    });
});

export default router;
