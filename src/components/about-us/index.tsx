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

  return (
    <section className={style.aboutUs}>
      <nav
        className={classNames({
          [stylesNav.defaultNav]: true,
          [stylesNav.aboutUsNav]: true,
        })}
      >
        <span>LOGO</span>
        <ul>
          <li>
            <span onClick={() => setInfoCard(() => quem_somos)}>
              QUEM SOMOS
            </span>
          </li>
          <li>
            <span onClick={() => setInfoCard(() => missao)}>MISSÃO</span>
          </li>
          <li>
            <span onClick={() => setInfoCard(() => objetivos)}>OBJETIVO</span>
          </li>
          <li>
            <span onClick={() => setInfoCard(() => atuacao)}>ATUAÇÃO</span>
          </li>
        </ul>
      </nav>
      <InfoCard infoCard={infoCard} setInfoCard={setInfoCard} />
    </section>
  );
}
