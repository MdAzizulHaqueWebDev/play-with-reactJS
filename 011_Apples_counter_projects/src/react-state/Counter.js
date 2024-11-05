import { useState } from "react";

export default function Counter() {
	let [count, setCount] = useState(0);
	// console.log(setCount);
	return (
		<div style={{ border: "3px solid", padding: "30px" }}>
			<h3 className="h3">{count}</h3>
			<button onClick={() => setCount(count + 1)}>
				Increase value {count}
			</button>
		</div>
	);
}
