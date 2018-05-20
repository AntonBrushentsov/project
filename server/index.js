const db = require('./Database');
//const express = require('express');
import express from 'express';
const payload = require('request-payload');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get(/^(?!\/?[id,data,login]).+$/, (request, response) => {
    response.sendFile('/dist/index.html', { root: __dirname });  
});

let id;
app.post('/id', (req, res) => (
    payload(req,  body => {
        id = body;
        console.log('ID: ', id);
      })
));

app.get('/data', (req, res) => {
    db.getDescriptionByID(id)
    .then( result => { const { description } = result[0]; res.send(description); })
    .catch(err => console.log(err)); 
});

//let obj;
app.post('/login', (req, res) => payload(req,  body => {
     const { login, password } = JSON.parse(body);
     console.log(login);
     db.getUserByLogin(login).then(user => {
        user.length !== 0 ? res.send('all ok') : res.send('blya pizda');
     }).catch(err => console.log(err));
}));



app.listen(9000, () => console.log('server on port 9000'));
