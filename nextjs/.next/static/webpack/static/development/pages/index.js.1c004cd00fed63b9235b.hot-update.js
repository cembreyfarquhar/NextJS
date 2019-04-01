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
    className: "jsx-2885481317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2885481317",
    __self: this
  }, "main.jsx-2885481317{color:#7E8889;}section.jsx-2885481317{max-width:100%;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}div.jsx-2885481317{width:75vw;height:85vh;border:2px solid red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxEZXNrdG9wXFxMYW1iZGFcXFJhbmRvbVxcVG9Eb29vb29cXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFNdUIsQUFHRyxBQU1KLFdBQ0MsR0FUaEIsQ0FHZ0IsUUFPUyxJQU5SLGlCQU9BLHlEQU5nQixpQkFPTixtR0FDekIsT0FQQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNlbWJyXFxPbmVEcml2ZVxcRGVza3RvcFxcTGFtYmRhXFxSYW5kb21cXFRvRG9vb29vXFxuZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgQ2hhdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhdEZvcm1cIjtcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGF0TGlzdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgLy8gY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtpbnB1dCwgaGFuZGxlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0VG9kb3MoKTtcbiAgLy8gfSk7XG5cbiAgY29uc3QgW2hlbGxvLCBzZXRIZWxsb10gPSB1c2VTdGF0ZShcInVoXCIpO1xuXG4gIC8vIEdldHMgaG9tZSBzY3JlZW4gbWVzc2FnZSBmcm9tIHNlcnZlciwgd2hpY2ggaXMgYmVpbmcgZGlzcGxheWVkIGFzIGFuIGgyXG4gIEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0OS9cIikudGhlbihyZXMgPT4ge1xuICAgIHNldEhlbGxvKHJlcy5kYXRhKTtcbiAgfSk7XG5cbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ5L21lc3NhZ2VzXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gcmVzLmRhdGE7XG4gICAgICBzZXRNZXNzYWdlcyhcbiAgICAgICAgbmV3TWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBtYWluIHtcbiAgICAgICAgY29sb3I6ICM3RTg4ODk7XG4gICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICAgIGhlaWdodDogODV2aDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj57aGVsbG99PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2hhdEZvcm0gLz5cbiAgICAgICAgICA8Q2hhdExpc3QgbWVzc2FnZXM9e21lc3NhZ2VzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\Desktop\\Lambda\\Random\\ToDooooo\\nextjs\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-2885481317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-2885481317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, hello), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2885481317",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_chatForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_chatList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    messages: messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1c004cd00fed63b9235b.hot-update.js.map