import stylesNav from "../nav-bar/style.module.scss";
import classNames from "classnames";
import style from "./style.module.scss";
import InfoCard from "../info-card";
import { useState } from "react";
import IinfoCard from "../../types/info-card";

export default function AboutUS() {
  const defaultInfo: IinfoCard = {
    img: "",
    information: "",
    title: "quem_somos",
  };
  const [infoCard, setInfoCard] = useState<IinfoCard>(defaultInfo);

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
            <span onClick={() => setInfoCard(() => ({title: "quem_somos", img: 'some_img', information: "This is who we are"}))}>QUEM SOMOS</span>
          </li>
          <li>
            <span onClick={() => setInfoCard(() =>  ({title: "missao", img: 'some_img', information: "This is our mission"}))}>MISSÃO</span>
          </li>
          <li>
            <span onClick={() => setInfoCard(() =>  ({title: "objetivos", img: 'some_img', information: "This our objectives"}))}>OBJETIVO</span>
          </li>
          <li>
            <span onClick={() => setInfoCard(() => ({title: "quem_somos", img: 'some_img', information: "We act is this field"}))}>ATUAÇÃO</span>
          </li>
        </ul>
      </nav>
      <InfoCard infoCard={infoCard} setInfoCard={setInfoCard} />
    </section>
  );
}
