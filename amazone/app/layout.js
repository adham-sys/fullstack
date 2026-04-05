"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const google_1 = require("next/font/google");
const header_1 = __importDefault(require("./component/header"));
const footer_1 = __importDefault(require("./component/footer"));
require("./globals.css");
const navigation_1 = require("next/navigation");
const react_1 = require("next-auth/react");
const geistSans = (0, google_1.Geist)({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = (0, google_1.Geist_Mono)({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
// export const metadata: Metadata = {
//   title: "amazone clone",
// };
function RootLayout({ children, }) {
    const router = (0, navigation_1.usePathname)();
    const noLayoutPages = ["/login"];
    const hideLayout = noLayoutPages.includes(router);
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", children: (0, jsx_runtime_1.jsx)("body", { className: `${geistSans.variable} ${geistMono.variable} antialiased`, children: (0, jsx_runtime_1.jsx)(react_1.SessionProvider, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!hideLayout && (0, jsx_runtime_1.jsx)(header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { children: children }), !hideLayout && (0, jsx_runtime_1.jsx)(footer_1.default, {})] }) }) }) }));
}
//# sourceMappingURL=layout.js.map