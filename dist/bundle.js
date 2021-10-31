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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./js/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validateForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateForm.js */ \"./js/validateForm.js\");\n/* harmony import */ var _validateForm_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validateForm_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _submiteForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submiteForm.js */ \"./js/submiteForm.js\");\n/* harmony import */ var _submiteForm_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_submiteForm_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/normalize.css */ \"./styles/normalize.css\");\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.less */ \"./styles/style.less\");\n/* harmony import */ var _img_intro_bg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/intro__bg.png */ \"./img/intro__bg.png?9aa7\");\n/* harmony import */ var _img_main_item_item_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/main__item_item-1.png */ \"./img/main__item_item-1.png\");\n/* harmony import */ var _img_main_item_item_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/main__item_item-2.png */ \"./img/main__item_item-2.png\");\n/* harmony import */ var _img_main_item_item_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/main__item_item-3.png */ \"./img/main__item_item-3.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://d-element/./js/index.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("//toggle site menu\r\nconst burger = document.querySelector(\".burger-menu\");\r\nconst menu = document.querySelector(\".site-menu\");\r\nburger.addEventListener(\"click\", function () {\r\n    burger.classList.toggle(\"burger-menu__active\");\r\n    menu.classList.toggle(\"site-menu__active\");\r\n})\n\n//# sourceURL=webpack://d-element/./js/script.js?");

/***/ }),

/***/ "./js/submiteForm.js":
/*!***************************!*\
  !*** ./js/submiteForm.js ***!
  \***************************/
/***/ (() => {

eval("//modal form lets talk\r\nlet modal = document.getElementById(\"talk-form\");\r\nlet btn = document.getElementsByClassName(\"lets-talk-form\")[0];\r\n\r\nbtn.onclick = function () {\r\n    modal.style.display = \"block\";\r\n    const body = document.getElementsByTagName(\"body\")[0];\r\n    body.classList.toggle(\"lock\");\r\n}\r\n\r\nlet closeForm = document.getElementsByClassName(\"close-form\")[0];\r\ncloseForm.onclick = function () {\r\n    modal.style.display = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack://d-element/./js/submiteForm.js?");

/***/ }),

/***/ "./js/validateForm.js":
/*!****************************!*\
  !*** ./js/validateForm.js ***!
  \****************************/
