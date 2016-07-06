var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var routes = require('./app/routes/index');
var components = require('./app/routes/components');

var app = express();
var reloadify = require('reloadify')(__dirname + '/app');

app.use(sassMiddleware({
  src: path.join(__dirname, 'app'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false
}));

app.use(reloadify);

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/components', components);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


module.exports = app;
