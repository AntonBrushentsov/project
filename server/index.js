import express from 'express';
const app = express();

import data from './routes/data';
import registration from './routes/registration';

app.use(express.static(__dirname + '/dist'));

app.use('/data', data);
app.use('/registration', registration);
//app.use('/registration', registration);

app.get(/^(?!\/?[id,data,login]).+$/, (request, response) => {
    response.sendFile('/dist/index.html', { root: __dirname });  
});

app.listen(9000, () => console.log('server on port 9000'));
