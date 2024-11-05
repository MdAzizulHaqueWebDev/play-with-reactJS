/// React Element vs Raw DOM Element

// ------- JS Element Creation -------
const h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.setAttribute("style", "color:lightblue; font-weight:bold");
h1.className = "bold italic text-400";
h1.classList.add("this-added-then");

// which DOM element will be append the created element
const root = document.querySelector("#js-dom");
root.appendChild(h1);

// ------- React Element Creation -------
const React = document;
const ReactDom = document;
const h2 = React.createElement(
	"h2",
	{
		className: "bold italic text-400",
		style: "color:lightblue; font-weight:bold",
	},
	"Hello World",
);

const h2ReturnValue = {
	$$typeof: Symbol.for("react.element"), // $$type props uses for securiry purpose and the value (Symbol()) its can't uses in JSON which uses API
	type: "h2",
	key: null,
	ref: null,
	props: {
		className: "bold italic text-400",
		style: "color:lightblue; font-weight:bold",
		children: "Hello World",
	},
	_owner: null,
	_store: {},
};

const reactDomroot = document.querySelector("#js-dom");
reactDomroot.render(h2);

// nesting element creation
const h2ReturnValueNesting = {
	$$typeof: Symbol.for("react.element"), // $$type props uses for securiry purpose and the value (Symbol()) its can't uses in JSON which uses API
	type: "h2",
	key: null,
	ref: null,
	props: {
		className: "bold italic text-400",
		style: "color:lightblue; font-weight:bold",
		children: {
			$$typeof: Symbol.for("react.element"),
			type: "p",
			key: null,
			ref: null,
			props: {
				style: "color:lightblue; font-weight:bold",
				children: "Nested Element",
			},
			_owner: null,
			_store: {},
		},
	},
	_owner: null,
	_store: {},
};

// ekane jodi sudu ekta child create korte hoi tahole sorasori ekta object pass kora jai kintu joid ekadik sibling chid pass korte hoi tahole array vitore dite hoi

const h2ReturnValueDoubleNesting = {
	$$typeof: Symbol.for("react.element"), // $$type props uses for securiry purpose and the value (Symbol()) its can't uses in JSON which uses API
	type: "h2",
	key: null,
	ref: null,
	props: {
		className: "bold italic text-400",
		style: "color:lightblue; font-weight:bold",
		children: [
			{
				$$typeof: Symbol.for("react.element"),
				type: "p",
				key: null,
				ref: null,
				props: {
					style: "color:lightblue; font-weight:bold",
					children: "Nested Element",
				},
				_owner: null,
				_store: {},
			},
			{
				$$typeof: Symbol.for("react.element"),
				type: "p",
				key: null,
				ref: null,
				props: {
					style: "color:lightblue; font-weight:bold",
					children: "Nested Element",
				},
				_owner: null,
				_store: {},
			},
		],
	},
	_owner: null,
	_store: {},
};
