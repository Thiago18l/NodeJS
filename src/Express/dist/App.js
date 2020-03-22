"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// this app is defined to assign routes.
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Admin_1 = __importDefault(require("./routes/Admin"));
var Shop_1 = __importDefault(require("./routes/Shop"));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(Admin_1.default);
app.use(Shop_1.default);
app.listen(PORT, function () {
    console.log("Running on port " + PORT);
});
