const div = (
	<div>
		<h2 style={{ textAlign: "center" }}></h2>
		<p>This is JSX like HTML </p>
	</div>
);

console.log(
	"I'm doing code in main.js but the not executed in browser , hahaha",
);

ReactDOM.createRoot(document.querySelector("#root")).render(div);
