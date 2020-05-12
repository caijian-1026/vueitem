var express = require("express");
var app = express();
var routerMovie = require("./router/movie");
    app.use("/movie",routerMovie);
    app.use("/vuex",routerMovie);
var routerUser = require("./router/user");
    app.use("/user",routerUser);
    app.listen(8787);