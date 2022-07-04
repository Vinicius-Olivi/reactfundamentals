import styles from './Sidebar.module.css';
import backgroundProfile from '../assets/backgroundProfile.svg';

import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={backgroundProfile} />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/Vinicius-Olivi.png" />
                <strong>Vini Olivi</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                    Profile Edit
                    </a>
            </footer>
        </aside>
    )
}