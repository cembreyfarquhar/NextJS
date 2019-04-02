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
    className: "jsx-2647845894",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2647845894",
    __self: this
  }, "div.jsx-2647845894{height:70vh;}ul.jsx-2647845894{height:70vh;width:90%;overflow-y:scroll;overflow-x:hidden;text-align:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-2647845894{font-size:1.6rem;list-style:none;margin:15px;}.user.jsx-2647845894{border:1px solid orange;border-radius:15px;padding:12px;color:orange;text-align:right;}.other.jsx-2647845894{color:lightblue;border:1px solid lightblue;border-radius:15px;padding:12px;text-align:left;}p.jsx-2647845894{text-align:left;color:white;font-size:1rem;}.collection.jsx-2647845894{margin:2px;border-top:none;border-bottom:none;border-radius:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUd5QixBQUdBLEFBU0ssQUFLTyxBQU9SLEFBT0EsQUFLTCxXQUNLLENBcENsQixBQUdZLElBcUJpQixBQU9mLENBbkJJLEtBUkUsRUFhQyxHQW9CQSxDQUxKLEtBbkJILE9BUk0sR0FhTCxBQU9NLEFBUXJCLEVBbkJBLENBeUJELFVBcEJnQixFQWJJLElBb0JKLEFBYWYsT0FuQm1CLE1BYkosQUFvQkcsV0FObEIsS0FPQSwwREFwQndCLDhFQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXGNlbWJyXFxPbmVEcml2ZVxcRGVza3RvcFxcTGFtYmRhXFxSYW5kb21cXFRvRG9vb29vXFxuZXh0anNcXGNvbXBvbmVudHNcXGNoYXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2hhdExpc3QgPSAoeyBtZXNzYWdlcyB9KSA9PiB7XHJcbiAgbGV0IHByZXZNc2cgPSB7fTtcclxuXHJcbiAgY29uc3QgZ2V0TWVzc2FnZUNsYXNzTmFtZSA9IChtc2csIHByZXZNc2cpID0+IHtcclxuICAgIGlmIChtc2cuYXV0aG9yID09PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpKSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyhtc2cuZGF0ZVRpbWUgLSBwcmV2TXNnLmRhdGVUaW1lKSA8IDUwMDApIHtcclxuICAgICAgICByZXR1cm4gXCJ1c2VyIGNvbGxlY3Rpb25cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJ1c2VyXCI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIm90aGVyXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm90aGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGluZGV4LCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgcHJldk1zZyA9IGFycmF5W2luZGV4IC0gMV07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtnZXRNZXNzYWdlQ2xhc3NOYW1lKG1zZywgcHJldk1zZyl9PlxyXG4gICAgICAgICAgICAgIHttc2cuZGF0ZVRpbWV9IDp7bXNnLmF1dGhvcn0tIHttc2cudGV4dH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatList.js */"), messages.map(function (msg, index, array) {
    prevMsg = array[index - 1];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2647845894" + " " + (getMessageClassName(msg, prevMsg) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, msg.dateTime, " :", msg.author, "- ", msg.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ })

})
//# sourceMappingURL=chatScreen.js.208c3eee0cd271dfcfa8.hot-update.js.map