/***/ (() => {

eval("//form validate\r\nfunction validate() {\r\n    let a = document.forms[\"talk-form\"][\"fullname\"].value;\r\n    if (a == \"\") {\r\n        alert(\"Укажите ваше имя\");\r\n        return false;\r\n    }\r\n\r\n    let с = document.forms[\"talk-form\"][\"email\"].value;\r\n    if (с == \"\") {\r\n        alert(\"Укажите ваш Е-майл\");\r\n        return false;\r\n    }\r\n\r\n    let b = document.forms[\"talk-form\"][\"message\"].value;\r\n    if (b == \"\") {\r\n        alert(\"Заполните текст сообщения\");\r\n        return false;\r\n    }\r\n\r\n    if (window.location.search.replace('?', '')) {\r\n        alert(\"Your message successfully sent\");\r\n    }\r\n}\n\n//# sourceURL=webpack://d-element/./js/validateForm.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./styles/style.less":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./styles/style.less ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Galien-Bold.eot */ \"./fonts/Galien-Bold.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Galien-Bold.woff */ \"./fonts/Galien-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Galien-Bold.ttf */ \"./fonts/Galien-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Galien-Bold.svg */ \"./fonts/Galien-Bold.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-regular.eot */ \"./fonts/gilroy-regular.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-regular.woff */ \"./fonts/gilroy-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-regular.ttf */ \"./fonts/gilroy-regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-regular.svg */ \"./fonts/gilroy-regular.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-semibold.eot */ \"./fonts/gilroy-semibold.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-semibold.woff */ \"./fonts/gilroy-semibold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-semibold.ttf */ \"./fonts/gilroy-semibold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/gilroy-semibold.svg */ \"./fonts/gilroy-semibold.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/intro__bg.png */ \"./img/intro__bg.png?e487\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arrow_right.svg */ \"./img/arrow_right.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Galien';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('svg');\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: 'Gilroy';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format('svg');\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: 'Gilroy';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") format('svg');\\n  font-weight: 600;\\n  font-style: normal;\\n}\\n*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin: 0;\\n}\\na {\\n  text-decoration: none;\\n  color: #fff;\\n}\\na:hover {\\n  text-decoration: underline;\\n}\\nbody {\\n  color: #1F3F68;\\n  font-family: 'Gilroy';\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 26px;\\n}\\nbody.lock {\\n  overflow: hidden;\\n}\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n.container {\\n  max-width: 940px;\\n  width: 100%;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n}\\nli {\\n  list-style: none;\\n}\\n.button {\\n  padding: 15px 0;\\n  width: 220px;\\n  background: #5A98D0;\\n  box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);\\n  border-radius: 10px;\\n  color: #fff;\\n  letter-spacing: 0.04em;\\n  text-align: center;\\n  cursor: pointer;\\n  transition: 0.15s;\\n}\\n.button:hover {\\n  color: #1F3F68;\\n  background: #98C3E8;\\n}\\n.burger-menu {\\n  width: 24px;\\n  height: 16px;\\n  position: relative;\\n  cursor: pointer;\\n}\\n.burger-menu span {\\n  content: '';\\n  position: absolute;\\n  display: block;\\n  width: 100%;\\n  height: 2px;\\n  background-color: #1F3F68;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n.burger-menu::before,\\n.burger-menu::after {\\n  content: '';\\n  position: absolute;\\n  display: block;\\n  width: 100%;\\n  height: 2px;\\n  background-color: #1F3F68;\\n  transition: 0.15s;\\n}\\n.burger-menu::before {\\n  top: 0;\\n}\\n.burger-menu::after {\\n  bottom: 0;\\n}\\n.burger-menu__active span {\\n  display: none;\\n}\\n.burger-menu__active::before {\\n  top: 7px;\\n  transform: rotate(45deg);\\n}\\n.burger-menu__active::after {\\n  bottom: 7px;\\n  transform: rotate(-45deg);\\n}\\n.section-title {\\n  font-family: 'Gilroy';\\n  font-weight: 600;\\n  font-size: 36px;\\n  line-height: 46px;\\n  color: #316099;\\n  letter-spacing: 0.05em;\\n}\\n.section-title_main {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 360px;\\n}\\n.section-title_light {\\n  color: #fff;\\n}\\n.section-title_client {\\n  width: 225px;\\n}\\n.section-title_team {\\n  width: 320px;\\n}\\n.header {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  padding: 50px 20px 0 20px;\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n.header .header__inner {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 60px;\\n}\\n.header .header__inner .site-menu {\\n  display: flex;\\n  opacity: 0;\\n  height: 0;\\n  width: 75%;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 100%;\\n  transition: 0.15s;\\n}\\n.header .header__inner .site-menu .site-menu__item .site-menu__link {\\n  color: #1F3F68;\\n}\\n.header .header__inner .site-menu__active {\\n  display: flex;\\n  opacity: 1;\\n  height: 100%;\\n}\\n.intro {\\n  height: 100vh;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \"), linear-gradient(0deg, #ebf3fb 8.84%, rgba(152, 195, 232, 0) 31.12%);\\n  background-repeat: no-repeat;\\n  background-position: center right 10%;\\n}\\n.intro .intro__inner {\\n  padding-top: 190px;\\n  width: 515px;\\n}\\n.intro .intro__inner .intro__title {\\n  font-family: 'Galien';\\n  font-size: 64px;\\n  line-height: 74px;\\n  letter-spacing: 0.04em;\\n  color: #1F3F68;\\n  margin-bottom: 30px;\\n}\\n.intro .intro__inner .intro__body {\\n  letter-spacing: 0.05em;\\n  color: #1F3F68;\\n  opacity: 0.6;\\n  margin-bottom: 70px;\\n  width: 430px;\\n}\\n.main {\\n  padding: 180px 0 210px;\\n}\\n.main .main__inner {\\n  display: flex;\\n  position: relative;\\n  height: 1160px;\\n}\\n.main .main__inner .main__col-left {\\n  margin-left: 80px;\\n  justify-content: center;\\n}\\n.main .main__inner .main__col-right {\\n  margin-left: 100px;\\n  justify-content: space-between;\\n}\\n.main .main__inner .main__col-left,\\n.main .main__inner .main__col-right {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.main .main__inner .main__col-left .main-item,\\n.main .main__inner .main__col-right .main-item {\\n  padding: 45px;\\n  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);\\n  border-radius: 10px;\\n}\\n.main .main__inner .main__col-left .main-item .main-item__image,\\n.main .main__inner .main__col-right .main-item .main-item__image {\\n  margin-bottom: 55px;\\n  text-align: center;\\n}\\n.main .main__inner .main__col-left .main-item .main-item__title,\\n.main .main__inner .main__col-right .main-item .main-item__title {\\n  font-family: 'Gilroy';\\n  font-weight: 600;\\n  font-size: 20px;\\n  line-height: 30px;\\n  letter-spacing: 0.05em;\\n  color: #1F3F68;\\n  margin-bottom: 15px;\\n}\\n.main .main__inner .main__col-left .main-item .main-item__body,\\n.main .main__inner .main__col-right .main-item .main-item__body {\\n  letter-spacing: 0.05em;\\n  color: #1F3F68;\\n  opacity: 0.6;\\n  margin-bottom: 30px;\\n}\\n.main .main__inner .main__col-left .main-item .main-item__link,\\n.main .main__inner .main__col-right .main-item .main-item__link {\\n  font-family: 'Gilroy';\\n  font-weight: 600;\\n  font-size: 14px;\\n  line-height: 30px;\\n  letter-spacing: 0.05em;\\n  color: #5A98D0;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") no-repeat center right;\\n  background-size: 16px;\\n  padding-right: 40px;\\n  transition: 0.15s;\\n}\\n.main .main__inner .main__col-left .main-item .main-item__link:hover,\\n.main .main__inner .main__col-right .main-item .main-item__link:hover {\\n  padding-right: 50px;\\n}\\n.main .main__inner .main__col-left .main-item_upper-item,\\n.main .main__inner .main__col-right .main-item_upper-item {\\n  padding: 0 45px 45px 45px;\\n}\\n.main .main__inner .main__col-left .main-item_upper-item .main-item__image,\\n.main .main__inner .main__col-right .main-item_upper-item .main-item__image {\\n  margin-top: -20px;\\n}\\n.client {\\n  background: #5A98D0;\\n  border-radius: 200px 0px 0px 0px;\\n  padding: 95px 0 125px;\\n}\\n.client .client__inner .client__upper-row {\\n  display: flex;\\n  margin-bottom: 110px;\\n}\\n.client .client__inner .client__upper-row .client__subtitle {\\n  letter-spacing: 0.05em;\\n  color: #fff;\\n  opacity: 0.6;\\n  width: 540px;\\n  margin-left: 95px;\\n}\\n.client .client__inner .client__down-row {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.client .client__inner .client__down-row .client-logo-item {\\n  width: 25%;\\n  height: 130px;\\n  font-size: 20px;\\n  line-height: 46px;\\n  letter-spacing: 0.02em;\\n  color: #F2F2F2;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-right: 1px solid #9cc1e3;\\n}\\n.client .client__inner .client__down-row .client-logo-item:nth-child(1),\\n.client .client__inner .client__down-row .client-logo-item:nth-child(2),\\n.client .client__inner .client__down-row .client-logo-item:nth-child(3),\\n.client .client__inner .client__down-row .client-logo-item:nth-child(4) {\\n  border-bottom: 1px solid #9cc1e3;\\n}\\n.client .client__inner .client__down-row .client-logo-item:nth-child(4),\\n.client .client__inner .client__down-row .client-logo-item:nth-child(8) {\\n  border-right: none;\\n}\\n.client .client__inner .client__down-row .client-logo-item:last-child {\\n  background-color: #4e87bb;\\n}\\n.team {\\n  background: linear-gradient(to right, #316099 50%, #5A98D0 50%);\\n}\\n.team .team__inner {\\n  background: #316099;\\n  border-radius: 0px 200px 0px 0px;\\n  padding: 90px 120px 95px 0;\\n  margin-right: -120px;\\n  display: flex;\\n  position: relative;\\n}\\n.team .team__inner::after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: calc(100% - 1px);\\n  right: 120px;\\n  width: 1000%;\\n  height: 1px;\\n  background-color: #83a0c2;\\n}\\n.team .team__inner .team__left-col {\\n  width: 460px;\\n}\\n.team .team__inner .team__left-col .team__subtitle {\\n  letter-spacing: 0.05em;\\n  color: #fff;\\n  opacity: 0.6;\\n  margin-top: 30px;\\n}\\n.team .team__inner .team__right-col {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-left: 180px;\\n}\\n.footer {\\n  background: linear-gradient(to right, #316099 50%, #5A98D0 50%);\\n  color: #fff;\\n}\\n.footer .footer__inner {\\n  background: #316099;\\n  padding: 95px 240px 65px 0;\\n  margin-right: -120px;\\n}\\n.footer .footer__inner .footer__upper-row {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 65px;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col {\\n  width: 35%;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col .footer-logo {\\n  display: flex;\\n  margin-bottom: 35px;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col .footer-logo .footer-logo__name {\\n  font-size: 28px;\\n  line-height: 46px;\\n  letter-spacing: 0.02em;\\n  font-weight: 600;\\n  margin-left: 15px;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col .footer-contacts {\\n  display: flex;\\n  margin-bottom: 25px;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col .footer-contacts .footer-contacts__icon {\\n  margin-right: 15px;\\n  font-weight: 600;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col .footer-contacts .footer-contacts__text {\\n  letter-spacing: 0.05em;\\n}\\n.footer .footer__inner .footer__upper-row .footer__left-col .footer-contacts:last-child {\\n  margin-bottom: 0;\\n}\\n.footer .footer__inner .footer__upper-row .footer__middle-col,\\n.footer .footer__inner .footer__upper-row .footer__right-col {\\n  width: 19%;\\n}\\n.footer .footer__inner .footer__upper-row .footer__middle-col .footer-col-title,\\n.footer .footer__inner .footer__upper-row .footer__right-col .footer-col-title {\\n  font-size: 20px;\\n  line-height: 30px;\\n  font-weight: 600;\\n  margin-bottom: 30px;\\n}\\n.footer .footer__inner .footer__upper-row .footer__middle-col .footer-col-list .footer-col-item,\\n.footer .footer__inner .footer__upper-row .footer__right-col .footer-col-list .footer-col-item {\\n  margin-bottom: 16px;\\n}\\n.footer .footer__inner .footer__upper-row .footer__middle-col .footer-col-list .footer-col-item:last-child,\\n.footer .footer__inner .footer__upper-row .footer__right-col .footer-col-list .footer-col-item:last-child {\\n  margin-bottom: 0;\\n}\\n.footer .footer__inner .footer__down-row .footer__copyright {\\n  letter-spacing: 0.05em;\\n  opacity: 0.4;\\n}\\n#talk-form {\\n  display: none;\\n  width: 100%;\\n  max-width: 540px;\\n  height: 100%;\\n  max-height: 800px;\\n  background: #fff;\\n  box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);\\n  border-radius: 10px;\\n  position: fixed;\\n  top: 50px;\\n  overflow: auto;\\n  left: 0;\\n  right: 0;\\n  margin: 0 auto;\\n  z-index: 1000;\\n}\\n#talk-form .close-form {\\n  width: 30px;\\n  height: 30px;\\n  position: absolute;\\n  top: 10px;\\n  right: 10px;\\n  cursor: pointer;\\n}\\n#talk-form .close-form::after,\\n#talk-form .close-form::before {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  width: 30px;\\n  height: 2px;\\n  background-color: #1F3F68;\\n}\\n#talk-form .close-form::after {\\n  top: 14px;\\n  transform: rotate(45deg);\\n}\\n#talk-form .close-form::before {\\n  bottom: 14px;\\n  transform: rotate(-45deg);\\n}\\n#talk-form form {\\n  padding: 55px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n#talk-form form .talk-form__title {\\n  font-size: 20px;\\n  line-height: 30px;\\n  letter-spacing: 0.04em;\\n  color: #1F3F68;\\n  margin-bottom: 50px;\\n  font-weight: 600;\\n}\\n#talk-form form .talk-form__item {\\n  margin-bottom: 30px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n#talk-form form .talk-form__item label {\\n  line-height: 30px;\\n  letter-spacing: 0.04em;\\n  opacity: 0.8;\\n  margin-bottom: 8px;\\n}\\n#talk-form form .talk-form__item input {\\n  height: 70px;\\n  width: 100%;\\n  opacity: 0.4;\\n  border: 1px solid #356EAD;\\n  border-radius: 10px;\\n  padding: 20px 0 20px 40px;\\n}\\n#talk-form form .talk-form__item textarea {\\n  height: 145px;\\n  opacity: 0.4;\\n  border: 1px solid #356EAD;\\n  box-sizing: border-box;\\n  border-radius: 10px;\\n  resize: none;\\n  padding: 20px 0 20px 40px;\\n}\\n#talk-form form .talk-form__item_last {\\n  margin-bottom: 70px;\\n}\\n#talk-form form .button_form {\\n  border: none;\\n  width: 100%;\\n  text-transform: uppercase;\\n}\\n.popup-success {\\n  display: none;\\n}\\n@media (max-width: 1160px) {\\n  .team {\\n    background: #316099;\\n  }\\n  .team .team__inner {\\n    margin-right: 0;\\n    padding-right: 0;\\n  }\\n  .team .team__inner::after {\\n    right: 0;\\n    left: 0;\\n    width: 100%;\\n  }\\n  .footer {\\n    background: #316099;\\n  }\\n  .footer .footer__inner {\\n    margin-right: 0;\\n    padding-right: 0;\\n  }\\n}\\n@media (max-width: 1040px) {\\n  .header .header__inner .site-menu {\\n    flex-wrap: wrap;\\n    width: 85%;\\n  }\\n  .header .header__inner .site-menu .site-menu__item {\\n    width: 25%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  .intro {\\n    background: linear-gradient(0deg, #ebf3fb 8.84%, rgba(152, 195, 232, 0) 31.12%);\\n  }\\n  .intro .intro__inner {\\n    margin: 0 auto;\\n  }\\n  .main {\\n    padding: 50px 0;\\n  }\\n  .main .main__inner {\\n    justify-content: space-between;\\n  }\\n  .main .main__inner .main__col-left {\\n    margin-left: 0;\\n    width: 45%;\\n  }\\n  .main .main__inner .main__col-right {\\n    margin-left: 0;\\n    width: 45%;\\n  }\\n  .client {\\n    border-radius: 0;\\n  }\\n  .client .client__inner .client__upper-row {\\n    justify-content: space-between;\\n  }\\n  .client .client__inner .client__upper-row .client__subtitle {\\n    width: calc(90% - 230px);\\n    margin-left: 0;\\n  }\\n  .team .team__inner {\\n    justify-content: space-around;\\n  }\\n  .team .team__inner .team__right-col {\\n    margin-left: 0;\\n  }\\n}\\n@media (max-width: 760px) {\\n  .header {\\n    padding-top: 20px;\\n  }\\n  .header .header__inner {\\n    flex-wrap: wrap;\\n  }\\n  .header .header__inner .site-logo {\\n    width: calc(100% - 24px);\\n    order: 1;\\n  }\\n  .header .header__inner .site-menu {\\n    order: 3;\\n    width: 100%;\\n  }\\n  .header .header__inner .site-menu .site-menu__item .site-menu__link {\\n    font-size: 15px;\\n  }\\n  .header .header__inner .burger-menu {\\n    order: 2;\\n  }\\n  .intro {\\n    height: auto;\\n  }\\n  .intro .intro__inner {\\n    padding: 130px 0 50px;\\n  }\\n  .section-title {\\n    position: static;\\n    width: 100%;\\n    text-align: center;\\n    margin-bottom: 30px;\\n  }\\n  .main {\\n    padding: 50px 0;\\n  }\\n  .main .main__inner {\\n    flex-direction: column;\\n    height: auto;\\n  }\\n  .main .main__inner .main__col-left,\\n  .main .main__inner .main__col-right {\\n    width: 100%;\\n  }\\n  .main .main__inner .main__col-left .main-item,\\n  .main .main__inner .main__col-right .main-item {\\n    padding: 30px;\\n    margin-bottom: 40px;\\n  }\\n  .client {\\n    padding: 50px 0;\\n  }\\n  .client .client__inner .client__upper-row {\\n    display: flex;\\n    flex-direction: column;\\n    margin-bottom: 40px;\\n  }\\n  .client .client__inner .client__upper-row .client__subtitle {\\n    width: 100%;\\n    text-align: center;\\n  }\\n  .client .client__inner .client__down-row .client-logo-item {\\n    width: 50%;\\n    border-right: none;\\n    border-bottom: 1px solid #9cc1e3;\\n  }\\n  .client .client__inner .client__down-row .client-logo-item:nth-child(odd) {\\n    border-right: 1px solid #9cc1e3;\\n  }\\n  .client .client__inner .client__down-row .client-logo-item:nth-child(7),\\n  .client .client__inner .client__down-row .client-logo-item:nth-child(8) {\\n    border-bottom: none;\\n  }\\n  .team .team__inner {\\n    padding: 50px 0;\\n    flex-direction: column;\\n  }\\n  .team .team__inner .team__left-col {\\n    width: 100%;\\n    margin-bottom: 30px;\\n  }\\n  .team .team__inner .team__right-col {\\n    width: 100%;\\n  }\\n}\\n@media (max-width: 570px) {\\n  .header .header__inner .site-menu .site-menu__item {\\n    width: 33%;\\n  }\\n  .header .header__inner .site-menu .site-menu__item .site-menu__link {\\n    font-size: 14px;\\n    letter-spacing: 0.1px;\\n  }\\n  .intro .intro__inner {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-top: 150px;\\n  }\\n  .intro .intro__inner .intro__title {\\n    text-align: center;\\n    font-size: 50px;\\n    line-height: 50px;\\n  }\\n  .intro .intro__inner .intro__body {\\n    width: 100%;\\n    text-align: center;\\n  }\\n  .footer .footer__inner .footer__upper-row {\\n    text-align: center;\\n    flex-wrap: wrap;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__left-col {\\n    width: 100%;\\n    margin-bottom: 50px;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__left-col .footer-logo {\\n    justify-content: center;\\n    margin-bottom: 5px;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__left-col .footer-contacts {\\n    justify-content: center;\\n    margin-bottom: 5px;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__left-col .footer-contacts .footer-contacts__text {\\n    text-align: start;\\n    width: 60%;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__middle-col,\\n  .footer .footer__inner .footer__upper-row .footer__right-col {\\n    width: 50%;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__middle-col .footer-col-title,\\n  .footer .footer__inner .footer__upper-row .footer__right-col .footer-col-title {\\n    margin-bottom: 10px;\\n  }\\n  .footer .footer__inner .footer__upper-row .footer__middle-col .footer-col-list .footer-col-item,\\n  .footer .footer__inner .footer__upper-row .footer__right-col .footer-col-list .footer-col-item {\\n    margin-bottom: 5px;\\n  }\\n  .footer .footer__inner .footer__down-row .footer__copyright {\\n    text-align: center;\\n  }\\n}\\n@media (max-width: 380px) {\\n  .container {\\n    padding: 0 10px;\\n  }\\n  .header {\\n    padding: 10px;\\n  }\\n  .header .header__inner .site-menu .site-menu__item {\\n    width: 25%;\\n  }\\n  .header .header__inner .site-menu .site-menu__item .site-menu__link {\\n    font-size: 13px;\\n  }\\n  .section-title {\\n    font-size: 26px;\\n    line-height: 26px;\\n  }\\n  .intro .intro__inner {\\n    padding: 120px 0 30px;\\n  }\\n  .intro .intro__inner .intro__title {\\n    font-size: 30px;\\n    line-height: 30px;\\n  }\\n  .intro .intro__inner .intro__body {\\n    margin-bottom: 30px;\\n  }\\n  .main {\\n    padding: 30px 0;\\n  }\\n  .main .main__inner .main__col-left .main-item,\\n  .main .main__inner .main__col-right .main-item {\\n    padding: 10px;\\n    box-shadow: 5px 5px 5px rgba(16, 112, 177, 0.2);\\n  }\\n  .main .main__inner .main__col-left .main-item .main-item__image,\\n  .main .main__inner .main__col-right .main-item .main-item__image {\\n    margin-bottom: 15px;\\n  }\\n  .main .main__inner .main__col-left .main-item .main-item__body,\\n  .main .main__inner .main__col-right .main-item .main-item__body {\\n    margin-bottom: 15px;\\n  }\\n  .main .main__inner .main__col-right .main-item:last-child {\\n    margin-bottom: 0;\\n  }\\n  .client {\\n    padding: 30px 0;\\n  }\\n  .client .client__inner .client__upper-row {\\n    margin-bottom: 15px;\\n  }\\n  .client .client__inner .client__down-row .client-logo-item {\\n    font-size: 18px;\\n  }\\n  .footer .footer__inner {\\n    padding: 30px 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://d-element/./styles/style.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./styles/normalize.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./styles/normalize.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://d-element/./styles/normalize.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://d-element/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://d-element/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://d-element/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./img/intro__bg.png?9aa7":
/*!***************************!*\
  !*** ./img/intro__bg.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5e7966dd1697447dcbd5d3ad015bb74a.png\");\n\n//# sourceURL=webpack://d-element/./img/intro__bg.png?");

/***/ }),

