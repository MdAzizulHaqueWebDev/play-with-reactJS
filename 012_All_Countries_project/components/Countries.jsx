import { useState } from "react";
import countries from "../data/countries.js";
import CountryCard from "./CountryCard.jsx";
export default function Countries() {
	const [search, setSearch] = useState("");
	const [selectValue, setSelect] = useState("");
	console.log(
		countries.filter((country) =>
			country.region.toLowerCase().includes(selectValue.toLowerCase()),
		).length,
	);
	return (
		<>
			<div className="query-container">
				<div className="search-container">
					<i className="fa-solid fa-magnifying-glass"></i>
					<input
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search for a country..."
					/>
				</div>
				<select
					onChange={(e) => {
						setSelect(e.target.value);
					}}
					className="filter-by-region"
				>
					<option hidden>Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
			<section className="countries-container">
				{/* // .slice(0, 10) */}
				{countries
					.filter((country) =>
						country.name.common.toLowerCase().includes(search.toLowerCase()),
					)
					.filter((country) =>
						country.region.toLowerCase().includes(selectValue.toLowerCase()),
					)
					.map((country, inx) => (
						<CountryCard key={inx} country={country} />
					))}
			</section>
		</>
	);
}
