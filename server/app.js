/**
 * Create by limingfei on 2017/5/20
 *应用程序入口文件
 */
//加载express模块
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Cookies = require('cookies');
var config = require('./config');

var app = express();
// ------------前段和后端变现分离--------swig----

// ---------JSON處理---------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------cookie处理---------------
app.use(function(req, res, next) {
    req.cookies = new Cookies(req, res);
    next();
});
// ---------end----------JSON處理-----
// app.use(express.static(path.join(__dirname, 'src')));
app.use('/', require('./router/login'));

var port = normalizePort(process.env.PORT || config.app.webPort);
app.set('port', port);

app.listen(port);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}