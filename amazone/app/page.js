"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const content_1 = __importDefault(require("./component/content"));
const products_1 = __importDefault(require("./component/products"));
function Home() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(content_1.default, {}), (0, jsx_runtime_1.jsx)(products_1.default, {})] }) }));
}
//# sourceMappingURL=page.js.map