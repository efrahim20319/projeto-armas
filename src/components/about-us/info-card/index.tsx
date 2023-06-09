import IinfoCard from "../../../types/info-card";
import HandleCardsMouseEvent from "../../../utils/handleMouseEvents";
import styles from "./style.module.scss";

interface Props {
  infoCard: IinfoCard;
  setInfoCard: React.Dispatch<React.SetStateAction<IinfoCard>>;
  cards_ativos: boolean[];
  setCards_ativos: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export default function InfoCard({
  infoCard,
  setInfoCard,
  cards_ativos,
  setCards_ativos,
}: Props) {
  const title = {
    quem_somos: "Quem Somos",
    missao: "Missão",
    objetivos: "Objectivos",
    atuacao: "Atuacão",
  };

  const cardAtivo = cards_ativos.indexOf(true);

  const handleMouseEvents = new HandleCardsMouseEvent(
    cardAtivo,
    setInfoCard,
    setCards_ativos
  );

  return (
    <div className={styles.infoCard}>
      <div>
        <img
          onTouchStart={handleMouseEvents.handleTouchStart.bind(handleMouseEvents)}
          onTouchMove={handleMouseEvents.handleTouchMove.bind(handleMouseEvents)}
          className={styles.infoCard__image}
          src={infoCard.img}
          alt=""
        />
      </div>
      <div className={styles.infoCard__text}>
        <h2>{title[infoCard.title]}</h2>
        <p>{infoCard.information}</p>
      </div>
    </div>
  );
}
