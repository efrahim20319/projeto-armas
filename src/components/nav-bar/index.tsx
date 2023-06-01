import styles from './style.module.scss'
export default function NavBar() {
  return (
    <nav className={styles.defaultNav}>
      <span>LOGO</span>
      <ul>
        <li>ITEM</li>
        <li>ITEM</li>
        <li>ITEM</li>
        <li>ITEM</li>
        <li>ITEM</li>
      </ul>
    </nav>
  );
}
