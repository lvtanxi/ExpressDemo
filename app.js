import express from 'express'
import mongoose from "mongoose"
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import Task from './routes/Task'
import User from './routes/User'
import Contact from './routes/Contact'
import Job from './routes/Job'


let app = express();
let port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/local")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/task', Task);
app.use('/user', User);
app.use('/contact', Contact);
app.use('/job', Job);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(port);
module.exports = app;
