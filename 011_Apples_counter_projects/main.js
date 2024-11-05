// import React from 'react';
import ReactDOM from "react-dom/client";
import { AppleCounter } from "./components/AppleCounter";
import Counter from "./src/react-state/Counter";
import HowStateWorks from "./src/how_does_state_works/HowStateWorks";

export default function App() {
	return (
		<>
			<HowStateWorks />
			<Counter />
			<AppleCounter></AppleCounter>
		</>
	);
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
