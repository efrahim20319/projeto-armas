import style from "./style.module.scss";

function Artigo() {
  return (
    <div className={style.artigo}>
      {/* <div></div> */}
      <img className={style.artigo__img} src="/public/assets/img/rifle_weapon_guns_210298_3840x2400.jpg" alt="" />
      <div className={style.artigo__info}>
        <div>
          <span className={style.artigo__info__categoria}>Cultura</span>
          <span className={style.artigo__info__data}>09/05/2003</span>
        </div>
        <h3 className={style.artigo__info__titulo}>Armas não matam, pessoas sim</h3>
      </div>
    </div>
  );
}

export default Artigo;
