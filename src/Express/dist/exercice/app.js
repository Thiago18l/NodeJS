"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./routes/users"));
var home_1 = __importDefault(require("./routes/home"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
//use imports
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(home_1.default);
app.use(users_1.default);
app.use(function (req, res) {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
});
app.listen(PORT, function () {
    console.log("Running app on port " + PORT);
});
