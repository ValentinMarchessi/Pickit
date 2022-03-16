import styles from './UserArea.module.scss';
import avatarFallback from '../../Assets/images/avatarFallback.png';
import Avatar from '../Avatar/Avatar';

export default function UserArea() {
    return (
        <div className={styles.container}>
            <h1 id={styles.username}>User123</h1>
            <Avatar id={styles.avatar}/>
		</div>
	);
}