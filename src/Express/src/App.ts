// this app is defined to assign routes.
import express from 'express';
import bodyParser from 'body-parser';
import AdminRoutes from './routes/Admin';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AdminRoutes);

