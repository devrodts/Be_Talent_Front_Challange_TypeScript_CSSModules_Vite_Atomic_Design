import Logo from "../../atoms/Logo/Logo"
import styles from "./Header.module.css"


const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <nav>
                <Logo/>
            </nav>
        </header>
    </div>
  )
}

export default Header