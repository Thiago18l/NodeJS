// this app is defined to assign routes.
import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';

// import components
import ShopRoutes from './routes/Shop';
import AdminData from './routes/Admin';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Admin', AdminData);
app.use(ShopRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

