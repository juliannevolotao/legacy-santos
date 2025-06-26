import styles from "./conference.module.css";
import RedirectButton from "../../components/conference/RedirectButton";
import Timeline from "../../components/conference/Timeline";
import LineUpCard from "../../components/conference/LineUpCard";

const Conference = () => {
  const REDIRECT_URL = "https://articket.com.br/e/4095/legacy-conf";

  const LINEUP = [
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
  ];
  return (
    <>
      <section className={styles.bannerSection}>
        <div title="Legacy Conference" className={styles.logoGlitch}></div>

        <div className={styles.caroussel}>
          <div className={styles.track}>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
          </div>
        </div>
        <div className={styles.fade}></div>
      </section>

      <section className={styles.saveTheDateSection}>
        <div>
          <h2 className={styles.saveTheDateTitle}>
            SAVE <br /> THE DATE
          </h2>
          <h2 className={styles.saveTheDateDays}>
            {" "}
            12 & 13 <br /> DE SETEMBRO
          </h2>
          <div className={styles.saveTheDateButton}>
            {/* <h2>PRÉ INSCRIÇÃO</h2> */}
            <RedirectButton redirectUrl={REDIRECT_URL} />
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <h2> Rumo à Legacy Conference </h2>
        <p>
          <i>
            Acompanhe os marcos que nos preparam para viver algo extraordinário
            na Legacy Conference.
          </i>
        </p>
        <Timeline />
      </section>

      <section className={styles.lineUpSection}>
        <h2> LINE-UP </h2>
        <p>
          <i>
            Cada nome aqui carrega uma palavra, uma missão e um impacto pra essa
            geração.
          </i>
        </p>
        <ul className={styles.lineUpList}>
          {LINEUP.map(() => (
            <LineUpCard />
          ))}
        </ul>
      </section>

      <footer></footer>
    </>
  );
};

export default Conference;
