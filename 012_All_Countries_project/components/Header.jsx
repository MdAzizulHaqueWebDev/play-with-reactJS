const Header = ({ themeToggler }) => {
	return (
		<>
			<header className="header-container">
				<section className="header-content">
					<h3>
						<a href="/">World Countries List</a>
					</h3>
					<div onClick={themeToggler} className="theme-toggler">
						<i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
					</div>
				</section>
			</header>
		</>
	);
};

export default Header;
