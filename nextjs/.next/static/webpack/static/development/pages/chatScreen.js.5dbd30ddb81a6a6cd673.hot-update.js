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
    className: "jsx-3621550719",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3621550719",
    __self: this
  }, "div.jsx-3621550719{height:70vh;}ul.jsx-3621550719{height:70vh;width:90%;overflow-y:scroll;overflow-x:hidden;text-align:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-3621550719{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-3621550719{border:1px solid orange;border-radius:15px;padding:12px;background-color:orange;color:lightblue;text-align:right;}.other.jsx-3621550719{color:organge;border:1px solid lightblue;background-color:lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-3621550719{text-align:left;color:white;font-size:1rem;}.collection.jsx-3621550719{margin:2px;border-top:none;border-bottom:none;border-radius:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUd5QixBQUdBLEFBU0ssQUFLTyxBQVFWLEFBUUUsQUFLTCxXQUNLLENBdENsQixBQUdZLEVBc0JpQixFQVFmLENBckJJLEtBUkUsRUFhQyxHQXNCQSxDQUxKLEtBckJILE9BUk0sQ0FxQlMsRUFSZCxBQWlCZixFQXJCQSxDQTBCa0IsVUFyQlEsRUFiUCxJQW1DbkIsTUFkcUIsT0FwQk4sS0FhRyxPQVFILFNBUEksSUFRRCxhQVBsQixHQVFBLGlDQXRCd0IsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGF0TGlzdCA9ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICBsZXQgcHJldk1zZyA9IHt9O1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlQ2xhc3NOYW1lID0gKG1zZywgcHJldk1zZykgPT4ge1xyXG4gICAgaWYgKG1zZy5hdXRob3IgPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikpIHtcclxuICAgICAgaWYgKE1hdGguYWJzKG1zZy5kYXRlVGltZSAtIHByZXZNc2cuZGF0ZVRpbWUpIDwgNTAwMCkge1xyXG4gICAgICAgIHJldHVybiBcInVzZXIgY29sbGVjdGlvblwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInVzZXJcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwib3RoZXJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBvcmdhbmdlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2xsZWN0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgsIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICBwcmV2TXNnID0gYXJyYXlbaW5kZXggLSAxXTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2dldE1lc3NhZ2VDbGFzc05hbWUobXNnLCBwcmV2TXNnKX0+XHJcbiAgICAgICAgICAgICAge21zZy5kYXRlVGltZX0gOnttc2cuYXV0aG9yfS0ge21zZy50ZXh0fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.map(function (msg, index, array) {
    prevMsg = array[index - 1];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-3621550719" + " " + (getMessageClassName(msg, prevMsg) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, msg.dateTime, " :", msg.author, "- ", msg.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.5dbd30ddb81a6a6cd673.hot-update.js.map