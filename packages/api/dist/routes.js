"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./routes/auth"));
var clients_1 = __importDefault(require("./routes/clients"));
var plants_1 = __importDefault(require("./routes/plants"));
var routes = express_1["default"].Router();
// auth
routes.post('/auth', auth_1["default"].singIn);
// clients
routes.get('/api/clients', clients_1["default"].findAll);
routes.post('/api/clients', clients_1["default"].insertOne);
routes.put('/api/clients/:id', clients_1["default"].updateOne);
routes["delete"]('/api/clients/:id', clients_1["default"].deleteOne);
// plants
routes.get('/api/plants', plants_1["default"].findAll);
routes.post('/api/plants', plants_1["default"].insertOne);
routes.put('/api/plants/:id', plants_1["default"].updateOne);
routes["delete"]('/api/plants/:id', plants_1["default"].deleteOne);
exports["default"] = routes;
