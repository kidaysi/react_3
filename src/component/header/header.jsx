import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
    <div className="container">
        <div className={styles.header_content}>
          <h1 className={styles.logo}>AnimalPlanet</h1>
            <div className={styles.header_nav}>
            <a href="/">Главная</a>
            <a href="/catalog">Каталог</a>
            <a href="">GitHub</a>
            </div>
            <div className="header_btn">
                <a href="#"  className={styles.btn}>Авторизация</a>
            </div>
        </div>
        </div>
        </header>
  )
}
