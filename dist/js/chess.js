/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => /* binding */ Game
/* harmony export */ });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__.Screen(1000, 1000);
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__.Loading(this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.isActive == false) {
        this.currentScene = this.scenes[this.currentScene.nextScene];
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var chess = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
  chess.run();
};

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => /* binding */ Scene
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene = /*#__PURE__*/function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.isActive = true;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => /* binding */ Loading
/* harmony export */ });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Loading = /*#__PURE__*/function (_Scene) {
  _inherits(Loading, _Scene);

  var _super = _createSuper(Loading);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, game);
    _this.nextScene = "menu";
    console.log("Loading constructor");
    return _this;
  }

  _createClass(Loading, [{
    key: "render",
    value: function render(time) {
      this.game.screen.fill('#000000');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__.Scene);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => /* binding */ Screen
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Screen = /*#__PURE__*/function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.height = height;
    this.width = width;
    this.canvas = this.createCanvas();
    this.resize();
    this.context = this.canvas.getContext('2d');
  }

  _createClass(Screen, [{
    key: "resize",
    value: function resize() {
      var height = window.innerHeight - 50;
      var width = height;
      this.canvas.width = width;
      this.canvas.height = height;
      this.canvas.style.marginLeft = (window.innerWidth - width) / 2 + "px";
      this.canvas.style.marginTop = (window.innerHeight - height) / 2 + "px";
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      var elements = document.getElementsByTagName('canvas');

      if (elements.length > 0) {
        return elements[0];
      }

      var canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      return canvas;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }]);

  return Screen;
}();

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVzcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovL2NoZXNzLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NoZXNzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwic2NlbmVzIiwibG9hZGluZyIsIkxvYWRpbmciLCJjdXJyZW50U2NlbmUiLCJpbml0IiwidGltZSIsImlzQWN0aXZlIiwibmV4dFNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjaGVzcyIsInJ1biIsIlNjZW5lIiwiZ2FtZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxsIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJyZXNpemUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiaW5uZXJXaWR0aCIsIm1hcmdpblRvcCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb2xvciIs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Q0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJqcy9jaGVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuL3NjZW5lcy9sb2FkaW5nXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oMTAwMCwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmcmFtZSh0aW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUuaXNBY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZS5uZXh0U2NlbmVdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVzcyA9IG5ldyBHYW1lKCk7XHJcbiAgICBjaGVzcy5ydW4oKTtcclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMubmV4dFNjZW5lID0gXCJtZW51XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGNvbnN0cnVjdG9yXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDUwO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpbkxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLSB3aWR0aCkgLyAyICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpblRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMiArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGlmKCBlbGVtZW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9