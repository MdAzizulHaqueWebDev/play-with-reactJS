(() => {
  // main.jsx
  var div = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Wow esbuild jsx compiler works correctly"));
  console.log(div);
  ReactDOM.createRoot(document.querySelector("#root")).render(div);
})();
