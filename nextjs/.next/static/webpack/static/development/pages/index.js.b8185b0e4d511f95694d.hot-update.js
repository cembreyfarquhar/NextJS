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
/* harmony import */ var _components_chatForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chatForm */ "./components/chatForm.js");
/* harmony import */ var _components_chatList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chatList */ "./components/chatList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

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


  axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:8549/").then(function (res) {
    setHello(res.data);
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      messages = _useState4[0],
      setMessages = _useState4[1];

  var getMessages = function getMessages() {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:8549/messages").then(function (res) {
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
    className: "jsx-2004815041",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2004815041",
    __self: this
  }, "main.jsx-2004815041{background-color:#142634;color:#7E8889;overflow-y:hidden;}section.jsx-2004815041{max-width:100%;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}div.jsx-2004815041{width:75vw;height:100vh;border:2px solid red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHa0MsQUFLUixBQU1KLFdBQ0UsSUFORCxTQU9TLENBWlQsRUFNQyxZQUxHLE1BWUgsWUFYakIsNENBS2lDLGtCQU9OLG1HQUN6QixNQVBBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBDaGF0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGF0Rm9ybVwiO1xuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXRMaXN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAvLyBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW2lucHV0LCBoYW5kbGVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRUb2RvcygpO1xuICAvLyB9KTtcblxuICBjb25zdCBbaGVsbG8sIHNldEhlbGxvXSA9IHVzZVN0YXRlKFwidWhcIik7XG5cbiAgLy8gR2V0cyBob21lIHNjcmVlbiBtZXNzYWdlIGZyb20gc2VydmVyLCB3aGljaCBpcyBiZWluZyBkaXNwbGF5ZWQgYXMgYW4gaDJcbiAgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ5L1wiKS50aGVuKHJlcyA9PiB7XG4gICAgc2V0SGVsbG8ocmVzLmRhdGEpO1xuICB9KTtcblxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9ICgpID0+IHtcbiAgICBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDkvbWVzc2FnZXNcIikudGhlbihyZXMgPT4ge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSByZXMuZGF0YTtcbiAgICAgIHNldE1lc3NhZ2VzKFxuICAgICAgICBuZXdNZXNzYWdlcy5tYXAobWVzc2FnZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TWVzc2FnZXMoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG1haW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNjM0O1xuICAgICAgICBjb2xvcjogIzdFODg4OTtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPntoZWxsb308L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDaGF0Rm9ybSAvPlxuICAgICAgICAgIDxDaGF0TGlzdCBtZXNzYWdlcz17bWVzc2FnZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-2004815041",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-2004815041",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, hello), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2004815041",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_chatForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_chatList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    messages: messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b8185b0e4d511f95694d.hot-update.js.map