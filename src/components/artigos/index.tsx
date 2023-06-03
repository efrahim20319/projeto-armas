import Artigo from "./artigo";
import ConteudoLateral from "./conteudo-lateral";
import Parceiro from "./parceiro";
import style from "./style.module.scss";

export default function Artigos() {
  return (
    <section className={style.artigos}>
      <h2 className={style.artigos__titulo}>Artigos Publicados</h2>
      <div className={style.artigos__container}>
        <div className={style.artigos__grade}>
          <Artigo />
          <Artigo />
          <Artigo />
          <Artigo />
          <Artigo />
          <Artigo />
        </div>
        <aside>
          <ConteudoLateral>
            <h2>Sigam-nos</h2>
            <div className="fallow-us">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </ConteudoLateral>
          <ConteudoLateral>
            <h2>Parceiros</h2>
            <div className="partners">
              <Parceiro/>
              <Parceiro/>
              <Parceiro/>
              <Parceiro/>
              <Parceiro/>
            </div>
          </ConteudoLateral>
        </aside>
      </div>
    </section>
  );
}
