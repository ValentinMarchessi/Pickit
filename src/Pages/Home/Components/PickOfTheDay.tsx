import styles from './PickOfTheDay.module.scss';
import balloon from "../../../Assets/images/balloon.jpg";
import { Picture } from '../../../Components';

export default function PickOfTheDay() {
    return (
		<div id={styles.potd}>
			<h1>Pick of the day</h1>
			<Picture src={balloon} title="Balloon"/>
		</div>
	);
}