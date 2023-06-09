import { atualizaCardAtivo } from "../components/about-us";
import cardsData from "../data/cardsData";
import IinfoCard from "../types/info-card";

export default class HandleCardsMouseEvent {
  private xDown: number | null = 0;
  private yDown: number | null = 0;
  constructor(
    private cardAtivo: number,
    private setInfoCard: React.Dispatch<React.SetStateAction<IinfoCard>>,
    private setCards_ativos: React.Dispatch<React.SetStateAction<boolean[]>>
  ) {}

  public getTouches(evt: React.TouchEvent) {
    return evt.touches; // browser API
  }

  public handleTouchStart(evt: React.TouchEvent) {
    const firstTouch = this.getTouches(evt)[0];
    const { clientX, clientY } = firstTouch;
    [this.xDown, this.yDown] = [clientX, clientY];
  }

  public handleTouchMove(evt: React.TouchEvent) {
    if (!this.xDown || !this.yDown) {
      return;
    }
    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;
    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        this.cardAtivo === 3 ? (this.cardAtivo = 0) : this.cardAtivo++;
        /* right swipe */
      } else {
        /* left swipe */
        this.cardAtivo === 0 ? (this.cardAtivo = 3) : this.cardAtivo--;
      }
      this.setInfoCard(cardsData[this.cardAtivo]);
      atualizaCardAtivo(this.cardAtivo, this.setCards_ativos);
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
  }
}
