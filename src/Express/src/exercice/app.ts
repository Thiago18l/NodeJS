import express from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';

import rootUsers from './routes/users';
import index from './routes/home';


const app = express();
const PORT = process.env.PORT || 3000;

//use imports
app.use(bodyParser.urlencoded( { extended: true }));
app.use(index);
app.use(rootUsers);


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
})

app.listen(PORT, () => {
    console.log(`Running app on port ${PORT}`);
});