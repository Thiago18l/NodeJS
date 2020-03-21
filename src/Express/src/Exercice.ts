// time to practice - express.js

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/users', (req, res, next) =>{
    console.log('Oi da pagina de usuários');
    res.send("<h1>Você está na página de Usuários</h1>");
});

app.use('/', (req, res, next) => {
    console.log('Oi da página inicial');
    res.send("<h1>Oi da página inicial. </h1>");
});
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});