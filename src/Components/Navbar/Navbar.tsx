import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";
import UserArea from './UserArea';

export default function Navbar(): JSX.Element{
    return (
        <nav className={styles.container}>
            <h1>Pick It</h1>
            <UserArea/>
        </nav>
    )
}