/***/ "./img/main__item_item-1.png":
/*!***********************************!*\
  !*** ./img/main__item_item-1.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"48da456bc196318cd332d052bf6adfb7.png\");\n\n//# sourceURL=webpack://d-element/./img/main__item_item-1.png?");

/***/ }),

/***/ "./img/main__item_item-2.png":
/*!***********************************!*\
  !*** ./img/main__item_item-2.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9a91dd27ed937f50df24dd06d14ed53d.png\");\n\n//# sourceURL=webpack://d-element/./img/main__item_item-2.png?");

/***/ }),

/***/ "./img/main__item_item-3.png":
/*!***********************************!*\
  !*** ./img/main__item_item-3.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"94b99dc5c6863acf1474948bc780ed0c.png\");\n\n//# sourceURL=webpack://d-element/./img/main__item_item-3.png?");

/***/ }),

/***/ "./styles/style.less":
/*!***************************!*\
  !*** ./styles/style.less ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./styles/style.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://d-element/./styles/style.less?");

/***/ }),

/***/ "./styles/normalize.css":
/*!******************************!*\
  !*** ./styles/normalize.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./styles/normalize.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://d-element/./styles/normalize.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://d-element/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://d-element/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://d-element/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://d-element/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://d-element/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://d-element/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./fonts/Galien-Bold.eot":
/*!*******************************!*\
  !*** ./fonts/Galien-Bold.eot ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"de36efea205f0f1f7acf.eot\";\n\n//# sourceURL=webpack://d-element/./fonts/Galien-Bold.eot?");

/***/ }),

