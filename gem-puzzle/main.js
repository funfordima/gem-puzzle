/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/components/createFooter.js":
/*!***************************************!*\
  !*** ./js/components/createFooter.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createFooter; }
/* harmony export */ });
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./js/utils/create.js");
;
function createFooter() {
  return (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('footer', 'footer', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'switch__button', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'switch__img', null, null, ['src', '../src/assets/switch-off.svg'], ['alt', 'switch image icon'])]), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'button__size', '3x3'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'button__size', '4x4'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'button__size', '5x5'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'button__size', '6x6'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'button__size', '7x7'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'button__size', '8x8')]);
}

/***/ }),

/***/ "./js/components/createHeader.js":
/*!***************************************!*\
  !*** ./js/components/createHeader.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createHeader; }
/* harmony export */ });
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./js/utils/create.js");
;
function createHeader() {
  return (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('header', 'header', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header__button', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'btn__start', 'Shuffle and Start'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'btn__stop', 'Stop Game'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'btn__save', 'Save Game'), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'btn__result', 'Show Results')]), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header__info', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'info', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'description', 'Time: '), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'time', null)]), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header__audio', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'audio__img', null, null, ['src', '../src/assets/volumeOff.svg'], ['alt', 'audio icon'])]), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'moves', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'description', 'Moves: '), (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'counter', '000')])])]);
}

/***/ }),

/***/ "./js/components/createPopUp.js":
/*!**************************************!*\
  !*** ./js/components/createPopUp.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createPopUp; }
/* harmony export */ });
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./js/utils/create.js");
;
function createPopUp(message, main) {
  var popUp = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'popUp', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'modal', [(0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('p', 'message', "".concat(message))])]);
  main.insertAdjacentElement('beforeEnd', popUp);
  popUp.addEventListener('click', function () {
    main.removeChild(popUp);
  });
}

/***/ }),

/***/ "./js/constants/constants.js":
/*!***********************************!*\
  !*** ./js/constants/constants.js ***!
  \***********************************/
/*! namespace exports */
/*! export SIZES [provided] [no usage info] [missing usage info prevents renaming] */
/*! export handler [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIZES": function() { return /* binding */ SIZES; },
/* harmony export */   "handler": function() { return /* binding */ handler; }
/* harmony export */ });
var SIZES = {
  '3x3': 3,
  '4x4': 4,
  '5x5': 5,
  '6x6': 6,
  '7x7': 7,
  '8x8': 8
};
var handler = [];

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/game */ "./js/utils/game.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ "./js/constants/constants.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");
;


new _utils_game__WEBPACK_IMPORTED_MODULE_0__.default(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SIZES).init().generatePuzzles();

/***/ }),

/***/ "./js/utils/addZero.js":
/*!*****************************!*\
  !*** ./js/utils/addZero.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addZero; }
/* harmony export */ });
function addZero(n) {
  return parseInt(n, 10) < 10 ? "0".concat(n) : n;
}

/***/ }),

/***/ "./js/utils/create.js":
/*!****************************!*\
  !*** ./js/utils/create.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ create; }
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
* @param {String} el
* @param {String} classNames
* @param {HTMLElement} child
* @param {HTMLElement} parent
* @param {...array} dataAttr
*/
function create(el, classNames, child, parent) {
  var element = null;

  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name.');
  }

  if (classNames) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames.split(' ')));
  }

  if (child && Array.isArray(child)) {
    child.forEach(function (childElement) {
      return element.appendChild(childElement);
    });
  } else if (child && _typeof(child) === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

      element.setAttribute(attrName, attrValue);
    });
  }

  return element;
}

/***/ }),

