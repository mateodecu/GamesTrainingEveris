var express = require('express');
var morgan = require('morgan');
var proxy = require('http-proxy-middleware');
var ports = require('../../ecosystem.ports.js');

var port = process.env.PORT || 8080;
var app = express();
app.use(morgan('dev'));

app.use(
  proxy('/api', {
    target: `http://localhost:${ports.api}`,
    changeOrigin: true,
    pathRewrite: { '^/api/': '/' }
  })
);

app.use(
  proxy('/', {
    target: `http://localhost:${ports.app}`,
    changeOrigin: true
  })
);

app.listen(port, function() {
  console.log('listening to port', port);
});
