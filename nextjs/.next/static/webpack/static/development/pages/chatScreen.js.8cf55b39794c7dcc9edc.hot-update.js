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

  var getMessageClassName = function getMessageClassName(msg, prevMsg) {
    if (msg.author === localStorage.getItem("username")) {
      if (Math.abs(msg.dateTime - prevMsg.dateTime) > 5000) {
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
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3122869505",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3122869505",
    __self: this
  }, "div.jsx-3122869505{height:70vh;}ul.jsx-3122869505{height:70vh;width:90%;overflow-y:scroll;overflow-x:hidden;text-align:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-3122869505{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-3122869505{border:1px solid orange;border-radius:15px;padding:12px;color:orange;text-align:right;}.other.jsx-3122869505{color:lightblue;border:1px solid lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-3122869505{text-align:left;color:white;font-size:1rem;}.collection.jsx-3122869505{margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUd5QixBQUdBLEFBU0ssQUFLTyxBQU9SLEFBT0EsQUFLTCxXQUNiLENBcENBLEFBR1ksSUFxQmlCLEFBT2YsQ0FuQkksS0FSRSxFQWFDLElBZUosS0FuQkgsT0FSTSxHQWFMLEFBT00sQUFRckIsRUFuQkEsV0FLZSxFQWJJLElBb0JKLE9BTkksTUFiSixBQW9CRyxXQU5sQixLQU9BLDBEQXBCd0IsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2hhdExpc3QgPSAoeyBtZXNzYWdlcyB9KSA9PiB7XHJcbiAgLy8gY29uc3QgW3ByZXZNc2csIHNldFByZXZNc2ddID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBsZXQgcHJldk1zZyA9IHt9O1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlQ2xhc3NOYW1lID0gKG1zZywgcHJldk1zZykgPT4ge1xyXG4gICAgaWYgKG1zZy5hdXRob3IgPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikpIHtcclxuICAgICAgaWYgKE1hdGguYWJzKG1zZy5kYXRlVGltZSAtIHByZXZNc2cuZGF0ZVRpbWUpID4gNTAwMCkge1xyXG4gICAgICAgIHJldHVybiBcInVzZXIgY29sbGVjdGlvblwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInVzZXJcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwib3RoZXJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sbGVjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICB7bWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Z2V0TWVzc2FnZUNsYXNzTmFtZShtc2csIHByZXZNc2cpfT5cclxuICAgICAgICAgICAgICB7bXNnLmRhdGVUaW1lfSA6e21zZy5hdXRob3J9LSB7bXNnLnRleHR9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.forEach(function (msg) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3122869505" + " " + (getMessageClassName(msg, prevMsg) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, msg.dateTime, " :", msg.author, "- ", msg.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.8cf55b39794c7dcc9edc.hot-update.js.map