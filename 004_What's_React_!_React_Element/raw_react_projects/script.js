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
