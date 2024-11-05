// import React from 'react';
import ReactDOM from "react-dom/client";
import { AppleCounter } from "./components/AppleCounter";
import Counter from "./src/react-state/Counter";

export default function App() {
	return (
		<>
			<Counter />
			<AppleCounter></AppleCounter>
		</>
	);
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
