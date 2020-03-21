import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/add-product', (req, res, next) =>{
    res.send("<h1>Add Product page </h1>");
}); // handling different routes

app.use('/', (req, res, next) =>{
    res.send("<h1> Home page</h1>")
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});