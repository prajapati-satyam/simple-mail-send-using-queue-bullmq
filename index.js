import express from 'express';
import {z} from 'zod';
import {send_mail_queue} from './queues/send_mail.queue.js'
import route from './routes/routes.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'))


app.use('/task', route);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});