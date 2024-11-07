import { createRoot } from "react-dom/client";
import Header from "./components/Header";

import "./app.css";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
if (!localStorage.getItem("theme")) {
	localStorage.setItem("theme", "light");
} else {
	document.querySelector("body").classList.add(localStorage.getItem("theme"));
}

export default function App() {
	function themeToggler() {
		if (localStorage.getItem("theme") !== "dark") {
			document.querySelector("body").classList.toggle("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.querySelector("body").classList.toggle("dark");
			localStorage.setItem("theme", "light");
		}
	}
	return (
		<>
			<Header themeToggler={themeToggler} />
			<Countries />
			<Footer />
		</>
	);
}

createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
