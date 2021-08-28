import React from "react";
import styles from "./Home.module.css";
import homeImg from "../../images/homeImg.jpg";

const Home = () => {
	return (
		<div className={styles.home}>
			<h1>Home</h1>
			<img src={homeImg} alt="Perfume" />
		</div>
	);
};

export default Home;
