import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('Im the middleware');
    next();
});

app.use((req, res, next) => {
    console.log("In another middleware");
});

app.listen(PORT, () => console.log(`running app on port ${PORT}`))