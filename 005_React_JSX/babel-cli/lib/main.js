const div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  style: {
    textAlign: "center"
  }
}), /*#__PURE__*/React.createElement("p", null, "This is JSX like HTML "));
console.log("I'm doing code in main.js but the not executed in browser , hahaha");
ReactDOM.createRoot(document.querySelector("#root")).render(div);