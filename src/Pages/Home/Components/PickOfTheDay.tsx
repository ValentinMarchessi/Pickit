import styles from './PickOfTheDay.module.scss';
import balloon from "../../../Assets/images/balloon.jpg";

export default function PickOfTheDay() {
    return (
		<div id={styles.potd}>
			<h1>Pick of the day</h1>
			<img src={balloon} alt="POTD"></img>
		</div>
	);
}