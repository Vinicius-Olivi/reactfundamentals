import styles from './Sidebar.module.css';
import backgroundProfile from '../assets/backgroundProfile.svg'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={backgroundProfile} />

            <div className={styles.profile}>
                <strong>Vini Olivi</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Profile Edit</a>
            </footer>
        </aside>
    )
}