import { Fragment } from 'react';
import styles from './Checkpoints.module.scss';

function Checkpoint({ reached }: { reached: boolean }): JSX.Element {
	const fillPercent = reached ? 0 : 100
	const style = { clipPath: `polygon(0% ${fillPercent}%,100% ${fillPercent}%, 100% 100%,0% 100%)` };
	const circle = (
		<svg style={style} className={styles.circle}>
			<circle fill="#C7476A" />
		</svg>
	);
	return (
		<div className={styles.checkpoint}>
			{circle}
		</div>
	);
}

export default function Checkpoints({ ammount, reached }: { ammount: number, reached: number }): JSX.Element {
	let checkpoints = [];
	let connector = (i: number) => {
		const fillPercent = i < reached ? 100 : 0;
		const style = { clipPath: `polygon(0% 0%,${fillPercent}% 0%, ${fillPercent}% 100%,0% 100%)` };
		return (
			<svg style={style} id={styles.connector}>
				<rect fill={i < reached ? '#C7476A' : 'gray'} />
			</svg>
		);
	};
    for (let i = 1; i <= ammount; i++) {
        checkpoints.push(
			<Fragment key={i}>
				<Checkpoint key={i} reached={i <= reached} />
				{i < ammount && connector(i)}
			</Fragment>
		);
    }
	return (
		<div className={styles.checkpoints}>
			{checkpoints}
		</div>
	);
}
