// this app is defined to assign routes.
import express from 'express';
import bodyParser from 'body-parser';
import AdminRoutes from './routes/Admin';
import ShopRoutes from './routes/Shop';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Admin', AdminRoutes);
app.use(ShopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found </h1>');
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

