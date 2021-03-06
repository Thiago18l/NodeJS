"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//route for shop
var path = __importStar(require("path"));
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});
exports.default = routes;
