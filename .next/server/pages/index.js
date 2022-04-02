"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ALL_PEOPLE = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\r\nquery{\r\n  allPeople { \r\n      people {\r\n          name\r\n          height\r\n        \tbirthYear\r\n        \teyeColor\r\n          id\r\n      }\r\n  }\r\n}`;\nconst PeopleList = ()=>{\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PEOPLE);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juane\\\\OneDrive - Universidad de los Andes\\\\EstudioP\\\\tests\\\\LQN\\\\swpeople\\\\pages\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Error :(\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juane\\\\OneDrive - Universidad de los Andes\\\\EstudioP\\\\tests\\\\LQN\\\\swpeople\\\\pages\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 20\n    }, undefined);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Lista de Personajes\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juane\\\\OneDrive - Universidad de los Andes\\\\EstudioP\\\\tests\\\\LQN\\\\swpeople\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeopleList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ3JCO0FBRXpCLE1BQU1HLFVBQVUsR0FBR0gsK0NBQUcsQ0FBQztBQVl2QixNQUFNSTtJQUNKLE1BQU0sRUFBRUM7SUFDUixJQUFJQSxPQUFPOzs7Ozs7O0lBQ1g7Ozs7OztZQUFnQyxDQUFDO0lBQ2pDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFDbEI7a0JBQ087Ozs7O1lBRUMsQ0FDUDtDQUNGO0FBQ0QsZUFBZUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd3Blb3BsZS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQUxMX1BFT1BMRSA9IGdxbGBcclxucXVlcnl7XHJcbiAgYWxsUGVvcGxlIHsgXHJcbiAgICAgIHBlb3BsZSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBoZWlnaHRcclxuICAgICAgICBcdGJpcnRoWWVhclxyXG4gICAgICAgIFx0ZXllQ29sb3JcclxuICAgICAgICAgIGlkXHJcbiAgICAgIH1cclxuICB9XHJcbn1gXHJcbmNvbnN0IFBlb3BsZUxpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoQUxMX1BFT1BMRSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZihlcnJvcikgcmV0dXJuIDxwPkVycm9yIDooPC9wPjtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIExpc3RhIGRlIFBlcnNvbmFqZXMgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlTGlzdFxyXG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJSZWFjdCIsIkFMTF9QRU9QTEUiLCJQZW9wbGVMaXN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInAiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();