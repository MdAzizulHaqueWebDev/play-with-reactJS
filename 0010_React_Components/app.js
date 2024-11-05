import React from "react";
import ReactDOM from "react-dom/client";

function User(props) {
	console.log(props.name);
	console.log(props.children);
	return <h2>{props.name}</h2>;
}

const reactComponent = React.createElement(
	User,
	{ name: "sumon" },
	"chid1",
	"child2",
);
const jsxComponent = (
	<User name="monsur">
		{"chidl1"}
		{"child2"}
	</User>
);

const moreSimple = <User name="monsur" />; // but we can pass childs

const reactElement = React.createElement(
	"p",
	{ key: 1 },
	"This is a paragraph",
);
const reactJsxElement = <p key={1}>This is a paragraph</p>;

const container = [
	reactElement,
	reactComponent,
	jsxComponent,
	reactJsxElement,
	moreSimple,
];
ReactDOM.createRoot(document.querySelector("#root")).render(container);
