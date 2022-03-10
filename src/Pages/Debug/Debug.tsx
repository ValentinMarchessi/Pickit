import styles from './Debug.module.scss';

export default function Debug({ component } : { component: JSX.Element}) {

    return (
        <div className={styles.container}>
            {component}
        </div>
    )
}