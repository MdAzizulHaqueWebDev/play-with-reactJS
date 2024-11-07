import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function CountryDetails() {
	const { country } = useParams();
	const [countryData] = useLoaderData();
	const [borders, setBorders] = useState([]);
	console.log(countryData);
	useEffect(() => {
		if (countryData.borders.length) {
			Promise.all(
				countryData.borders.map(async (border) => {
					const res = await fetch(
						`https://restcountries.com/v3.1/alpha/${border}`,
					);
					const [data] = await res.json();
					return data;
				}),
			)
				.then((result) => {
					setBorders(result);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [countryData]);

	function themeToggler() {
		if (localStorage.getItem("theme") !== "dark") {
			document.querySelector("body").classList.toggle("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.querySelector("body").classList.toggle("dark");
			localStorage.setItem("theme", "light");
		}
	}
	return (
		<>
			<Header themeToggler={themeToggler} />
			<div>
				<button onClick={() => history.back()} className="back-btn">
					Back
				</button>
			</div>
			<section className="details-container">
				<img src={countryData.flags?.svg} alt="flag imag" />

				<div className="county-details">
					<h3>${countryData.name.common}</h3>
					<section className="county-details-info">
						<p>
							<b>Native Name :</b> $
							{Object.values(countryData.name?.nativeName)[0]?.official ??
								"Not available"}
						</p>
						<p>
							<b>Population :</b> ${countryData.population.toLocaleString("en")}
						</p>
						<p>
							<b>Region :</b> ${countryData.region}
						</p>
						<p>
							<b>Sub Region :</b> ${countryData?.subregion ?? "Not available"}
						</p>
						<p>
							<b>Capital :</b> ${countryData.capital}
						</p>
						<p>
							<b>Top Level Domain :</b> $
							{countryData?.tld.join(", ") ?? "Not available"}
						</p>
						<p>
							<b>Currencies :</b> $
							{Object.values(countryData.currencies)[0].name ?? "Not Available"}
						</p>
						<p>
							<b>Language :</b> $
							{Object.values(countryData.languages).join(", ") ??
								"Not available"}
						</p>
					</section>
					<section className="border-countries">
						<b>Border Countries:</b>{" "}
						{borders.map(({ name }) => (
							<Link to={`/${name.common}`} key={name.common}>
								{name.common}
							</Link>
						))}
					</section>
				</div>
			</section>
		</>
	);
}
