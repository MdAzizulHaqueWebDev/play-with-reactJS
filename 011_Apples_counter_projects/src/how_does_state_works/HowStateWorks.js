import { useState } from "react";

// internal mechanism
const states = [0, "Azizul Haque"];

export default function HowStateWorks() {
	const [stateVar, setFunction] = useState(0);
	const [name, setName] = useState("Azizul haque");
	return (
		<div style={{ border: "3px solid", padding: "30px", margin: "10px 0px" }}>
			<button
				onClick={() => {
					// 1st commented
					// setFunction(stateVar + 1); // hoyar kota 1
					// setFunction(stateVar + 2); // hoyar kota 3
					// setFunction(stateVar + 3); // hoyar kota 6
					// console.log(stateVar, "3 increased done"); // still "stateVar" er value 0 jar karone ekane setFunc er 0 + 3  pass hobe

					// 2nd commented
					// setFunction(1 + 1); // hoyar kota 1
					// setFunction(2 + 2); // hoyar kota 3
					// setFunction(3 + 3); // hoyar kota 6
					// console.log(stateVar); // still "stateVar" er value 0 jar but second render will be 6

					setFunction(stateVar + 1);
					setFunction(stateVar + 1); // not working what's we are expected below solution callback fn
					// callback function tricks
					// setFunction(console.log); // will show previous setted value
					setFunction((previousSetedValue) => {
						// ekane previous value hocce 18 no line e set kora 3 + 3
						return previousSetedValue + 1;
					});
					setFunction((previousSetedValue) => {
						// ekane previous value hocce 18 no line e set kora 3 + 3
						return previousSetedValue + 1;
					});
				}}
			>
				Increase {stateVar}
			</button>{" "}
			<span>{stateVar}</span>
			<span>{name}</span>
			<ol>
				<li>
					Amra jotoy kane state er value use korbo seta totokkon porjonto eki
					takbe jotokkon na ditiyo render hocce jmn: <br />
					<code>
						const [stateVar, setFunction] = useState(0)
						<br />
						`onClick= console.log(stateVar); setFunction(stateVar + 1);
						setFunction(stateVar + 1); <br /> console.log(stateVar); `
					</code>
				</li>
				<li>
					মূল বিষয় React এর state handling একটি internal array এর মাধ্যমে
					পরিচালিত হয়। প্রতিবার state update হলে, React সেই array থেকে বর্তমান
					value এর সাথে তুলনা করে এবং যদি value পরিবর্তিত হয়, তবে UI পুনরায়
					render হয়। এইভাবে React internal state array এবং update checking এর
					মাধ্যমে efficiently component এর state manage করে এবং UI তে পরিবর্তন
					ঘটায়।
				</li>
			</ol>
		</div>
	);
}
