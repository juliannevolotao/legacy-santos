import RedirectButton from "../../components/conference/RedirectButton";
import styles from "./conference.module.css";
import finalStyles from "./final.module.css";

const FinalConference = () => {
  const REDIRECT_URL = "https://articket.com.br/e/4095/legacy-conf";
  return (
    <>
      <section className={finalStyles.firstBanner}>
        <div className={finalStyles.container}>
          <div title="Legacy Conference" className={finalStyles.mainLogo}></div>

          <div>
            <img
              src="/images/conference/logo-final-azul.png"
              alt="Legacy Conference"
              className={finalStyles.logo}
            />
            <p>
              Nos dias <strong>12 e 13 de setembro</strong>, viva ministrações
              intensas, adoração profunda e experiências sobrenaturais. Um
              ambiente onde o céu invade a terra e corações são transformados.
            </p>
          </div>

          <RedirectButton redirectUrl={REDIRECT_URL} />
        </div>

        <div className={`${styles.caroussel} ${finalStyles.caroussel}`}>
          <div className={`${styles.track} ${finalStyles.track}`}>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 1 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
          </div>
        </div>
        {/* <div className={styles.fade}></div> */}
      </section>

      <div className={finalStyles.shape1}></div>
      <section className={finalStyles.secondBanner}>
        <div className={finalStyles.container}>
          <h2>Quando o Céu Invade a Terra</h2>

          <p>
            <strong>Quando o céu invade a terra</strong> não é apenas um tema — é um clamor.
            Representa o momento em que a atmosfera do céu desce sobre nós,
            transformando ambientes, vidas e realidades. É sobre <strong>viver o
            sobrenatural de Deus </strong> aqui e agora, experimentando Sua presença de
            forma palpável, intensa e transformadora.
            <br />
            Na Legacy Conference 2025, cremos que o céu vai invadir a terra por
            meio de adoração sincera, palavras proféticas e corações rendidos.
            Será um tempo onde a vontade de Deus será feita na terra como no
            céu, e uma geração será marcada para viver o propósito eterno.
          </p>
          <div
            title="Quando o Céu Invade a Terra"
            className={finalStyles.earth}
          ></div>
        </div>
      </section>
    </>
  );
};

export default FinalConference;
