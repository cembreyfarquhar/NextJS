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
  // const [prevMsg, setPrevMsg] = useState({});
  var prevMsg = {};
  messages.forEach(function (msg) {
    prevMsg = msg;
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3607766566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3607766566",
    __self: this
  }, "div.jsx-3607766566{height:70vh;}ul.jsx-3607766566{height:70vh;width:90%;overflow-y:scroll;overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:right;}li.jsx-3607766566{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-3607766566{border:1px solid orange;border-radius:15px;padding:12px;color:orange;}.other.jsx-3607766566{color:lightblue;border:1px solid lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-3607766566{text-align:left;color:white;font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBR3lCLEFBR0EsQUFTSyxBQUtPLEFBTVIsQUFPQSxZQTdCbEIsQUFHWSxJQW9CaUIsQUFPZixDQWxCSSxLQVJFLEVBYUMsSUFjRixLQWxCTCxPQVJNLEdBYUwsQUFNTSxFQVZyQixBQWtCQSxXQWJlLEVBYkEsSUFtQkEsT0FMZixNQU1rQixnQkFDbEIseUNBcEJtQixpQkFFbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjZW1iclxcT25lRHJpdmVcXERlc2t0b3BcXExhbWJkYVxcUmFuZG9tXFxUb0Rvb29vb1xcbmV4dGpzXFxjb21wb25lbnRzXFxjaGF0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGF0TGlzdCA9ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAvLyBjb25zdCBbcHJldk1zZywgc2V0UHJldk1zZ10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGxldCBwcmV2TXNnID0ge307XHJcblxyXG4gIG1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcclxuICAgIHByZXZNc2cgPSBtc2c7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAge21lc3NhZ2VzLnJldmVyc2UoKS5tYXAobXNnID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBtc2cuYXV0aG9yID09PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJvdGhlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21zZy5hdXRob3J9LSB7bXNnLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.reverse().map(function (msg) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3607766566" + " " + ((msg.author === localStorage.getItem("username") ? "user" : "other") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, msg.author, "- ", msg.text));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.9e62b9b07c39a55bea6d.hot-update.js.map