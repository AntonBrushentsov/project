import express from 'express';
const app = express();

import data from './routes/data';
import registration from './routes/registration';
import login from './routes/login';
import profile from './routes/profile';
import logout from './routes/logout';

app.use(express.static(__dirname + '/dist'));

app.use('/data', data);
app.use('/registration', registration);
app.use('/login', login);
app.use('/profile', profile);
app.use('/logout', logout);

app.get(/^(?!\/?[data,registration,login]).+$/, (request, response) => {
    response.sendFile('/dist/index.html', { root: __dirname });  
});

/*app.post('/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'someSecretKey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...', authData
            });
        }
    });
});

app.post('/login',(req, res) => {
    const user = {
        id: 'someID',
        login: 'login'
    };
    jwt.sign({user}, 'someSecretKey', { expiresIn: '60s' }, (err, token)=> {
        res.json({
            token
        });
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next(); 
    } else {
        res.sendStatus(403);
    }
}*/

app.listen(9000, () => console.log('server on port 9000'));
