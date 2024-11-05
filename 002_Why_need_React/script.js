// basket Dom element
const basket1 = document.querySelector(".basket-1 span");
const basket2 = document.querySelector(".basket-2 span");

let totalApples = 5;
let basket2Apples = 0;
let basket1Apples = totalApples - basket2Apples;

basket1.textContent = basket1Apples;
basket2.textContent = basket2Apples;

// arrow dom element
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

rightArrow.addEventListener("click", function () {
	if (basket1Apples <= 0) return alert("Insufficient Apples");
	basket2Apples++;
	// update DOM element value
	basket2.textContent = basket2Apples;
	basket1Apples--;
	// update DOM element value
	basket1.textContent = basket1Apples;
	// document.querySelector("#counter1").innerText = basket1Apples;
});
leftArrow.addEventListener("click", function () {
	if (basket2Apples <= 0) return alert("Insufficient Apples");
	basket2Apples--;
	// update DOM element value
	basket2.textContent = basket2Apples;
	basket1Apples++;
	// update DOM element value
	basket1.textContent = basket1Apples;
});

// other dom element uses apples quantity
document.querySelector("#counter1").innerText = basket1Apples;
document.querySelector("#counter2").innerText = basket2Apples;
