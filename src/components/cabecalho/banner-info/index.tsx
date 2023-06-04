import styles from "./style.module.scss";

export default function BannerInfo() {
  return (
    <div className={styles.bannerInfo}>
      <h1>CACDPA</h1>
      <p>
        No mundo da coleção, as estrelas podem ser usadas para indicar a raridade, a importância ou o valor de um objeto. 
      </p>
      <button>
        <span>Lets Go</span>
        <span>►</span>
      </button>
    </div>
  );
}
