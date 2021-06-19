/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcs50w_final_project"] = self["webpackChunkcs50w_final_project"] || []).push([["React_Files_Components_Header_jsx"],{

/***/ "./React_Files/Components/BrandLogo.jsx":
/*!**********************************************!*\
  !*** ./React_Files/Components/BrandLogo.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrandLogoImg\": () => (/* binding */ BrandLogoImg),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n__webpack_require__(/*! ../static/layout.scss */ \"./React_Files/static/layout.scss\");\n\nvar BrandLogoImg = function BrandLogoImg(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"mx-auto w-auto \".concat(props.className ? props.className : \"h-32\"),\n    src: \"./static/frontend/svg/logo.svg\",\n    alt: \"JUHS Logo\"\n  }));\n};\n\nvar BrandLogo = function BrandLogo(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"./\",\n    className: \"flex px-2 pt-1 pb-2 w-max defaultHover \".concat(props.className ? props.className : \"\"),\n    title: \"Goto JUHS Home Page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"h-16\",\n    src: \"./static/frontend/svg/logo.svg\",\n    alt: \"JUHS Logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"my-auto pr-1 hidden lg:block hover:block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"mx-1 my-auto font-serif\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"my-1\"\n  }, \"Jawahar Urdu High School &\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"my-1\"\n  }, \"Junior College, Motala\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandLogo);\n\n//# sourceURL=webpack://cs50w-final-project/./React_Files/Components/BrandLogo.jsx?");

/***/ }),

/***/ "./React_Files/Components/Header.jsx":
/*!*******************************************!*\
  !*** ./React_Files/Components/Header.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _BrandLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.jsx\");\n\n\n\n\nvar BrandLogo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.jsx\"));\n});\nvar SignInButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"React_Files_Components_SignInButton_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./SignInButton */ \"./React_Files/Components/SignInButton.jsx\"));\n});\nvar pages = [{\n  name: \"Home\",\n  description: \"JUHS Shaping the future of India\",\n  href: \"./home\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon\n}, {\n  name: \"Dashboard\",\n  description: \"Manage your School stuff here\",\n  href: \"./dashboard\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ChartBarIcon\n}, {\n  name: \"Admissions\",\n  description: \"Make your child a part of this amazing initiative.\",\n  href: \"./admissions\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.AcademicCapIcon\n}, {\n  name: \"Contact us\",\n  description: \"Know more about JUHS here\",\n  href: \"./contactus\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon\n}];\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {\n    className: \"relative bg-white shadow-lg\"\n  }, function (_ref) {\n    var open = _ref.open;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"max-w-screen-2xl mx-auto px-2 sm:px-4 ring-1 ring-black ring-opacity-5\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex justify-between items-center md:justify-start md:space-x-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"Loading\"\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogo, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden h-20 -my-2 md:flex md:space-x-10\"\n    }, pages.map(function (page, index) {\n      var classes = \"mb-0.5 px-2 flex text-base font-medium text-gray-500 hover:text-blue-500 border-b-2 border-transparent focus:border-blue-500\";\n\n      if (window.location.href.includes(page.href.replace(\"./\", \"\"))) {\n        classes += \" border-blue-500 \";\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: index,\n        className: classes,\n        href: page.href\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"my-auto\"\n      }, page.name)));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden md:contents\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"Loading\"\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mr-2 -my-2 md:hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {\n      className: \"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Open menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {\n      show: open,\n      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n      enter: \"duration-200 ease-out\",\n      enterFrom: \"opacity-0 scale-95\",\n      enterTo: \"opacity-100 scale-100\",\n      leave: \"duration-100 ease-in\",\n      leaveFrom: \"opacity-100 scale-100\",\n      leaveTo: \"opacity-0 scale-95\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {\n      focus: true,\n      \"static\": true,\n      className: \"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"pt-5 pb-6 px-5\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"-mt-2 flex items-center justify-between\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BrandLogo__WEBPACK_IMPORTED_MODULE_3__.BrandLogoImg, {\n      className: \"h-16\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"-mr-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {\n      className: \"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Close menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mt-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n      className: \"grid gap-y-8\"\n    }, pages.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: item.name,\n        href: item.href,\n        className: \"-m-3 p-3 flex items-center rounded-md hover:bg-gray-200\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {\n        className: \"flex-shrink-0 h-6 w-6 text-blue-600\",\n        \"aria-hidden\": \"true\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"ml-3 text-base font-medium text-gray-900\"\n      }, item.name));\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton, null)))))));\n  });\n}\n\n//# sourceURL=webpack://cs50w-final-project/./React_Files/Components/Header.jsx?");

/***/ })

}]);