"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path = __importStar(require("path"));
var routes = express_1.Router();
routes.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});
routes.post('/users', function (req, res) {
    res.redirect('/');
});
exports.default = routes;
