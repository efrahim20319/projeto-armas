import style from "./style.module.scss";

export default function NewsLetter() {
  return (
    <section className={style.newsletter}>
      <h2>Newsletter</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci
        blanditiis ex excepturi esse, placeat explicabo fugit, hic, quibusdam
        qui quae fuga est quis id sunt aut tempora soluta dolores.
      </p>
      <div className={style.newsletter__card}>
        <div>
          <div className={style.newsletter__card__image}></div>
          {/* <img src="" alt="" /> */}
        </div>
        <div className={style.newsletter__card__form}>
          <h3>Cadastre-se a nossa newsletter</h3>
          <form action="" method="post">
            <div className={style.newsletter__formGroup}>
              <span>Nome Completo</span>
              <input type="text" />
            </div>
            <div className={style.newsletter__formGroup}>
              <span>Email</span>
              <input type="text" />
            </div>
            <div className={style.newsletter__formGroup}>
              <span>Numero de telefone</span>
              <input type="tel" name="" id="" />
            </div>
          <button type="submit">Cadastrar-se</button>
          </form>
        </div>
      </div>
    </section>
  );
}
