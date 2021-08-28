import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.nav}>
				<h2>Home</h2>
				<h2>Products</h2>
				<h2>About</h2>
			</div>
			<div className={styles.title}>
				<h1>P. Fragrance</h1>
			</div>
		</div>
	);
};

export default NavBar;
