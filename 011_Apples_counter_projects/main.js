// import React from 'react';
import ReactDOM from "react-dom/client";
import { AppleCounter } from "./components/AppleCounter";

export default function App() {
	return (
		<>
			<AppleCounter></AppleCounter>
		</>
	);
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
