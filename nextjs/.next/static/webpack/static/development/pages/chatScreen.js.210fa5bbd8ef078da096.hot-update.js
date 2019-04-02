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
    className: "jsx-1978159046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1978159046",
    __self: this
  }, "div.jsx-1978159046{height:70vh;}ul.jsx-1978159046{height:70vh;width:90%;overflow-y:scroll;overflow-x:hidden;text-align:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}li.jsx-1978159046{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-1978159046{border:1px solid orange;border-radius:15px;padding:12px;color:orange;}.other.jsx-1978159046{color:lightblue;border:1px solid lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-1978159046{text-align:left;color:white;font-size:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBR3lCLEFBR0EsQUFTSyxBQUtPLEFBTVIsQUFPQSxZQTdCbEIsQUFHWSxJQW9CaUIsQUFPZixDQWxCSSxLQVJFLEVBYUMsSUFjSixLQWxCSCxPQVJNLEdBYUwsQUFNTSxBQVFyQixFQWxCQSxXQUtlLEVBYkksSUFtQkosT0FMZixNQWJlLEFBbUJHLGdCQUNsQiwwREFuQmdDLHNHQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNlbWJyXFxPbmVEcml2ZVxcRGVza3RvcFxcTGFtYmRhXFxSYW5kb21cXFRvRG9vb29vXFxuZXh0anNcXGNvbXBvbmVudHNcXGNoYXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoYXRMaXN0ID0gKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtwcmV2TXNnLCBzZXRQcmV2TXNnXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgbGV0IHByZXZNc2cgPSB7fTtcclxuXHJcbiAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgcHJldk1zZyA9IG1zZztcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAge21lc3NhZ2VzLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIG1zZy5hdXRob3IgPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICA/IFwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIm90aGVyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bXNnLmRhdGVUaW1lfToge21zZy5hdXRob3J9LSB7bXNnLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.map(function (msg) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1978159046" + " " + ((msg.author === localStorage.getItem("username") ? "user" : "other") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, msg.dateTime, ": ", msg.author, "- ", msg.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.210fa5bbd8ef078da096.hot-update.js.map