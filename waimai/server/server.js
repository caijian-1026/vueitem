var express = require("express");
var app = express();

var routerFen = require("./router/flist");
    app.use("/fenlei",routerFen);
    app.listen(8686);