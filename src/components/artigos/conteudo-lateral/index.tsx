import { ReactNode } from "react";
import style from "./style.module.scss"
import "./style.css"
interface Props {
  children: ReactNode;
}

function ConteudoLateral({ children }: Props) {
  return <div className={style.conteudoLateral}>{children}</div>;
}

export default ConteudoLateral;
