webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _components_chatForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chatForm */ "./components/chatForm.js");
/* harmony import */ var _components_chatList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/chatList */ "./components/chatList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\pages\\index.js";









var Index = function Index() {
  // const [todos, setTodos] = useState([]);
  // const [input, handleInput] = useState("");
  // useEffect(() => {
  //   getTodos();
  // });
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("uh"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hello = _useState2[0],
      setHello = _useState2[1]; // Gets home screen message from server, which is being displayed as an h2


  axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://localhost:8549/").then(function (res) {
    setHello(res.data);
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      messages = _useState4[0],
      setMessages = _useState4[1];

  var getMessages = function getMessages() {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://localhost:8549/messages").then(function (res) {
      var newMessages = res.data;
      setMessages(newMessages.map(function (message) {
        return message;
      }));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getMessages();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    className: "jsx-2633699177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2633699177",
    __self: this
  }, "main.jsx-2633699177{background-color:#142634;color:#7e8889;overflow-y:hidden;min-height:100vh;}section.jsx-2633699177{max-width:100%;width:100vw;height:100vh;overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHb0MsQUFNVixlQUNILFVBTkUsRUFPRCxZQU5LLENBT0EsaUJBTkQsQ0FPSixnQkFOZiwwREFPeUIsbUdBQ1YsMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBNZXRhIGZyb20gXCIuLi9jb21wb25lbnRzL21ldGFcIjtcbmltcG9ydCBDaGF0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGF0Rm9ybVwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXRMaXN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAvLyBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW2lucHV0LCBoYW5kbGVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRUb2RvcygpO1xuICAvLyB9KTtcblxuICBjb25zdCBbaGVsbG8sIHNldEhlbGxvXSA9IHVzZVN0YXRlKFwidWhcIik7XG5cbiAgLy8gR2V0cyBob21lIHNjcmVlbiBtZXNzYWdlIGZyb20gc2VydmVyLCB3aGljaCBpcyBiZWluZyBkaXNwbGF5ZWQgYXMgYW4gaDJcbiAgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ5L1wiKS50aGVuKHJlcyA9PiB7XG4gICAgc2V0SGVsbG8ocmVzLmRhdGEpO1xuICB9KTtcblxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9ICgpID0+IHtcbiAgICBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDkvbWVzc2FnZXNcIikudGhlbihyZXMgPT4ge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSByZXMuZGF0YTtcbiAgICAgIHNldE1lc3NhZ2VzKFxuICAgICAgICBuZXdNZXNzYWdlcy5tYXAobWVzc2FnZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TWVzc2FnZXMoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI2MzQ7XG4gICAgICAgICAgY29sb3I6ICM3ZTg4ODk7XG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDaGF0TGlzdCBtZXNzYWdlcz17bWVzc2FnZXN9IC8+XG4gICAgICAgICAgPENoYXRGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-2633699177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2633699177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_chatList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    messages: messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_chatForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.166181a6f3e4ce05d609.hot-update.js.map