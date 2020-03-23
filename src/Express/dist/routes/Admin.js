"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// using express router
var path = __importStar(require("path"));
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/add-product', function (req, res, next) {
    console.log('In product view');
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});
routes.post('/add-product', function (req, res, next) {
    console.log(req.body);
    res.redirect('/');
});
exports.default = routes; // export default for typescript
