import BannerInfo from "./banner-info";
import NavBar from "../nav-bar";
import styles from "./style.module.scss";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <NavBar/>
      <div className={styles.cabecalho__banner}>
        <BannerInfo />
      </div>
    </header>
  );
}
