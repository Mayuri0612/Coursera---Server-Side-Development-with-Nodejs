const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

const dishRouter = require('./week1/dishRouter');
app.use('/dishes', dishRouter);

var promoRouter = require('./week1/promoRouter');
app.use('/promotions', promoRouter);

var leaderRouter = require('./week1/leaderRouter');
app.use('/leadership', leaderRouter);


app.use(express.static(__dirname+ '/week1'));
app.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`);
})