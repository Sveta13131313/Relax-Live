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

/***/ "./src/modules/sliderDocument.js":
/*!***************************************!*\
  !*** ./src/modules/sliderDocument.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sliderDocument = function sliderDocument() {\n  var section = document.querySelector('.popup-transparency-slider-wrap'),\n      slider = document.querySelector('.popup-transparency-slider');\n\n  var removeActiveClass = function removeActiveClass(parentEl) {\n    _toConsumableArray(parentEl.children).forEach(function (item) {\n      return item.classList.remove('active');\n    });\n  };\n\n  var currentSlide = function currentSlide(slider) {\n    for (var i = 0; i < slider.children.length; i++) {\n      if (slider.children[i].classList.contains('active')) return i;\n    }\n  };\n\n  var changeCounter = function changeCounter(slider) {\n    var currSlide = currentSlide(slider),\n        countSlides = slider.children.length,\n        contentCurrent = section.querySelector('.slider-counter-content__current'),\n        contentTotal = section.querySelector('.slider-counter-content__total');\n    contentCurrent.textContent = currSlide + 1;\n    contentTotal.textContent = countSlides;\n  };\n\n  var changeSlide = function changeSlide(slider) {\n    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    if (direction === 0) {\n      slider.children[0].classList.add('active');\n    }\n\n    var currSlide = currentSlide(slider),\n        countSlides = slider.children.length;\n    removeActiveClass(slider);\n\n    switch (true) {\n      case direction === -1 && currSlide === 0:\n        {\n          slider.children[countSlides - 1].classList.add('active');\n          break;\n        }\n\n      case direction === 1 && currSlide === countSlides - 1:\n        {\n          slider.children[0].classList.add('active');\n          break;\n        }\n\n      default:\n        {\n          slider.children[currSlide + direction].classList.add('active');\n        }\n    }\n  };\n\n  changeSlide(slider);\n  changeCounter(slider);\n  section.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('#transparency_left')) {\n      changeSlide(slider, -1);\n      changeCounter(slider);\n    }\n\n    if (target.closest('#transparency_right')) {\n      changeSlide(slider, 1);\n      changeCounter(slider);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderDocument);\n\n//# sourceURL=webpack://layout/./src/modules/sliderDocument.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e96e979f75255701e35c")
/******/ })();
/******/ 
/******/ }
);