import { useState } from "react";

export default function Counter() {
	let [count, setCount] = useState(0);
	console.log(setCount);
	return (
		<>
			<h3>{count}</h3>
			<button onClick={() => setCount(count + 1)}>
				Increase value {count}
			</button>
		</>
	);
}
