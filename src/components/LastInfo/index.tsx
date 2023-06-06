import styles from "./style.module.scss";

function LastInfo() {
  return (
    <section className={styles.lastInfo}>
      <div className={styles.lastInfo__img}>
        {/* <div ></div> */}
        <img src="/public/assets/img/logo-for-black-background.png" alt="" />
        <h3>CACDPA</h3>
      </div>
      <div className={styles.lastInfo__aboutUs}>
        <h3>Sobre nós</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          corrupti ducimus asperiores reiciendis, rem nobis doloribus a fugiat
          omnis, vel ipsa soluta enim voluptatibus quam expedita aliquid,
          impedit illum deleniti.
        </p>
      </div>
      <div className={styles.lastInfo__localization}>
        <h3>Localização</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578.1843224814868!2d13.371127098798752!3d-8.915654300127224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f91f9d1c895b%3A0xf4f9d4fc9c256f3e!2sJudocas%20Habilidosos!5e1!3m2!1spt-PT!2sao!4v1686039700299!5m2!1spt-PT!2sao"
          width="300"
          height="300"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LastInfo;
// style="border:0;"
