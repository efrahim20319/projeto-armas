import stylesNav from "../nav-bar/style.module.scss";
import classNames from "classnames";
import style from "./style.module.scss";
import InfoCard from "./info-card";
import { useState } from "react";
import IinfoCard from "../../types/info-card";
import cardsData from "../../data/cardsData";



export function atualizaCardAtivo(
  index: number,
  setCards_ativos: React.Dispatch<React.SetStateAction<boolean[]>>
) {
  setCards_ativos((prev) => prev.map((_v, i) => (index === i ? true : false)));
}

export default function AboutUS() {
  const [quem_somos, missao, objetivos, atuacao] = cardsData;
  const [infoCard, setInfoCard] = useState<IinfoCard>(quem_somos);
  const [cards_ativos, setCards_ativos] = useState([true, false, false, false]);

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
                atualizaCardAtivo(0, setCards_ativos);
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
                atualizaCardAtivo(1, setCards_ativos);
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
                atualizaCardAtivo(2, setCards_ativos);
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
                atualizaCardAtivo(3, setCards_ativos);
              }}
            >
              ATUAÇÃO
            </span>
          </li>
        </ul>
      </nav>
      <InfoCard
        cards_ativos={cards_ativos}
        setCards_ativos={setCards_ativos}
        infoCard={infoCard}
        setInfoCard={setInfoCard}
      />
    </section>
  );
}
