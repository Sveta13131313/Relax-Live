"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelayout"]("main",{

/***/ "./src/modules/accardionFAQ.js":
/*!*************************************!*\
  !*** ./src/modules/accardionFAQ.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accardionFAQ = function accardionFAQ() {\n  var divContent = document.querySelectorAll('.msg'),\n      tab = document.querySelectorAll('.title_block'),\n      accordion = document.querySelector('.accordion'); //Изменение видимости блока\n\n  var toggleAccardionFAQ = function toggleAccardionFAQ(index) {\n    for (var i = 0; i < divContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('msg-active');\n      } else {\n        tab[i].classList.remove('msg-active');\n      }\n    }\n  }; //Прослушивание кликов по блоку вопросов\n\n\n  accordion.addEventListener('click', function (event) {\n    var target = event.target; // if (target.classList.contains('accordion') ||\n    //   target.closest('ul>li>h2')) {\n\n    target = target.closest('.title_block');\n    console.log(target);\n\n    if (target.classList.contains('title_block')) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleAccardionFAQ(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accardionFAQ);\n\n//# sourceURL=webpack://layout/./src/modules/accardionFAQ.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2b915675010030fe6315")
/******/ })();
/******/ 
/******/ }
);