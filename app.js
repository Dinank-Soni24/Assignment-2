const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

//require routes 
const userRoutes = require('./api/routes/user');
const categoryRoutes = require('./api/routes/category');
const postsRoutes = require('./api/routes/post')
const publicRoutes = require('./api/routes/publicPost')

//mongodb connections
mongoose.set('strictQuery', false);
mongoose.connect(process.env.PORT_URI, {
    useNewUrlParser: true,
});

//middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes which should handle requests 
app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/post',postsRoutes);
app.use('/public', publicRoutes);


//error handling
app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
})

app.use(( err,req, res, next) => {
    res.status(err.status || 500);
    res.json({
        err: {
            message: err.message
        }
    });
});

module.exports = app;