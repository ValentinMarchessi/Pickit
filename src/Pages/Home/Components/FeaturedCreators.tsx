import styles from './FeaturedCreators.module.scss';
import photographer from "../../../Assets/images/photographer.jpg";

export default function FeaturedCreators() {
    return (
		<div id={styles.creators}>
			<h1>Featured Creators</h1>
			<div className={styles.container}>
				<img src={photographer} alt="photographer"></img>
				<img src={photographer} alt="photographer"></img>
				<img src={photographer} alt="photographer"></img>
				<img src={photographer} alt="photographer"></img>
				<img src={photographer} alt="photographer"></img>
				<img src={photographer} alt="photographer"></img>
			</div>
		</div>
	);
}