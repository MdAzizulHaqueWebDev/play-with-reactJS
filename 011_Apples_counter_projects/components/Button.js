export const Button = ({ arrow, clickHandler }) => {
	return (
		<button onClick={clickHandler}>
			<img src={arrow} alt="arrow btn" />
		</button>
	);
};
