import style from "./style.module.scss";

export default function NewsLetter() {
  return (
    <section className={style.newsletter}>
      <h2>Newsletter</h2>
      <hr />
      <p>
        Cadastre-se na nossa newsletter para estar atualizado e receber notificações por email sobre as ultimas
        novidades sobre a nossa empresa/instituição.
      </p>
      <div className={style.newsletter__card}>
        <div>
          {/* <div ></div> */}
          <img
            className={style.newsletter__card__image}
            src="/public/assets/img/padronagem armas.jpg"
            alt=""
          />
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
