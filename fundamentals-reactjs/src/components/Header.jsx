import styles from './Header.module.css';

import igniteLogo from '../assets/ignite.logo.svg'
console.log(igniteLogo);

export function Header() {
    return (
        // .header because is the name of the class on module.css
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        <strong >Ignite Feed</strong>
        </header>
    )
}