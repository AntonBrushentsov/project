import express from 'express';
import payload from 'request-payload';
import { getDescriptionByID } from '../database';

const router = express.Router();

router.post('/', (req, res) => {
    payload(req,  body => {
        getDescriptionByID(body)
            .then( result => { const { description } = result[0]; res.send(description); })
            .catch(err => console.error(err)); 
    });
});

export default router;