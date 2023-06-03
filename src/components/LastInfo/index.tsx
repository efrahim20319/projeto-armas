import styles from "./style.module.scss";

function LastInfo() {
  return (
    <section className={styles.lastInfo}>
      <div className={styles.lastInfo__img}>
        <div></div>
        <h3>LOGO</h3>
        {/* <img src="" alt="" /> */}
      </div>
      <div className={styles.lastInfo__aboutUs}>
        <h3>Sobre nos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          corrupti ducimus asperiores reiciendis, rem nobis doloribus a fugiat
          omnis, vel ipsa soluta enim voluptatibus quam expedita aliquid,
          impedit illum deleniti.
        </p>
      </div>
      <div className={styles.lastInfo__localization}>
        <h3>Localizacao</h3>
        <div></div>
      </div>
    </section>
  );
}

export default LastInfo;
