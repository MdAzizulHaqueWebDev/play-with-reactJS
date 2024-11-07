export default function CountryCard({ country }) {
	// console.log(country);
	const { name, flags, population, region, capital } = country;
	return (
		<a href="#" className="country-card">
			<img src={flags?.svg ?? flags.png} alt={name?.common} />
			<div className="country-desc">
				<h3>{name?.common}</h3>
				<p>
					<b>Population :</b> {population.toLocaleString("en-bd")}
				</p>
				<p>
					<b>Region :</b> {region ?? "Not available"}
				</p>
				<p>
					<b>Capital :</b> {capital ?? "Not available"}
				</p>
			</div>
		</a>
	);
}
