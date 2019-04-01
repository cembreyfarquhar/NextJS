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
    className: "jsx-647526027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "647526027",
    __self: this
  }, "main.jsx-647526027{background-color:#142634;color:#7E8889;}section.jsx-647526027{max-width:100%;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}div.jsx-647526027{width:75vw;height:100vh;max-height:100%;border:2px solid red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHa0MsQUFJUixBQU1KLFdBQ0UsSUFORCxTQU9JLENBWEosRUFLQyxZQUpqQixDQVd5QixxQkFDUix3Q0FQZ0Isa0NBUU4seUZBUHpCLFVBUUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjZW1iclxcT25lRHJpdmVcXERlc2t0b3BcXExhbWJkYVxcUmFuZG9tXFxUb0Rvb29vb1xcbmV4dGpzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IENoYXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXRGb3JtXCI7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhdExpc3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbaW5wdXQsIGhhbmRsZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFRvZG9zKCk7XG4gIC8vIH0pO1xuXG4gIGNvbnN0IFtoZWxsbywgc2V0SGVsbG9dID0gdXNlU3RhdGUoXCJ1aFwiKTtcblxuICAvLyBHZXRzIGhvbWUgc2NyZWVuIG1lc3NhZ2UgZnJvbSBzZXJ2ZXIsIHdoaWNoIGlzIGJlaW5nIGRpc3BsYXllZCBhcyBhbiBoMlxuICBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDkvXCIpLnRoZW4ocmVzID0+IHtcbiAgICBzZXRIZWxsbyhyZXMuZGF0YSk7XG4gIH0pO1xuXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0OS9tZXNzYWdlc1wiKS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IHJlcy5kYXRhO1xuICAgICAgc2V0TWVzc2FnZXMoXG4gICAgICAgIG5ld01lc3NhZ2VzLm1hcChtZXNzYWdlID0+IHtcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXNzYWdlcygpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgbWFpbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI2MzQ7XG4gICAgICAgIGNvbG9yOiAjN0U4ODg5O1xuICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+e2hlbGxvfTwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENoYXRGb3JtIC8+XG4gICAgICAgICAgPENoYXRMaXN0IG1lc3NhZ2VzPXttZXNzYWdlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-647526027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-647526027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, hello), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-647526027",
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
//# sourceMappingURL=index.js.0e92b5e5894f9c4c3dfc.hot-update.js.map