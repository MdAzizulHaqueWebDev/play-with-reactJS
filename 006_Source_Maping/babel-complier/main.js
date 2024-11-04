const div = (
	<div>
		<h2 style={{ textAlign: "center" }}></h2>
		<p>Source mapping make developer power to debugging pro</p>
	</div>
);

console.log(
	"I'm doing code in main.js but this file not executed in browser , hahaha",
);

ReactDOM.createRoot(document.querySelector("#root")).render(div);
