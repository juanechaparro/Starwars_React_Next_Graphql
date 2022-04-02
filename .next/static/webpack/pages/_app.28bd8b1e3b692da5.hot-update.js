"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nquery{\\n  allPeople { \\n      people {\\n          name\\n          height\\n        \tbirthYear\\n        \teyeColor\\n      }\\n  }\\n}\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),\n    credentials: \"omit\",\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri: \"https://swapi-graphql.netlify.app/.netlify/functions/index\"\n    }) // add process .env uri\n});\nvar query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nclient.query({\n    query: query\n}).then(function(result) {\n    console.log(result.data);\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: \"C:\\\\Users\\\\juane\\\\OneDrive - Universidad de los Andes\\\\EstudioP\\\\tests\\\\LQN\\\\swpeople\\\\pages\\\\_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juane\\\\OneDrive - Universidad de los Andes\\\\EstudioP\\\\tests\\\\LQN\\\\swpeople\\\\pages\\\\_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 4\n    }, this);\n};\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN5RjtBQUN4RixJQUFNSyxNQUFNLEdBQUcsSUFBSUwsd0RBQVksQ0FBQztJQUM5Qk0sS0FBSyxFQUFFLElBQUlGLHlEQUFhLEVBQUU7SUFDMUJHLFdBQVcsRUFBRSxNQUFNO0lBQ25CQyxJQUFJLEVBQUUsSUFBSUwsb0RBQVEsQ0FBQztRQUNqQk0sR0FBRyxFQUFFLDREQUE0RDtLQUNwRSxDQUFDLHdCQUF1QjtDQUN6QixDQUFDO0FBQ0YsSUFBTUMsS0FBSyxHQUFHVCxtREFBRyxtQkFVZjtBQUNGSSxNQUFNLENBQUNLLEtBQUssQ0FBQztJQUFDQSxLQUFLLEVBQUxBLEtBQUs7Q0FBQyxDQUFDLENBQ3BCQyxJQUFJLENBQUNDLFNBQUFBLE1BQU0sRUFBSTtJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxJQUFJLENBQUM7Q0FDekIsQ0FBQztBQUNhLFNBQVNDLEtBQUssQ0FBQyxLQUFrQyxFQUFFO1FBQWxDQyxTQUFTLEdBQVgsS0FBa0MsQ0FBaENBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUFrQyxDQUFyQkEsU0FBUztJQUNsRCxxQkFDQyw4REFBQ2hCLDBEQUFjO1FBQUNHLE1BQU0sRUFBRUEsTUFBTTtrQkFDOUIsNEVBQUNZLFNBQVMsb0JBQUtDLFNBQVM7Ozs7Z0JBQUk7Ozs7O1lBQ1gsQ0FDaEI7Q0FDSDtBQU51QkYsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHtBcG9sbG9DbGllbnQsIGdxbCwgQXBvbGxvUHJvdmlkZXIsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuICAgY3JlZGVudGlhbHM6ICdvbWl0JyxcclxuICAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgICB1cmk6ICdodHRwczovL3N3YXBpLWdyYXBocWwubmV0bGlmeS5hcHAvLm5ldGxpZnkvZnVuY3Rpb25zL2luZGV4J1xyXG4gfSkvLyBhZGQgcHJvY2VzcyAuZW52IHVyaVxyXG59KVxyXG5jb25zdCBxdWVyeSA9IGdxbGBcclxucXVlcnl7XHJcbiAgYWxsUGVvcGxlIHsgXHJcbiAgICAgIHBlb3BsZSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBoZWlnaHRcclxuICAgICAgICBcdGJpcnRoWWVhclxyXG4gICAgICAgIFx0ZXllQ29sb3JcclxuICAgICAgfVxyXG4gIH1cclxufWBcclxuY2xpZW50LnF1ZXJ5KHtxdWVyeX0pXHJcbi50aGVuKHJlc3VsdCA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4oXHJcbiAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgKVxyXG59Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsImdxbCIsIkFwb2xsb1Byb3ZpZGVyIiwiSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImxpbmsiLCJ1cmkiLCJxdWVyeSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});