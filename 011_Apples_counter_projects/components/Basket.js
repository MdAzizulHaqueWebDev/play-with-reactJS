export default function Basket({ basketName, apples }) {
	return (
		<div>
			<h3>
				<span>{apples}</span> Apples
			</h3>
			<p>{basketName}</p>
		</div>
	);
}
