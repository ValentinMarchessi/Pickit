import styles from './TrendingTags.module.scss';

export default function TrendingTags() {
    return (
		<div id={styles.trending}>
			<h1>Trending Tags</h1>
			<div className={styles.tags}>
				<h1>#Sunset</h1>
				<h1>#Moon</h1>
				<h1>#Summer</h1>
				<h1>#Beach</h1>
			</div>
		</div>
	);
}