
import logo from "../../../assets/Logo.svg"

import styles from "./Logo.module.css"
function Logo() {
  return (
    <div>
        <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Logo