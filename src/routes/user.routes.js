"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersRouter = express_1.Router();
usersRouter.get('/', function (req, res) {
    return res.json("ok");
});
exports["default"] = usersRouter;
