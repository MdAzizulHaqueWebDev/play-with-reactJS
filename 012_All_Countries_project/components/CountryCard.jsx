import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
	const { name, flags, population, region, capital } = country;

	return (
		<Link
			to={`/${name.common}`}
			onClick={() => history.pushState({}, {}, `/${name.common}`)}
			className="country-card"
		>
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
		</Link>
	);
}
