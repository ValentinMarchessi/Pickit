import styles from './Lock.module.scss';

export default function Lock({ on, children }: { on: boolean, children: JSX.Element }) {
    return on ? <div className={styles.locked}>{children}</div> : children;
}