/***/ "./js/utils/game.js":
/*!**************************!*\
  !*** ./js/utils/game.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Game; }
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./js/utils/create.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./js/constants/constants.js");
/* harmony import */ var _addZero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addZero */ "./js/utils/addZero.js");
/* harmony import */ var _components_createPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createPopUp */ "./js/components/createPopUp.js");
/* harmony import */ var _playAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playAudio */ "./js/utils/playAudio.js");
/* harmony import */ var _components_createHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/createHeader */ "./js/components/createHeader.js");
/* harmony import */ var _components_createFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/createFooter */ "./js/components/createFooter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var SIZES = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SIZES,
    handler = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.handler;
var isAudio = false;

function btnClickAudioHandler() {
  isAudio = !isAudio;
  var img = document.querySelector('.audio__img');

  if (isAudio) {
    img.setAttribute('src', '../src/assets/volumeOn.svg');
  } else {
    img.setAttribute('src', '../src/assets/volumeOff.svg');
  }
}

var header = (0,_components_createHeader__WEBPACK_IMPORTED_MODULE_5__.default)();
document.body.prepend(header);
document.querySelector('.header__audio').addEventListener('click', function () {
  btnClickAudioHandler();
});
var footer = (0,_components_createFooter__WEBPACK_IMPORTED_MODULE_6__.default)();
document.body.append(footer);
var main = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('main', 'game', null);
var audio = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('audio', 'audio', null, null, ['src', '../src/assets/1.mp3']);
footer.insertAdjacentElement('beforeend', audio);
footer.insertAdjacentElement('beforebegin', main);

