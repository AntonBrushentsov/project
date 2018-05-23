import express from 'express';
import payload from 'request-payload';
import { deleteToken } from '../database';

const router = express.Router();

router.post('/', (req, res) => {
    payload(req,  body => {
        const { token } = body;
            deleteToken(token).catch(err => console.error(err)); 
    });
});

export default router;