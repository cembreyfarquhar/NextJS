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
    className: "jsx-3271410476",
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
    id: "3271410476",
    __self: this
  }, "main.jsx-3271410476{background-color:#37474f;color:#7e8889;overflow-y:hidden;min-height:100vh;}section.jsx-3271410476{max-width:100%;width:100vw;overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHb0MsQUFNVixlQUNILFVBTkUsRUFRSSxZQVBBLE1BUUwsWUFQSSxpQkFDbkIsNkNBTzJCLGlHQUNaLDBFQUNTLDhFQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXGNlbWJyXFxPbmVEcml2ZVxcRGVza3RvcFxcTGFtYmRhXFxSYW5kb21cXFRvRG9vb29vXFxuZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgTWV0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZXRhXCI7XG5pbXBvcnQgQ2hhdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhdEZvcm1cIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGF0TGlzdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgLy8gY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtpbnB1dCwgaGFuZGxlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0VG9kb3MoKTtcbiAgLy8gfSk7XG5cbiAgY29uc3QgW2hlbGxvLCBzZXRIZWxsb10gPSB1c2VTdGF0ZShcInVoXCIpO1xuXG4gIC8vIEdldHMgaG9tZSBzY3JlZW4gbWVzc2FnZSBmcm9tIHNlcnZlciwgd2hpY2ggaXMgYmVpbmcgZGlzcGxheWVkIGFzIGFuIGgyXG4gIEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0OS9cIikudGhlbihyZXMgPT4ge1xuICAgIHNldEhlbGxvKHJlcy5kYXRhKTtcbiAgfSk7XG5cbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ5L21lc3NhZ2VzXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gcmVzLmRhdGE7XG4gICAgICBzZXRNZXNzYWdlcyhcbiAgICAgICAgbmV3TWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8TWV0YSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICAgICAgICAgIGNvbG9yOiAjN2U4ODg5O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgey8qIDxIZWFkZXIgLz4gKi99XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2hhdExpc3QgbWVzc2FnZXM9e21lc3NhZ2VzfSAvPlxuICAgICAgICAgIDxDaGF0Rm9ybSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-3271410476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3271410476",
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
//# sourceMappingURL=index.js.c563f64ad20a6cc31962.hot-update.js.map