import styles from './Header.module.css';


export function Header() {
    return (
        // .header because is the name of the class on module.css
        <header className={styles.header}>
        <strong >Ignite Feed</strong>
        </header>
    )
}