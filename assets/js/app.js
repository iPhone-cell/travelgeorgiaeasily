/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/accodrion.js":
/*!**********************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/accodrion.js ***!
  \**********************************************************************************/
/***/ (function() {

eval("// FAQ\r\n$('.faq__qa-top').click(function (event) {\r\n    if ($('.fqa__qa-wrapper').hasClass('one')) {\r\n        $('.faq__qa-top').not($(this)).removeClass('active');\r\n        $('.faq__qa-text').not($(this).next()).slideUp(300);\r\n    }\r\n    $(this).toggleClass('active').next().slideToggle(300);\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/accodrion.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/advantages.js":
/*!***********************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/advantages.js ***!
  \***********************************************************************************/
/***/ (function() {

eval("// Carousel\r\n// $('.advantages__main').slick({\r\n// \tinfinite: true,\r\n// \tslidesToShow: 3,\r\n// \tslidesToScroll: 1,\r\n\r\n// \tresponsive: [\r\n// \t\t{\r\n// \t\t  breakpoint: 1024,\r\n// \t\t  settings: {\r\n// \t\t\tslidesToShow: 3,\r\n// \t\t\tslidesToScroll: 3,\r\n// \t\t  }\r\n// \t\t},\r\n// \t\t{\r\n// \t\t  breakpoint: 600,\r\n// \t\t  settings: {\r\n// \t\t\tslidesToShow: 2,\r\n// \t\t\tslidesToScroll: 2,\r\n// \t\t  }\r\n// \t\t},\r\n// \t\t{\r\n// \t\t  breakpoint: 376,\r\n// \t\t  settings: {\r\n// \t\t\tslidesToShow: 1,\r\n// \t\t\tslidesToScroll: 1,\r\n// \t\t  }\r\n// \t\t}\r\n// \t  ]\r\n// });\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/advantages.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/app.js":
/*!****************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/app.js ***!
  \****************************************************************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/app.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/carousel.js":
/*!*********************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/carousel.js ***!
  \*********************************************************************************/
/***/ (function() {

eval("// Hero Banner\r\n\r\n$('.hero__banner-wrapper').slick({\r\n\tinfinite: true,\r\n\tslidesToShow: 1,\r\n\tslidesToScroll: 1,\r\n    dots: true,\r\n    arrows: false,\r\n    autoplay: true,\r\n    autoplaySpeed: 3000,\r\n});\r\n\r\n// Advantages\r\n$('.advantages__main').slick({\r\n\tinfinite: true,\r\n\tslidesToShow: 3,\r\n\tslidesToScroll: 3,\r\n    centerMode: true,\r\n    dots: true,\r\n    arrows: false,\r\n\r\n\tresponsive: [\r\n\t\t{\r\n\t\t  breakpoint: 1024,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 3,\r\n\t\t\tslidesToScroll: 3,\r\n\t\t  }\r\n\t\t},\r\n\t\t{\r\n\t\t  breakpoint: 600,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 2,\r\n\t\t\tslidesToScroll: 2,\r\n\t\t  }\r\n\t\t},\r\n\t\t{\r\n\t\t  breakpoint: 376,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 1,\r\n\t\t\tslidesToScroll: 1,\r\n\t\t  }\r\n\t\t}\r\n\t  ]\r\n});\r\n\r\n// Hosts\r\n$('.hosts__main').slick({\r\n\tinfinite: true,\r\n\tslidesToShow: 3,\r\n\tslidesToScroll: 3,\r\n    dots: true,\r\n    arrows: false,\r\n\r\n\tresponsive: [\r\n\t\t{\r\n\t\t  breakpoint: 1024,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 3,\r\n\t\t\tslidesToScroll: 3,\r\n\t\t  }\r\n\t\t},\r\n\t\t{\r\n\t\t  breakpoint: 600,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 2,\r\n\t\t\tslidesToScroll: 2,\r\n\t\t  }\r\n\t\t},\r\n\t\t{\r\n\t\t  breakpoint: 376,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 1,\r\n\t\t\tslidesToScroll: 1,\r\n\t\t  }\r\n\t\t}\r\n\t  ]\r\n});\r\n\r\n// Clients Say\r\n$('.reviews__carousel').slick({\r\n\tinfinite: true,\r\n\tslidesToShow: 1,\r\n\tslidesToScroll: 1,\r\n    dots: true,\r\n    arrows: false,\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/carousel.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/cars_filter.js":
/*!************************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/cars_filter.js ***!
  \************************************************************************************/
/***/ (function() {

eval("\r\n$(function () {\r\n\t$('.filter__cities').each(function () {\r\n\t\tlet ths = $(this);\r\n\t\tths.find('.tab-item').not(':first').hide();\r\n\t\tths.find('.filter__cities-item').click(function () {\r\n\t\t\tths.find('.filter__cities-item').removeClass('active').eq($(this).index()).addClass('active');\r\n\t\t\tths.find('.tab-item').hide().eq($(this).index()).fadeIn()\r\n\t\t}).eq(0).addClass('active');\r\n\t});\r\n});\r\n\r\n\r\n$(function () {\r\n\t$('.filter__sort_filters').each(function () {\r\n\t\tlet ths = $(this);\r\n\t\tths.find('.tab-item').not(':first').hide();\r\n\t\tths.find('.filter__sort_filters_tag').click(function () {\r\n\t\t\tths.find('.filter__sort_filters_tag').eq($(this).index()).toggleClass('active');\r\n\t\t\tths.find('.tab-item').hide().eq($(this).index()).fadeIn()\r\n\t\t}).eq(0).addClass('active');\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/cars_filter.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/cars_items.js":
/*!***********************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/cars_items.js ***!
  \***********************************************************************************/
/***/ (function() {

eval("$(function () {\r\n\t$('.cars__results').each(function () {\r\n\t\tlet ths = $(this);\r\n\t\tths.find('.results__item').click(function () {\r\n\t\t\tths.find('.results__item').eq($(this).index()).toggleClass('active');\r\n\t\t});\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/cars_items.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/destinations.js":
/*!*************************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/destinations.js ***!
  \*************************************************************************************/
/***/ (function() {

eval("$(function () {\r\n\t$('.destinations__item').each(function () {\r\n\t\tlet ths = $(this);\r\n\t\tths.find('.destinations__item-plus').click(function () {\r\n\t\t\tths.find('.destinations__item-pic').eq($(this).index()).toggleClass('active');\r\n\t\t});\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/destinations.js?");

/***/ }),

/***/ "../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/sticky_nav.js":
/*!***********************************************************************************!*\
  !*** ../../../ #2024/ #october/travel_georgia_easily/src/assets/js/sticky_nav.js ***!
  \***********************************************************************************/
/***/ (function() {

eval("$(function() {\r\n    let headerSearch = $('#headerSearch');\r\n    let header = $('#headerTop');\r\n    let cars = $('#cars');\r\n    let headerH = header.innerHeight();\r\n    let carsH = cars.innerHeight();\r\n    let scrollPos = $(window).scrollTop;\r\n\r\n    $(window).on(\"scroll\", function() {\r\n\r\n        scrollPos = $(this).scrollTop();\r\n\r\n        if( scrollPos > headerH ) {\r\n            headerSearch.addClass(\"fixed\");\r\n        }  else {\r\n                headerSearch.removeClass(\"fixed\");\r\n            }\r\n    });\r\n\r\n\r\n    // headerSearch.addClass('fixed');\r\n\r\n    $(window).on(\"scroll\", function() {\r\n\r\n        scrollPos = $(this).scrollTop();\r\n\r\n        if( scrollPos > carsH ) {\r\n            headerSearch.removeClass(\"fixed\");\r\n        };\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2024/%00#october/travel_georgia_easily/src/assets/js/sticky_nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/accodrion.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/advantages.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/app.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/carousel.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/cars_filter.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/cars_items.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/destinations.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../\u0000#2024/\u0000#october/travel_georgia_easily/src/assets/js/sticky_nav.js"]();
/******/ 	
/******/ })()
;