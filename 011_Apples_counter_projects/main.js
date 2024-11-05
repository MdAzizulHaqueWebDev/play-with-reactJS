// import React from 'react';
import ReactDOM from "react-dom/client";
import { AppleCounter } from "./components/AppleCounter";
import Counter from "./src/react-state/Counter";
import HowStateWorks from "./src/how_does_state_works/HowStateWorks";
import ChildrenProps from "./src/children_prop/ChildrenProps";

export default function App() {
	return (
		<>
			<ChildrenProps>
				<h1>This children of ChildrenProps component</h1>
			</ChildrenProps>
			<HowStateWorks />
			<Counter />
			<AppleCounter></AppleCounter>
		</>
	);
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
