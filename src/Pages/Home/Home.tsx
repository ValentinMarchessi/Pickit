import styles from './Home.module.scss';
import balloon from '../../Assets/images/balloon.jpg';

export default function Home() {
    return (
        <div className={styles.page}>
            <h1 id={styles.title}>Explore</h1>
            <section id={styles.first}>
                <div id={styles.collage}>
                    <img src={balloon} alt="collagePic"></img>
                    <img src={balloon} alt="collagePic"></img>
                    <img src={balloon} alt="collagePic"></img>
                    <img src={balloon} alt="collagePic"></img>
                    <img src={balloon} alt="collagePic"></img>
                    <img src={balloon} alt="collagePic"></img>
                    <img src={balloon} alt="collagePic"></img>
                </div>
                <div id={styles.trends}>
                    <div id={styles.potd}>
                        <h1>Pick of the day</h1>
                        <img src={balloon} alt="POTD"></img>
                    </div>
                    <div id={styles.featured}>
                        <h1>Featured Photographers</h1>
                        <div id={styles.photograper}>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}