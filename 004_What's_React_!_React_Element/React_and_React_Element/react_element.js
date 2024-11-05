/**
 * React Element just an object which includes some properties
 */
// const h2 = React.createElement("h2", null, "hello world");

// const h2ReturnValue = {
// 	$$typeof: Symbol.for("react.element"),
// 	type: "h2",
// 	key: null,
// 	ref: null,
// 	props: {
// 		children: ["hello world"],
// 	},
// 	_owner: null,
// 	_store: {},
// };

// console.log(h2);

// console.log(h2ReturnValue);

// ReactDOM.createRoot(document.querySelector("#root")).render(h2ReturnValue);

// ------------------ custom react element create by me
// const contents = [
// 	{
// 		$$typeof: Symbol.for("react.element"),
// 		type: "h2",
// 		key: 1,
// 		ref: null,
// 		props: {
// 			children: [
// 				"hello world",
// 				{
// 					$$typeof: Symbol.for("react.element"),
// 					type: "b",
// 					key: 2,
// 					ref: null,
// 					props: {
// 						children: " With ReactJS",
// 					},
// 					_owner: null,
// 					_store: {},
// 				},
// 			],
// 		},
// 		_owner: null,
// 		_store: {},
// 	},
// 	{
// 		$$typeof: Symbol.for("react.element"),
// 		type: "img",
// 		key: 2,
// 		ref: null,
// 		props: {
// 			src: "../../Images/hooks.PNG",
// 			alt: "something went wrong",
// 			width: 200,
// 		},
// 		_owner: null,
// 		_store: {},
// 	},
// ];

// ReactDOM.createRoot(document.querySelector("#root")).render(contents);

// ------------   simple project uses react elements

const h1 = React.createElement(
	"h3",
	{ key: 1, style: { textAlign: "center" } },
	"React Uses for create web and native User Interface",
);
const img = React.createElement("img", {
	key: 2,
	src: "../../Images/hooks.PNG",
	alt: "something went wrong",
	style: {
		maxWidth: 500,
		width: "100%",
	},
});
const div = React.createElement(
	"div",
	{ key: 213, style: { textAlign: "center" } },
	[
		React.createElement(
			"b",
			{ key: 142, style: { textAlign: "center" } },
			"React Uses for create web and native User Interface",
		),
		React.createElement(
			"i",
			{ key: 223, style: { textAlign: "center" } },
			" React Uses for create web and native User Interface",
		),
	],
);

const reactElements = [h1, img, div];
console.log(reactElements); // etay hocche React VDOM

ReactDOM.createRoot(document.querySelector("#root")).render(reactElements);

// more complex React DOM

const productCard = React.createElement(
	"section",
	{
		key: 13,
		className: "product-card",
		style: {
			border: "2px solid red",
			borderRadius: "30px",
			padding: "20px",
		},
	},
	[
		React.createElement("img", {
			key: 1,
			src: "../../Images/hooks.PNG",
			style: {
				maxWidth: 200,
				width: "100%",
				borderRadius: "30px",
			},
		}),
		React.createElement("h5", { key: 2 }, "This is a Hooks"),
		React.createElement("h5", { key: 3 }, [
			"Price",
			React.createElement("span", { key: 1 }, ": $89"),
		]),
		React.createElement("button", { key: 4 }, "Buy Now"),
	],
);
const productsCardContainer = [
	React.createElement(
		"h3",
		{ key: 12, style: { textAlign: "center" } },
		"Product Card Container",
	),
	React.createElement(
		"div",
		{ key: 15, style: { display: "flex", alignItems: "center", gap: "10px" } },

		[productCard, productCard, productCard],
	),
];
// React DOM and Raw Browser DOM
console.log(productsCardContainer[1]);
console.dir(document);

ReactDOM.createRoot(document.querySelector("#product-card")).render([
	React.createElement(
		"h3",
		{ key: 12, style: { textAlign: "center" } },
		"Product Card Container",
	),
	React.createElement(
		"div",
		{
			key: 15,
			style: {
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				gap: "10px",
			},
		},

		[productCard, productCard, productCard, productCard, productCard],
	),
]);
