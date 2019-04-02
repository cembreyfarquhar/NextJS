webpackHotUpdate("static\\development\\pages\\chatScreen.js",{

/***/ "./components/chatList.js":
/*!********************************!*\
  !*** ./components/chatList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js";




var ChatList = function ChatList(_ref) {
  var messages = _ref.messages;
  var prevMsg = {};

  var getMessageClassName = function getMessageClassName(msg, prevMsg) {
    if (msg.author === localStorage.getItem("username")) {
      if (Math.abs(msg.dateTime - prevMsg.dateTime) < 5000) {
        return "user collection";
      } else {
        return "user";
      }
    } else {
      return "other";
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2957982512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2957982512",
    __self: this
  }, "div.jsx-2957982512{height:70vh;}ul.jsx-2957982512{height:70vh;width:90%;overflow-y:scroll;overflow-x:hidden;text-align:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-2957982512{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-2957982512{border:1px solid orange;border-radius:15px;padding:12px;background-color:orange;color:lightblue;text-align:right;}.other.jsx-2957982512{color:organge;border:1px solid lightblue;background-color:lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-2957982512{text-align:left;color:white;font-size:1rem;}.collection.jsx-2957982512{margin:0px 15px;border-top:none;border-bottom:none;border-radius:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUd5QixBQUdBLEFBU0ssQUFLTyxBQVFWLEFBUUUsQUFLQSxZQXJDbEIsQUFHWSxFQXNCaUIsRUFRZixBQUtJLENBMUJBLEtBUkUsRUFhQyxJQWlCSixJQUtJLENBMUJQLE9BUk0sQ0FxQlMsRUFSZCxBQWlCZixFQXJCQSxNQTBCb0IsS0FyQk0sRUFiUCxVQXFCRSxDQWNyQixNQWxDZSxLQWFHLE9BUUgsU0FQSSxJQVFELGFBUGxCLEdBUUEsaUNBdEJ3Qiw4RUFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjZW1iclxcT25lRHJpdmVcXERlc2t0b3BcXExhbWJkYVxcUmFuZG9tXFxUb0Rvb29vb1xcbmV4dGpzXFxjb21wb25lbnRzXFxjaGF0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoYXRMaXN0ID0gKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gIGxldCBwcmV2TXNnID0ge307XHJcblxyXG4gIGNvbnN0IGdldE1lc3NhZ2VDbGFzc05hbWUgPSAobXNnLCBwcmV2TXNnKSA9PiB7XHJcbiAgICBpZiAobXNnLmF1dGhvciA9PT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSkge1xyXG4gICAgICBpZiAoTWF0aC5hYnMobXNnLmRhdGVUaW1lIC0gcHJldk1zZy5kYXRlVGltZSkgPCA1MDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidXNlciBjb2xsZWN0aW9uXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwidXNlclwiO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJvdGhlclwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm90aGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IG9yZ2FuZ2U7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgsIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICBwcmV2TXNnID0gYXJyYXlbaW5kZXggLSAxXTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2dldE1lc3NhZ2VDbGFzc05hbWUobXNnLCBwcmV2TXNnKX0+e21zZy50ZXh0fTwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.map(function (msg, index, array) {
    prevMsg = array[index - 1];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2957982512" + " " + (getMessageClassName(msg, prevMsg) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, msg.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.4089a3fef1532afcc992.hot-update.js.map