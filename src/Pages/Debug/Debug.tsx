import styles from './Debug.module.scss';
import * as Components from '../../Components';

import man from "../../Assets/images/man.jpeg";
import balloon from "../../Assets/images/balloon.jpg";

const pictureProps = {
	author: {
		name: "Richard",
		avatar: man,
	},
	title: "Balloon",
    src: balloon,
};

export default function Debug() {

    return (
		<div className={styles.container}>
			<Components.Picture {...pictureProps}/>
			<Components.Picture {...pictureProps}/>
		</div>
	);
}