// axios.get("../../JSON_Data/users.json")
// .then((data) => console.log(data.data));

import axios from "axios";
import Spinner from "react-spinner";
axios
	.get("../../JSON_Data/users.json")
	.then((data) => console.log(data.data)); /**
Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../". */

// console.log(Spinner);
/**
Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../". */