/***/ "./fonts/Galien-Bold.ttf":
/*!*******************************!*\
  !*** ./fonts/Galien-Bold.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"09f4df95a965feb56aff.ttf\";\n\n//# sourceURL=webpack://d-element/./fonts/Galien-Bold.ttf?");

/***/ }),

/***/ "./fonts/Galien-Bold.woff":
/*!********************************!*\
  !*** ./fonts/Galien-Bold.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e9d2e4f3d4633ae2f7b7.woff\";\n\n//# sourceURL=webpack://d-element/./fonts/Galien-Bold.woff?");

/***/ }),

/***/ "./fonts/gilroy-regular.eot":
/*!**********************************!*\
  !*** ./fonts/gilroy-regular.eot ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1d051d9d4215c09cbcaa.eot\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-regular.eot?");

/***/ }),

/***/ "./fonts/gilroy-regular.ttf":
/*!**********************************!*\
  !*** ./fonts/gilroy-regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b91b0127c56a8e5f9e83.ttf\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-regular.ttf?");

/***/ }),

/***/ "./fonts/gilroy-regular.woff":
/*!***********************************!*\
  !*** ./fonts/gilroy-regular.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"891902634c184925de9b.woff\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-regular.woff?");

/***/ }),

/***/ "./fonts/gilroy-semibold.eot":
/*!***********************************!*\
  !*** ./fonts/gilroy-semibold.eot ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8134b9ab378c54626928.eot\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-semibold.eot?");

/***/ }),

