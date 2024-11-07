import { useEffect, useState } from "react";
// import countries from "../data/countries.js";
import CountryCard from "./CountryCard.jsx";
import Loader from "./Loader.jsx";
export default function Countries() {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	const [selectValue, setSelect] = useState("");

	// technique but not for everything
	// if (countries.length === 0) {
	// fetch("https://restcountries.com/v3.1/all")
	// 	.then((res) => {
	// 		return res.json();
	// 	})
	// 	.then((data) => {
	// 		setCountries(data);
	// 	})
	// 	.catch((err) => {});
	// }
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCountries(data);
			})
			.catch((err) => {});
	}, []);
	if (!countries.length) return <Loader />;
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
