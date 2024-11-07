import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import CountryDetails from "../components/CountryDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/:country",
		loader: async ({ params }) => {
			const res = await fetch(
				`https://restcountries.com/v3.1/name/${params.country}?fullText=true`,
			);
			return res.json();
		},
		element: <CountryDetails />,
	},
]);

export default router;
