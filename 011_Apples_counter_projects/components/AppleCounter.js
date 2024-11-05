import Basket from "./Basket";
import "./AppleCounter.css";
import { Button } from "./Button";
import LeftArrow from "../images/left-arrow.png";
import RightArrow from "../images/right-arrow.png";
import { useState } from "react";
export const AppleCounter = () => {
	const totalApples = 10;
	const [basket2Apples, setBasket2Apples] = useState(0);
	const [basket1Apples, setBasket1Apples] = useState(
		totalApples - basket2Apples,
	);
	function leftButton() {
		if (basket2Apples <= 0) return alert("insufficient");
		setBasket1Apples(basket1Apples + 1);
		setBasket2Apples(basket2Apples - 1);
	}
	function rightButton(params) {
		if (basket1Apples <= 0) return alert("not sufficient");
		setBasket1Apples(basket1Apples - 1);
		setBasket2Apples(basket2Apples + 1);
	}

	return (
		<div className="apple-counter">
			<Basket
				isFull={totalApples === basket1Apples}
				isEmpty={basket1Apples === 0}
				basketName="Basket 1"
				apples={basket1Apples}
			/>
			<Button clickHandler={leftButton} arrow={LeftArrow} />
			<Button
				clickHandler={rightButton}
				setBasket2Apples={setBasket2Apples}
				basket2Apples={basket2Apples}
				arrow={RightArrow}
			/>
			<Basket
				isFull={totalApples === basket2Apples}
				isEmpty={basket2Apples === 0}
				basketName="Basket 2"
				apples={basket2Apples}
			/>
		</div>
	);
};
