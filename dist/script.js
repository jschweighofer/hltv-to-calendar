/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("(function () {\r\n  if (window.hasRunHltvToCalendar) return;\r\n\r\n  window.hasRunHltvToCalendar = true;\r\n\r\n  // Put HTML into DOM\r\n  const container = document.createElement('div');\r\n  container.classList.add('htoc-container');\r\n\r\n  const button = document.createElement('a');\r\n  button.classList.add('htoc-button');\r\n  button.text = 'Add To Calendar';\r\n\r\n  container.insertAdjacentElement('afterbegin', button);\r\n\r\n  const targetPosition = document.querySelector('.match-page .teamsBox');\r\n\r\n  insertAfter(container, targetPosition);\r\n\r\n  function insertAfter(newNode, existingNode) {\r\n    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);\r\n  }\r\n\r\n  // Add event listener to button and trigger action\r\n  button.addEventListener('click', () => {\r\n    alert('lets g2o');\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://hltv-to-calendar/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;