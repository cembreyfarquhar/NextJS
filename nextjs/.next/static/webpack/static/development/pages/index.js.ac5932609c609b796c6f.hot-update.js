webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/chatForm.js":
/*!********************************!*\
  !*** ./components/chatForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatForm.js";





var ChatForm = function ChatForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      text = _useState2[0],
      setMsgInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      author = _useState4[0],
      setAuthor = _useState4[1];

  var addMessage = function addMessage(event) {
    event.preventDefault();
    var message = {
      author: author,
      text: text
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:8549/messages", message).then(function (res) {
      console.log("ADD MESSAGE ", res);
    }).catch(function (err) {
      return console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3340099085",
    __self: this
  }, ".jsx-3340099085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUUwQiwwRUFDRixXQUNXLDhFQUNDLDZHQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNlbWJyXFxPbmVEcml2ZVxcRGVza3RvcFxcTGFtYmRhXFxSYW5kb21cXFRvRG9vb29vXFxuZXh0anNcXGNvbXBvbmVudHNcXGNoYXRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2hhdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldE1zZ0lucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYWRkTWVzc2FnZSA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBtZXNzYWdlID0geyBhdXRob3IsIHRleHQgfTtcclxuICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDkvbWVzc2FnZXNcIiwgbWVzc2FnZSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFERCBNRVNTQUdFIFwiLCByZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxoMj5TZW5kIGEgbWVzc2FnZTwvaDI+XHJcbiAgICAgIDxsYWJlbD5BdXRob3I6IDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRBdXRob3IoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TXNnSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17YWRkTWVzc2FnZX0+U2VuZCBNZXNzYWdlPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatForm.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Send a message"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Author: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(event) {
      return setAuthor(event.target.value);
    },
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(event) {
      return setMsgInput(event.target.value);
    },
    value: text,
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: addMessage,
    className: "jsx-3340099085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Send Message"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatForm);

/***/ })

})
//# sourceMappingURL=index.js.ac5932609c609b796c6f.hot-update.js.map