var Game = /*#__PURE__*/function () {
  function Game(_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 4 : _ref$size;

    _classCallCheck(this, Game);

    this.boardSize = size;
    this.isSolve = false;
    this.isOnGame = false;
    this.isImage = false;
    this.seconds = 0;
    this.minutes = 0;
    this.timerId = null;
  }

  _createClass(Game, [{
    key: "createArr",
    value: function createArr() {
      this.arr = [];

      for (var i = 0; i < Math.pow(this.boardSize, 2); i += 1) {
        this.arr.push(i);
      }
    }
  }, {
    key: "shuffleArr",
    value: function shuffleArr() {
      this.arr.sort(function () {
        return Math.random() - 0.5;
      });
    } // Check arr is solvable

    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

  }, {
    key: "isSolvable",
    value: function isSolvable(arr) {
      if (this.boardSize % 2 === 0) {
        var indexBlankPuzzle = this.findPositionBlankPuzzle(arr);
        var countInversion = this.getInvCount(arr);

        if (indexBlankPuzzle % 2 === 0 && countInversion % 2 !== 0) {
          this.isSolve = true;
        } else if (indexBlankPuzzle % 2 !== 0 && countInversion % 2 === 0) {
          this.isSolve = true;
        }
      } else {
        this.getInvCount(arr) % 2 === 0 ? this.isSolve = true : this.isSolve = false;
      }
    } // find count inversions

  }, {
    key: "getInvCount",
    value: function getInvCount(arr) {
      var invCount = 0;

      for (var i = 0; i < Math.pow(this.boardSize, 2) - 1; i += 1) {
        for (var j = i + 1; j < Math.pow(this.boardSize, 2); j += 1) {
          // count pairs(i, j) such that i appears
          // before j, but i > j.
          if (arr[j] && arr[i] && arr[i] > arr[j]) {
            invCount += 1;
          }
        }
      }

      return invCount;
    } // find Position of blank from bottom

  }, {
    key: "findPositionBlankPuzzle",
    value: function findPositionBlankPuzzle(arr) {
      var indexZero = arr.findIndex(function (num) {
        return num === 0 || num === '';
      });
      return Math.ceil(this.boardSize - indexZero / this.boardSize);
    }
  }, {
    key: "createPuzzles",
    value: function createPuzzles() {
      var _this = this;

      var n = 1;
      this.buttons = [];
      this.arr.forEach(function (buttonNumber) {
        var cell = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', '', buttonNumber.toString(), null, ['draggable', true]);
        cell.style.order = n;
        n += 1;

        if (buttonNumber === 0 || buttonNumber === '') {
          cell.textContent = '';
          cell.classList.add('empty');
        }

        _this.buttons.push(cell);
      });
    }
    /* eslint no-param-reassign: ["error", { "props": false }] */

  }, {
    key: "moveTo",
    value: function moveTo(node1, node2, axis) {
      var _this2 = this;

      var counter = header.querySelector('.counter');
      this.moves = counter.innerHTML;
      counter.innerHTML = +this.moves + 1;
      var firstOrder = parseInt(node1.style.order, 10);
      var secondOrder = parseInt(node2.style.order, 10);
      this.board.classList.toggle('transit');

      if (firstOrder < secondOrder) {
        node1.style.transform = "translate".concat(axis, "(").concat(node1.offsetWidth, "px)");
        node2.style.transform = "translate".concat(axis, "(").concat(-node1.offsetWidth, "px)");
      } else {
        node1.style.transform = "translate".concat(axis, "(").concat(-node1.offsetWidth, "px)");
        node2.style.transform = "translate".concat(axis, "(").concat(node1.offsetWidth, "px)");
      }

      setTimeout(function () {
        _this2.board.classList.toggle('transit');

        node1.style.transform = '';
        node2.style.transform = '';
        var temp = node2.style.order;
        node2.style.order = node1.style.order;
        node1.style.order = temp; // Check victory

        var scoreArr = Array.from(_this2.board.children).sort(function (a, b) {
          return +a.style.order - b.style.order;
        }).map(function (btn) {
          return btn.innerText;
        });
        scoreArr.pop();

        if (scoreArr.every(function (el, i) {
          return +el === i + 1;
        })) {
          if (_this2.isOnGame) {
            var target = header.querySelector('.btn__stop');

            _this2.btnStopHandler(target);
          }

          var message = "\n                    <h3>You win!</h3>\n                    <span>Time: ".concat(_this2.minutes, " : ").concat(_this2.seconds, "</span>\n                    <span>Count moves: ").concat(+_this2.moves + 1, "</span>\n                ");
          (0,_components_createPopUp__WEBPACK_IMPORTED_MODULE_3__.default)(message, main);
          var topScore = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : [];
          topScore.push({
            moves: +_this2.moves + 1,
            minutes: _this2.minutes,
            seconds: _this2.seconds
          });
          topScore.sort(function (a, b) {
            return a.moves - b.moves;
          });

          if (topScore.length + 1 > 10) {
            topScore.pop();
          }

          localStorage.setItem('score', JSON.stringify(topScore));
        }
      }, 500);
    }
  }, {
    key: "setBoardSize",
    value: function setBoardSize(event) {
      var target = event.target;

      if (target.tagName === 'BUTTON') {
        this.boardSize = SIZES[target.innerText];
        main.innerHTML = '';
        header.removeEventListener('click', handler[0]);
        footer.removeEventListener('click', handler[1]);
        localStorage.removeItem('sessionBoard');
        localStorage.removeItem('sessionTime');
        localStorage.removeItem('sessionMoves');
        localStorage.removeItem('sessionSize');
        localStorage.removeItem('sessionStatus');
        this.minutes = 0;
        this.seconds = 0;
        this.init().generatePuzzles();
      }

      if (target.tagName === 'IMG') {
        this.btnChangeImgHandler();
      }
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var target = event.target;

      if (target.classList.contains('empty')) {
        return;
      }

      var emptyCell = document.querySelector('.empty');
      var targetOrder = parseInt(target.style.order, 10);
      var emptyOrder = parseInt(emptyCell.style.order, 10);
      /* eslint max-len: ["error", { "code": 137 }] */

      if (Math.abs(emptyOrder - targetOrder) === this.boardSize) {
        this.moveTo(target, emptyCell, 'Y');
        (0,_playAudio__WEBPACK_IMPORTED_MODULE_4__.default)(isAudio, audio);
      } else if (Math.abs(emptyOrder - targetOrder) === 1 && Math.floor((emptyOrder - 1) / this.boardSize) === Math.floor((targetOrder - 1) / this.boardSize)) {
        this.moveTo(target, emptyCell, 'X');
        (0,_playAudio__WEBPACK_IMPORTED_MODULE_4__.default)(isAudio, audio);
      }
    }
  }, {
    key: "changeTimer",
    value: function changeTimer() {
      var _this3 = this;

      this.timerId = setInterval(function () {
        if (_this3.isOnGame) {
          var time = header.querySelector('.time');
          _this3.seconds += 1;
          time.textContent = "".concat((0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(_this3.minutes), " : ").concat((0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(_this3.seconds));

          if (_this3.seconds === 60) {
            _this3.minutes += 1;
            _this3.seconds = 0;
          }
        }
      }, 1000);
    }
  }, {
    key: "btnStopHandler",
    value: function btnStopHandler(target) {
      this.isOnGame = !this.isOnGame;

      if (this.isOnGame) {
        target.innerHTML = 'Stop Game';
        this.board.classList.remove('off');

        if (this.timerId) {
          clearInterval(this.timerId);
        }

        this.changeTimer();
      } else {
        target.innerHTML = 'Resume Game';
        this.board.classList.add('off');
      }
    }
  }, {
    key: "btnStartHandler",
    value: function btnStartHandler() {
      main.innerHTML = '';
      header.removeEventListener('click', handler[0]);
      footer.removeEventListener('click', handler[1]);
      localStorage.removeItem('sessionBoard');
      localStorage.removeItem('sessionTime');
      localStorage.removeItem('sessionMoves');
      localStorage.removeItem('sessionSize');
      localStorage.removeItem('sessionStatus');
      localStorage.removeItem('sessionImage');
      localStorage.removeItem('sessionImgNumber');
      this.imgNumber = null;
      this.minutes = 0;
      this.seconds = 0;
      this.init().generatePuzzles();
      this.isOnGame = true;

      if (this.isImage) {
        document.querySelector('.switch__img').src = '../src/assets/switch-on.svg';
      } else {
        document.querySelector('.switch__img').src = '../src/assets/switch-off.svg';
      }

      if (this.timerId) {
        this.moves = '000';
        clearInterval(this.timerId);
        header.querySelector('.time').textContent = '00:00';
      }

      if (this.isOnGame) {
        this.board.classList.remove('off');
        document.querySelector('.btn__stop').innerHTML = 'Stop Game';
        this.changeTimer();
      } else {
        this.board.classList.add('off');
      }
    }
  }, {
    key: "btnChangeImgHandler",
    value: function btnChangeImgHandler() {
      this.isImage = !this.isImage;
      this.btnStartHandler();
    }
  }, {
    key: "btnClickHandler",
    value: function btnClickHandler(event) {
      var target = event.target; // Click Start Button

      if (target.classList.contains('btn__start')) {
        this.btnStartHandler();
      } // Click Stop Button


      if (target.classList.contains('btn__stop')) {
        this.btnStopHandler(target);
      } // Click Save Button


      if (target.classList.contains('btn__save')) {
        var sessionArr = Array.from(this.board.children).sort(function (a, b) {
          return +a.style.order - b.style.order;
        }).map(function (btn) {
          return btn.innerText;
        });
        var sessionTime = [this.minutes, this.seconds];
        var sessionMoves = header.querySelector('.counter').textContent;
        localStorage.setItem('sessionBoard', JSON.stringify(sessionArr));
        localStorage.setItem('sessionTime', JSON.stringify(sessionTime));
        localStorage.setItem('sessionMoves', sessionMoves);
        localStorage.setItem('sessionSize', this.boardSize);
        localStorage.setItem('sessionStatus', JSON.stringify(this.isOnGame));
        localStorage.setItem('sessionImage', JSON.stringify(this.isImage));

        if (this.isImage) {
          localStorage.setItem('sessionImgNumber', this.imgNumber);
        }

        this.isOnGame = !this.isOnGame;
        header.querySelector('.btn__stop').textContent = 'Resume Game';
        this.board.classList.add('off');
      } // Click Show Results


      if (target.classList.contains('btn__result')) {
        if (this.isOnGame) {
          var element = header.querySelector('.btn__stop');
          this.btnStopHandler(element);
        }

        var topScore = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : false;

        if (!topScore) {
          (0,_components_createPopUp__WEBPACK_IMPORTED_MODULE_3__.default)('Your score is empty', main);
        } else {
          // topScore.sort((a, b) => a.moves - b.moves);
          var message = topScore.map(function (el, i) {
            return "\n                  <tr>\n                    <td>".concat(i + 1, "</td>\n                    <td>").concat(el.moves, "</td>\n                    <td>").concat((0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(el.minutes), " : ").concat((0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(el.seconds), "</td>\n                  </tr>\n                  ");
          }).join('');
          (0,_components_createPopUp__WEBPACK_IMPORTED_MODULE_3__.default)("\n                <table>\n                  <tr>\n                    <th>##</th>\n                    <th>Moves</th>\n                    <th>Time</th>\n                  </tr>\n                  ".concat(message, "\n                </table>\n        "), main);
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      if (localStorage.getItem('sessionSize') && localStorage.getItem('sessionBoard')) {
        this.arr = JSON.parse(localStorage.getItem('sessionBoard'));
        header.querySelector('.counter').innerHTML = localStorage.getItem('sessionMoves');
        var sessionTime = JSON.parse(localStorage.getItem('sessionTime'));
        this.seconds = +sessionTime[1];
        this.minutes = +sessionTime[0];
        header.querySelector('.time').textContent = "".concat((0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(this.minutes), " : ").concat((0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(this.seconds));
        this.boardSize = +localStorage.getItem('sessionSize');
        this.isOnGame = JSON.parse(localStorage.getItem('sessionStatus'));
        this.isImage = JSON.parse(localStorage.getItem('sessionImage'));
        this.imgNumber = localStorage.getItem('sessionImgNumber');
        this.createPuzzles();
        this.isOnGame = !this.isOnGame;

        if (this.isOnGame) {
          header.querySelector('.btn__stop').textContent = 'Stop Game';
        } else {
          header.querySelector('.btn__stop').textContent = 'Resume Game';
        }

        if (this.isImage) {
          document.querySelector('.switch__img').src = '../src/assets/switch-on.svg';
        } else {
          document.querySelector('.switch__img').src = '../src/assets/switch-off.svg';
        }
      } else {
        header.querySelector('.counter').innerHTML = '000';
        this.createArr();
        this.shuffleArr();

        while (!this.isSolve) {
          this.isSolvable(this.arr);

          if (!this.isSolve) {
            this.shuffleArr();
          }
        }

        this.createPuzzles();
      }

      return this;
    }
  }, {
    key: "generatePuzzles",
    value: function generatePuzzles() {
      var _this4 = this;

      this.board = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'grid off', null, null);
      this.board.style.gridTemplateColumns = "repeat(".concat(this.boardSize, ", 1fr)");
      this.board.style.gridTemplateRows = "repeat(".concat(this.boardSize, ", 1fr)");
      this.buttons.forEach(function (puzzleItem) {
        _this4.board.appendChild(puzzleItem);

        puzzleItem.addEventListener('dragstart', function (event) {
          var empty = document.querySelector('.empty');

          if (event.target === empty) {
            return;
          }

          puzzleItem.classList.add('dragging');
          event.dataTransfer.setData('order', event.target.style.order);
        });
        puzzleItem.addEventListener('dragend', function () {
          puzzleItem.classList.remove('dragging');
        });
        puzzleItem.addEventListener('drop', function (event) {
          event.preventDefault();
          var target = event.target;

          if (!target.classList.contains('empty')) {
            return;
          }

          var orderDragStart = +event.dataTransfer.getData('order', event.target.style.order);
          var targetDragStart = document.querySelector("[style='order: ".concat(orderDragStart, ";']"));
          var emptyCell = document.querySelector('.empty');
          var emptyOrder = parseInt(emptyCell.style.order, 10);
          /* eslint max-len: ["error", { "code": 137 }] */

          if (Math.abs(emptyOrder - orderDragStart) === _this4.boardSize) {
            _this4.moveTo(targetDragStart, emptyCell, 'Y');

            (0,_playAudio__WEBPACK_IMPORTED_MODULE_4__.default)(isAudio, audio);
          } else if (Math.abs(emptyOrder - orderDragStart) === 1 && Math.floor((emptyOrder - 1) / _this4.boardSize) === Math.floor((orderDragStart - 1) / _this4.boardSize)) {
            _this4.moveTo(targetDragStart, emptyCell, 'X');

            (0,_playAudio__WEBPACK_IMPORTED_MODULE_4__.default)(isAudio, audio);
          }
        });
      });

      this.board.ondragover = function (e) {
        return e.preventDefault();
      }; // Handle events


      this.board.addEventListener('click', function (event) {
        return _this4.clickHandler(event, _this4.boardSize);
      });
      handler[1] = this.setBoardSize.bind(this);
      footer.addEventListener('click', handler[1]);
      handler[0] = this.btnClickHandler.bind(this);
      header.addEventListener('click', handler[0]);
      main.append(this.board);

      if (this.isImage) {
        var can = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('canvas', 'can', null, null, ['width', "".concat(this.board.clientWidth)], ['height', "".concat(this.board.clientHeight)]);
        var ctx = can.getContext('2d');
        var im = new Image();
        var n = 1;
        var resArr = [];

        im.onload = function () {
          for (var i = 0; i < _this4.boardSize; i += 1) {
            var recArr = [];

            for (var j = 0; j < _this4.boardSize; j += 1) {
              var chunkWidth = _this4.board.clientWidth / _this4.boardSize;
              var chunkHeight = _this4.board.clientHeight / _this4.boardSize;
              var x = i * chunkWidth;
              var y = j * chunkHeight;
              ctx.drawImage(im, x, y, chunkWidth, chunkHeight, x, y, chunkWidth, chunkHeight);
              var data = ctx.getImageData(x, y, chunkWidth, chunkHeight);
              var ce = document.createElement('canvas');
              ce.width = chunkWidth;
              ce.height = chunkHeight;
              var ctxE = ce.getContext('2d');
              ctxE.putImageData(data, 0, 0);
              recArr.push(ce.toDataURL('image/jpg'));
            }

            resArr.push(recArr);
          }

          function findIndx(arr, k) {
            return arr.findIndex(function (btn) {
              return +btn.innerText === k;
            });
          }

          for (var _i = 0; _i < _this4.boardSize; _i += 1) {
            for (var _j = 0; _j < _this4.boardSize; _j += 1) {
              var index = findIndx(_this4.buttons, n);

              if (index === -1) {
                index = _this4.arr.findIndex(function (num) {
                  return num === 0 || num === '';
                });
              }

              _this4.buttons[index].style.backgroundImage = "url('".concat(resArr[_j][_i], "')");
              n += 1;
            }
          }
        };

        im.src = "../src/assets/img/".concat(this.imgNumber || (0,_addZero__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(Math.random() * 10 + 1)), ".jpg");
        this.imgNumber = im.src.slice(-6, -4);
      }

      if (this.timerId) {
        this.moves = 0;
        clearInterval(this.timerId);
        header.querySelector('.time').textContent = '00:00';
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./js/utils/playAudio.js":
/*!*******************************!*\
  !*** ./js/utils/playAudio.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ playAudio; }
/* harmony export */ });
/* eslint no-param-reassign: ["error", { "props": false }] */
function playAudio(isAudio, audio) {
  if (isAudio) {
    audio.currentTime = 0;
    audio.play();
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js"],
/******/ 			["./js/script.js","vendors-node_modules_babel_polyfill_lib_index_js"]
/******/ 		];
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
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map