import styles from './ProgressBar.module.scss';

interface Props {
    percentage: number,
}

export default function ProgressBar({ percentage } : Props) : JSX.Element{
    let style = {
        clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`
    }

    return (
        <div id={styles.container}>
            <div style={style} id={styles.bar}>
                <div id={styles.background}></div>
            </div>
        </div>
    )
}