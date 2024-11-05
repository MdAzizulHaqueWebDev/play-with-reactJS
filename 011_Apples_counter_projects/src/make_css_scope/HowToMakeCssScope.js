import React from "react";
import moduleStyles from "./css.module.css";
import scope2 from "./scope.module.css";
export default function HowToMakeCssScope() {
	console.log(moduleStyles, scope2);
	return (
		<div>
			<h3 className={moduleStyles.h3}>This is applied unique styles </h3>
			<h4 className={scope2.h4}>This is applied unique styles </h4>
		</div>
	);
}
