const express = require('express');
const server = express();
const PORT = 3000;

const pug = require("pug");
const path = require('path');
//set-up
server.set('view engine', 'pug');


// GETS
// index
server.get('/', (req, res) => {
    res.render('index');                    // INDEX
});

// events
server.get('/events', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// cake-type
server.get('/cake-type', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// shopping
server.get('/shopping', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// login
server.get('/login', (req, res) => {
    res.render('login.pug');                // OPEN
});

// register
server.get('/register', (req, res) => {
    res.render('register.pug');             // OPEN
});

// cart
server.get('/cart', (req, res) => {
    res.render('construction.pug');         // CLOSED
});

// settings
server.get('/settings', (req, res) => {
    res.render('construction.pug');         // OPEN
});


// API
const r = '/api';
server.get(r + '/login', (req, res) => {
    res.send('success!');
});






//Run server
// 404 - NEEDS TO BE LAST ROUTE
server.get('*', (req, res) => {
    res.render('404.pug');
});

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});