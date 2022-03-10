import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element{
    return (
        <nav id={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
        </nav>
    )
}