/***/ "./fonts/gilroy-semibold.ttf":
/*!***********************************!*\
  !*** ./fonts/gilroy-semibold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6780292641f883b3dad3.ttf\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-semibold.ttf?");

/***/ }),

/***/ "./fonts/gilroy-semibold.woff":
/*!************************************!*\
  !*** ./fonts/gilroy-semibold.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"50366f9e26761e87bba3.woff\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-semibold.woff?");

/***/ }),

/***/ "./img/intro__bg.png?e487":
/*!***************************!*\
  !*** ./img/intro__bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6c5c923e2c202d1eb5fe.png\";\n\n//# sourceURL=webpack://d-element/./img/intro__bg.png?");

/***/ }),

/***/ "./fonts/Galien-Bold.svg":
/*!*******************************!*\
  !*** ./fonts/Galien-Bold.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a1f12590754dcde8d1dc.svg\";\n\n//# sourceURL=webpack://d-element/./fonts/Galien-Bold.svg?");

/***/ }),

/***/ "./fonts/gilroy-regular.svg":
/*!**********************************!*\
  !*** ./fonts/gilroy-regular.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9da49ba9f4dba8df5627.svg\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-regular.svg?");

/***/ }),

/***/ "./fonts/gilroy-semibold.svg":
/*!***********************************!*\
  !*** ./fonts/gilroy-semibold.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"56ddc1cf454478aa4cfd.svg\";\n\n//# sourceURL=webpack://d-element/./fonts/gilroy-semibold.svg?");

/***/ }),

/***/ "./img/arrow_right.svg":
/*!*****************************!*\
  !*** ./img/arrow_right.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1de7585fdc15a633eae1.svg\";\n\n//# sourceURL=webpack://d-element/./img/arrow_right.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;