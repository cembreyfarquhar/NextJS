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
    setMsgInput("");
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:8549/messages", message).then(function (res) {
      console.log("ADD MESSAGE ", res);
    }).catch(function (err) {
      return console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2087638155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2087638155",
    __self: this
  }, "div.jsx-2087638155{width:100%;position:absolute;}form.jsx-2087638155{width:100%;}input.jsx-2087638155{width:100%;height:10vh;position:-webkit-sticky;position:sticky;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xcY29tcG9uZW50c1xcY2hhdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JrQixBQUdzQixBQUlBLEFBR0EsV0FOTyxBQUlwQixBQUdjLFlBQ0ksTUFQbEIsa0NBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxjZW1iclxcT25lRHJpdmVcXERlc2t0b3BcXExhbWJkYVxcUmFuZG9tXFxUb0Rvb29vb1xcbmV4dGpzXFxjb21wb25lbnRzXFxjaGF0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IENoYXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRNc2dJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IHsgYXV0aG9yLCB0ZXh0IH07XHJcbiAgICBzZXRNc2dJbnB1dChcIlwiKTtcclxuICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDkvbWVzc2FnZXNcIiwgbWVzc2FnZSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFERCBNRVNTQUdFIFwiLCByZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkTWVzc2FnZX0+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TXNnSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Rm9ybTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\components\\chatForm.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: addMessage,
    className: "jsx-2087638155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2087638155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(event) {
      return setMsgInput(event.target.value);
    },
    value: text,
    className: "jsx-2087638155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2087638155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatForm);

/***/ })

})
//# sourceMappingURL=index.js.5130c91f15f3b13d240d.hot-update.js.map