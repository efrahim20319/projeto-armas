import styles from './style.module.scss'
export default function NavBar() {
  return (
    <nav className={styles.defaultNav}>
      <img className={styles.defaultNav__img} src="/assets/img/logo-main.png" alt="" />
      <ul>
        <li><span>Quem somos</span></li>
        <li><span>Newsletter</span></li>
        <li><span>Artigos</span></li>
        <li><span>Contactos</span></li>
      </ul>
    </nav>
  );
}
