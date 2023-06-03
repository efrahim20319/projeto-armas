import AboutUS from "../../components/about-us";
import Artigos from "../../components/artigos";
import Cabecalho from "../../components/cabecalho";
import NewsLetter from "../../components/newsletter";

export default function HomePage() {
  return (
    <>
      <Cabecalho />
      <AboutUS />
      <NewsLetter />
      <Artigos />
    </>
  );
}
