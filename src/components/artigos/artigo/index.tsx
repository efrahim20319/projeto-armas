import style from "./style.module.scss";

function Artigo() {
  return (
    <div className={style.artigo}>
      <div className={style.artigo__img}></div>
      {/* <img src="" alt="" /> */}
      <div className={style.artigo__info}>
        <div>
          <span className={style.artigo__info__categoria}>Cultura</span>
          <span className={style.artigo__info__data}>09/05/2003</span>
        </div>
        <h3 className={style.artigo__info__titulo}>Efrahim Tamaku is incredible</h3>
      </div>
    </div>
  );
}

export default Artigo;
