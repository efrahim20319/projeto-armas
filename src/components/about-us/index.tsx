import stylesNav from "../nav-bar/style.module.scss";
import classNames from "classnames";
import style from "./style.module.scss";
import InfoCard from "./info-card";
import { useState } from "react";
import IinfoCard from "../../types/info-card";
import { cards } from "../../data/about-us.json";

export default function AboutUS() {
  const [quem_somos, missao, objetivos, atuacao] = cards as IinfoCard[];
  const [infoCard, setInfoCard] = useState<IinfoCard>(quem_somos);
  const [cards_ativos, setCards_ativos] = useState([true, false, false, false]);
  function atualizaCardAtivo(index: number) {
    setCards_ativos((prev) =>
      prev.map((_v, i) => (index === i ? true : false))
    );
  }

  return (
    <section id="about-us" className={style.aboutUs}>
      <nav
        className={classNames({
          [stylesNav.defaultNav]: true,
          [stylesNav.aboutUsNav]: true,
        })}
      >
        <ul>
          <li>
            <span
              className={classNames({ [style.ative]: cards_ativos[0] })}
              onClick={() => {
                setInfoCard(quem_somos);
                atualizaCardAtivo(0);
              }}
            >
              QUEM SOMOS
            </span>
          </li>
          <li>
            <span
              className={classNames({ [style.ative]: cards_ativos[1] })}
              onClick={() => {
                setInfoCard(missao);
                atualizaCardAtivo(1);
              }}
            >
              MISSÃO
            </span>
          </li>
          <li>
            <span
              className={classNames({ [style.ative]: cards_ativos[2] })}
              onClick={() => {
                setInfoCard(objetivos);
                atualizaCardAtivo(2);
              }}
            >
              OBJETIVO
            </span>
          </li>
          <li>
            <span
              className={classNames({ [style.ative]: cards_ativos[3] })}
              onClick={() => {
                setInfoCard(atuacao);
                atualizaCardAtivo(3);
              }}
            >
              ATUAÇÃO
            </span>
          </li>
        </ul>
      </nav>
      <InfoCard infoCard={infoCard} setInfoCard={setInfoCard} />
    </section>
  );
}
