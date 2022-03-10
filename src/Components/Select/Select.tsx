import styles from './Select.module.scss';

interface SelectProps {
    label: string;
    options: string[] | number[];
    multiple?: boolean
}

export default function Select({label, options, multiple = false} : SelectProps) {
    return (
        <div className={styles.container}>
            <div id={styles.pill}>
                <span id={styles.label}>{label}</span>
            </div>
            <ul id={styles.dropdown}>
                {options.map(option => <li key={option} value={option}>{option}</li>)}
            </ul>
        </div>
    )
}