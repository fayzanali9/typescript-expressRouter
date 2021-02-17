"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_routes_1 = require("./routes/user.routes");
var routes = express_1.Router();
routes.use('/users', user_routes_1["default"]);
exports["default"] = routes;
