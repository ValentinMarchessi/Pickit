import styles from './Home.module.scss';
import { Collage, FeaturedCreators, PickOfTheDay, TrendingTags } from "./Components";

export default function Home() {
    return (
		<div className={styles.page}>
			<h1 id={styles.title}>Explore</h1>
			<section id={styles.first}>
				<Collage/>
				<div id={styles.trends}>
					<PickOfTheDay/>
					<TrendingTags/>
					<FeaturedCreators/>
				</div>
			</section>
			<div id={styles.latest}>
				<h1>Latest Publications</h1>
			</div>
		</div>
	);
}