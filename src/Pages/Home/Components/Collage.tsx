import styles from "./Collage.module.scss";
import balloon from "../../../Assets/images/balloon.jpg";
import React from "react";

export default function Collage() {

	function infiniteScroll(event: React.UIEvent<HTMLDivElement>) {
		const container = event.currentTarget;
		const images = container.children;
		for (var i = 0; i <= 2; i++) {
			const { y } = images[i].getBoundingClientRect();
			if (y < 0) {
				container.append(images[i]);
			}
		}
	}

	return (
		<div id={styles.collage} onScroll={infiniteScroll}>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
			<img src={balloon} alt="collagePic"></img>
		</div>
	);
}
