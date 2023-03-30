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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("class Grocery {\n    constructor(props) {\n        this.addGrocery = document.querySelector(props.inputhook);\n        this.createGrocery = document.querySelector(props.submit);\n        this.addGroceryItem = document.querySelector(props.showTarget);\n        this.status = false;\n        this.AddGroceries();\n    }\n    AddGroceries() {\n        this.addGrocery.addEventListener('change', (e) => {\n            e.preventDefault();\n            let value = e.target.value;\n            this.addGroceryItem(value);\n        });\n    }\n    addGroceryList(value) {\n        this.createGrocery.addEventListener('click', (e) => {\n            e.preventDefault();\n            if (value.trim() === null) {\n                return null;\n            }\n            else {\n                const newItem = `\n\t\t\t\t\t<li id='item'>\n\t\t\t\t\t\t<p class='content'>${value}</p>\n\t\t\t\t\t\t<div class='buttonGroup'>\n\t\t\t\t\t\t\t<button class='edit btn'>Edit</button>\n\t\t\t\t\t\t\t<button class='delete btn'>Delete</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t`;\n                this.addGroceryItem.insertAdjacentHTML('beforeend', newItem);\n                this.addGrocery.value = '';\n                value = '';\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://grocery/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;