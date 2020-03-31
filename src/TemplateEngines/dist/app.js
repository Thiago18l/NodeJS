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
// this app is defined to assign routes.
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path = __importStar(require("path"));
// import components
var Admin_1 = __importDefault(require("./routes/Admin"));
var Shop_1 = __importDefault(require("./routes/Shop"));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/Admin', Admin_1.default);
app.use(Shop_1.default);
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'page404.html'));
});
app.listen(PORT, function () {
    console.log("Running on port " + PORT);
});
