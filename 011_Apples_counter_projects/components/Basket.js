export default function Basket({ basketName, apples, isFull, isEmpty }) {
	return (
		<div>
			<h3>
				<span>{apples}</span> Apples
			</h3>
			<p>
				{basketName} {isFull ? "Full" : isEmpty ? "Empty" : ""}
			</p>
		</div>
	);
}
