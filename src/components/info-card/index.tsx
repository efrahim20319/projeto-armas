import IinfoCard from "../../types/info-card";
import styles from "./style.module.scss";

interface Props {
  infoCard: IinfoCard;
  setInfoCard: React.Dispatch<React.SetStateAction<IinfoCard>>;
}

export default function InfoCard({ infoCard, setInfoCard }: Props) {
  const title = {
    quem_somos: "Quem Somos",
    missao: "Missão",
    objetivos: "Objectivos",
    atuacao: "Atuacão",
  };
  return (
    <div className={styles.infoCard}>
      <div>
        <div className={styles.infoCard__image}></div>
        {/* <img src="" alt="" /> */}
      </div>
      <div className={styles.infoCard__text}>
        <h2>{title[infoCard.title]}</h2>
        <p>
          {infoCard.information}
        </p>
      </div>
    </div>
  );
}
