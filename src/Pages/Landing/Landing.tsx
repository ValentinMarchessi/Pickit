import styles from './Landing.module.scss';
import collage from '../../Assets/images/default.jpg';
import { useInput, useSelect } from '../../Helpers/Hooks';

export default function Landing(): JSX.Element {
	const [name, setName] = useInput();
	const [flavor, setFlavor] = useSelect('chocolate');

	return (
		<div className={styles.body}>
			<div id={styles.intro}>
				<img id={styles.collage} src={collage} alt="collage"></img>
				<div id={styles.sideblock}>
					<h2>Welcome to</h2>
					<h1>Pickit</h1>
				</div>
			</div>
			<section>
				<input type="text" value={name} onChange={setName}></input>
				{name}
				<select value={flavor} onChange={setFlavor}>
					<option value="chocolate">Chocolate</option>
					<option value="vanilla">Vanilla</option>
					<option value="strawberry">Strawberry</option>
				</select>
				{flavor}
			</section>
		</div>
	);
}
