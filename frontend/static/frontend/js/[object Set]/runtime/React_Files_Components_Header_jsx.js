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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _BrandLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar BrandLogo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.jsx\"));\n});\n\n\n\nvar pages = [{\n  name: \"Home\",\n  description: \"JUHS Shaping the future of India\",\n  href: \"./\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon\n}, {\n  name: \"Dashboard\",\n  description: \"Manage your School stuff here\",\n  href: \"./dashboard\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ChartBarIcon\n}, {\n  name: \"Admissions\",\n  description: \"Make your child a part of this amazing initiative.\",\n  href: \"./admissions\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.AcademicCapIcon\n}, {\n  name: \"Contact us\",\n  description: \"Know more about JUHS here\",\n  href: \"./contactus\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon\n}];\n\nfunction classNames() {\n  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {\n    classes[_key] = arguments[_key];\n  }\n\n  return classes.filter(Boolean).join(\" \");\n}\n\nfunction Header() {\n  // This will check for user authentication data\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1]; // This will check for user authentication\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n      _useState4 = _slicedToArray(_useState3, 2),\n      number = _useState4[0],\n      setNumber = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fetch(\"./api/account/check_status\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      console.log(data);\n\n      if (data.authenticated) {\n        setNumber(0);\n        setData(data);\n      } else {\n        setNumber(1);\n        setData(undefined);\n      }\n    });\n  }, []);\n\n  var SignInButton = function SignInButton(_ref) {\n    var open = _ref.open;\n    var profile = [{\n      title: \"Your Profile\",\n      link: \"\"\n    }, {\n      title: \"Settings\",\n      link: \"\"\n    }, {\n      title: \"Sign out\",\n      link: \"./signout\"\n    }];\n    var buttonTypes = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden md:flex items-center justify-end md:flex-1 lg:w-0\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n      as: \"div\",\n      className: \"ml-3 relative\"\n    }, function (_ref2) {\n      var open = _ref2.open;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {\n        className: \"max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"sr-only\"\n      }, \"Open user menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        className: \"h-8 w-8 rounded-full\",\n        src: data != undefined ? data.userImage : \"\",\n        alt: \"\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {\n        show: open,\n        as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n        enter: \"transition ease-out duration-100\",\n        enterFrom: \"transform opacity-0 scale-95\",\n        enterTo: \"transform opacity-100 scale-100\",\n        leave: \"transition ease-in duration-75\",\n        leaveFrom: \"transform opacity-100 scale-100\",\n        leaveTo: \"transform opacity-0 scale-95\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {\n        \"static\": true,\n        className: \"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none\"\n      }, profile.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n          key: item.title\n        }, function (_ref3) {\n          var active = _ref3.active;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n            href: item.link,\n            className: classNames(active ? \"bg-gray-100\" : \"\", \"block px-4 py-2 text-sm text-gray-700\")\n          }, item.title);\n        });\n      }))));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"block md:hidden mx-5 pt-4 pb-3 border-t border-gray-700\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex items-center \"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex-shrink-0\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      className: \"h-10 w-10 rounded-full\",\n      src: data != undefined ? data.userImage : \"\",\n      alt: \"\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"ml-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"text-base font-medium leading-none\"\n    }, data != undefined ? data.username : \"\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"text-sm font-medium leading-none text-gray-400\"\n    }, data != undefined ? data.email : \"\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      className: \"ml-auto focus:outline-none flex-shrink-0 p-1 rounded-full text-blue-600 bg-white hover:bg-gray-200 \"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"View notifications\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.BellIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mt-3  space-y-1 \"\n    }, profile.map(function (_ref4) {\n      var title = _ref4.title,\n          link = _ref4.link;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: title,\n        href: link,\n        className: \"-mx-3 px-3 py-2 block rounded-md text-base font-medium hover:bg-gray-200\"\n      }, title);\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden md:flex items-center justify-end md:flex-1 lg:w-0\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: \"./signin\",\n      className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700\"\n    }, \"Sign in\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex md:hidden mx-5 pb-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: \"./signin\",\n      className: \" w-full text-center justify-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700\"\n    }, \"Sign in\")))];\n    return buttonTypes[number];\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {\n    className: \"relative bg-white shadow-lg\"\n  }, function (_ref5) {\n    var open = _ref5.open;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"max-w-screen-2xl mx-auto px-2 sm:px-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex justify-between items-center md:justify-start md:space-x-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"Loading\"\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogo, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden h-20 -my-2 md:flex md:space-x-10\"\n    }, pages.map(function (page, index) {\n      var classes = \"mb-0.5 px-2 flex text-base font-medium text-gray-500 hover:text-blue-500 border-b-2 border-transparent focus:border-blue-500\";\n\n      if (window.location.href.includes(page.href.replace(\"./\", \"\"))) {\n        classes += \" border-blue-500 \";\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: index,\n        className: classes,\n        href: page.href\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"my-auto\"\n      }, page.name)));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden md:contents\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton, {\n      open: open\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mr-2 -my-2 md:hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {\n      className: \"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Open menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {\n      show: open,\n      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n      enter: \"duration-200 ease-out\",\n      enterFrom: \"opacity-0 scale-95\",\n      enterTo: \"opacity-100 scale-100\",\n      leave: \"duration-100 ease-in\",\n      leaveFrom: \"opacity-100 scale-100\",\n      leaveTo: \"opacity-0 scale-95\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {\n      focus: true,\n      \"static\": true,\n      className: \"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"pt-5 pb-6 px-5\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"-mt-2 flex items-center justify-between\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BrandLogo__WEBPACK_IMPORTED_MODULE_3__.BrandLogoImg, {\n      className: \"h-16\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"-mr-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {\n      className: \"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Close menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mt-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n      className: \"grid gap-y-8\"\n    }, pages.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: item.name,\n        href: item.href,\n        className: \"-m-3 p-3 flex items-center rounded-md hover:bg-gray-200\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {\n        className: \"flex-shrink-0 h-6 w-6 text-blue-600\",\n        \"aria-hidden\": \"true\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"ml-3 text-base font-medium text-gray-900\"\n      }, item.name));\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton, null)))))));\n  });\n}\n\n//# sourceURL=webpack://cs50w-final-project/./React_Files/Components/Header.jsx?");

/***/ })

}]);