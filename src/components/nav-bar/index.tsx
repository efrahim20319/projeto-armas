import styles from './style.module.scss'
export default function NavBar() {
  return (
    <nav className={styles.defaultNav}>
      <img className={styles.defaultNav__img} src="/assets/img/logo-main.png" alt="" />
      <ul>
        <li><span>ITEM</span></li>
        <li><span>ITEM</span></li>
        <li><span>ITEM</span></li>
        <li><span>ITEM</span></li>
        <li><span>ITEM</span></li>
      </ul>
    </nav>
  );
}
