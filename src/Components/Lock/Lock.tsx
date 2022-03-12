import styles from './Lock.module.scss';

export default function Lock({ on, children }: { on: boolean, children: JSX.Element }) {
    const spinner = <div id={styles.spinner}></div>;
    return on ? (
		<div className={styles.container}>
			{spinner}
			<div className={styles.locked}>{children}</div>
		</div>
	) : (
		children
	);
}
