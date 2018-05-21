import express from 'express';
import payload from 'request-payload';
import { getUserByLogin, addNewUser } from '../Database';

const router = express.Router();

router.post('/', (req, res) => {
    payload(req,  body => {
        const { login, str } = JSON.parse(body);
        console.log('LOGIN: ', login);
        console.log('DECRYPTED STRING: ', str);
        getUserByLogin(login).then(result => {
            if (result.length !== 0) {
                res.send({ serverError:'Пользователь с таким именем уже существует', answer: ''});
            } else {
                addNewUser(login, str).catch(error => console.error(error));
                res.send({serverError:'', answer: 'Вы успешно вошли в систему'});
            }
        });
    });
});

export default router;