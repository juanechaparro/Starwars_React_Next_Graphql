"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nquery{\\n  allPeople { \\n      people {\\n          name\\n          height\\n        \tbirthYear\\n        \teyeColor\\n      }\\n  }\\n}\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar _s = $RefreshSig$();\nvar ALL_PEOPLE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\nvar PeopleList = function() {\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(ALL_PEOPLE), loading = ref.loading, error = ref.error, data = ref.data;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Lista de Personajes\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juane\\\\OneDrive - Universidad de los Andes\\\\EstudioP\\\\tests\\\\LQN\\\\swpeople\\\\pages\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(PeopleList, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = PeopleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PeopleList);\nvar _c;\n$RefreshReg$(_c, \"PeopleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNyQjs7QUFFekIsSUFBTUcsVUFBVSxHQUFHSCxtREFBRyxtQkFVcEI7QUFDRixJQUFNSSxVQUFVLEdBQUcsV0FBTTs7SUFDdkIsSUFBaUNILEdBQW9CLEdBQXBCQSx3REFBUSxDQUFDRSxVQUFVLENBQUMsRUFBN0NFLE9BQU8sR0FBa0JKLEdBQW9CLENBQTdDSSxPQUFPLEVBQUVDLEtBQUssR0FBV0wsR0FBb0IsQ0FBcENLLEtBQUssRUFBRUMsSUFBSSxHQUFLTixHQUFvQixDQUE3Qk0sSUFBSTtJQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBQ2xCLHFCQUNFLDhEQUFDRyxLQUFHO2tCQUFDLHFCQUVMOzs7OzthQUFNLENBQ1A7Q0FDRjtHQVJLTixVQUFVOztRQUNtQkgsb0RBQVE7OztBQURyQ0csS0FBQUEsVUFBVTtBQVNoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEFMTF9QRU9QTEUgPSBncWxgXHJcbnF1ZXJ5e1xyXG4gIGFsbFBlb3BsZSB7IFxyXG4gICAgICBwZW9wbGUge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgXHRiaXJ0aFllYXJcclxuICAgICAgICBcdGV5ZUNvbG9yXHJcbiAgICAgIH1cclxuICB9XHJcbn1gXHJcbmNvbnN0IFBlb3BsZUxpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoQUxMX1BFT1BMRSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICBMaXN0YSBkZSBQZXJzb25hamVzIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlb3BsZUxpc3RcclxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiUmVhY3QiLCJBTExfUEVPUExFIiwiUGVvcGxlTGlzdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});