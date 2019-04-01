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
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2087558186",
    __self: this
  }, ".jsx-2087558186{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUUwQiwwRUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjZW1iclxcT25lRHJpdmVcXERlc2t0b3BcXExhbWJkYVxcUmFuZG9tXFxUb0Rvb29vb1xcbmV4dGpzXFxjb21wb25lbnRzXFxjaGF0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IENoYXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRNc2dJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IHsgYXV0aG9yLCB0ZXh0IH07XHJcbiAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ5L21lc3NhZ2VzXCIsIG1lc3NhZ2UpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBREQgTUVTU0FHRSBcIiwgcmVzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPGgyPlNlbmQgYSBtZXNzYWdlPC9oMj5cclxuICAgICAgPGxhYmVsPkF1dGhvcjogPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEF1dGhvcihldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRNc2dJbnB1dChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRNZXNzYWdlfT5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEZvcm07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatForm.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Send a message"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Author: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(event) {
      return setAuthor(event.target.value);
    },
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(event) {
      return setMsgInput(event.target.value);
    },
    value: text,
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: addMessage,
    className: "jsx-2087558186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Send Message"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatForm);

/***/ })

})
//# sourceMappingURL=index.js.58d76a13de2b7a98964c.hot-update.js.map