function ProductCard({ key, chihlKey, img, title, price }) {
	return React.createElement(
		"div",
		{
			key: key,
			style: { border: "3px solid", padding: "30px", borderRadius: "30px" },
		},
		[
			React.createElement("img", {
				key: chihlKey,
				src: img,
				style: { width: "100%", maxWidth: "200px" },
			}),
			React.createElement("p", { key: chihlKey }, ["name :", title]),
			React.createElement("p", { key: chihlKey }, [
				"price: ",
				price,
				" ",
				React.createElement("button", { style: { padding: "10px" } }, "Buy"),
			]),
		],
	);
}
const productCardCollection = [
	ProductCard({
		key: "1",
		img: "../Images/hooks.PNG",
		title: "Hooks",
		price: "300$",
		chihlKey: "1",
	}),
	ProductCard({
		key: "2",
		img: "../Images/error boundaries.png",
		title: "error boundaries",
		price: "300$",
		chihlKey: "2",
	}),
	ProductCard({
		key: "3",
		img: "../Images/useRefs.PNG",
		title: "use Refs in JS",
		price: "300$",
		chihlKey: "3",
	}),
	ProductCard({
		key: "4",
		img: "../Images/hooks.PNG",
		title: "Hooks",
		price: "300$",
		chihlKey: "4",
	}),
];

// we can use [](Array) for render multiple element or commas (,) uses to separate
// ReactDOM.createRoot(document.querySelector("#root")).render(
// 	React.createElement(
// 		"div",
// 		{ style: { display: "flex", gap: "20px" } },
// 		productCardCollection,
// 	),
// );
// comma , uses for render multiple elements
ReactDOM.createRoot(document.querySelector("#root")).render(
	React.createElement(
		"div",
		{ style: { display: "flex", gap: "20px" } },
		ProductCard({
			key: "1",
			img: "../Images/hooks.PNG",
			title: "Hooks",
			price: "300$",
			chihlKey: "1",
		}),
		ProductCard({
			key: "2",
			img: "../Images/error boundaries.png",
			title: "error boundaries",
			price: "300$",
			chihlKey: "2",
		}),
		ProductCard({
			key: "3",
			img: "../Images/useRefs.PNG",
			title: "use Refs in JS",
			price: "300$",
			chihlKey: "3",
		}),
		ProductCard({
			key: "4",
			img: "../Images/hooks.PNG",
			title: "Hooks",
			price: "300$",
			chihlKey: "4",
		}),
	),
);

console.log(
	React.createElement(
		"div",
		{ style: { display: "flex", gap: "20px" } },
		"child 1",
		"child 2",
		"child 3",
		"child 4",
		["1", 2, 3],
	),
);
