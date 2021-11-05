"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
exports["default"] = (function () {
    var app = (0, express_1["default"])();
    var port = 3000;
    app.use(express_1["default"].urlencoded({ extended: true }));
    app.use(express_1["default"].json());
    app.listen(port, function () { return console.log('port: ' + port); });
    return app;
});
