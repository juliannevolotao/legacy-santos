import styles from "./conference.module.css";
import RedirectButton from "../../components/conference/RedirectButton";

const Conference = () => {
  const REDIRECT_URL = "https://articket.com.br/e/4095/legacy-conf";
  return (
    <>
      <section className={styles.sectionContainer}>
        <div title="Legacy Conference" className={styles.logoGlitch}></div>

        <div className={styles.caroussel}>
          <div className={styles.track}>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            <span>WE ARE LEGACY</span>
            <span>LGCYCONF25</span>
            
          </div>
        </div>

        {/* <div style={{}}>
          <h2>SAVE THE DATE</h2>
          <div>
            <h3> PRÉ-VENDA</h3>
            <RedirectButton redirectUrl={REDIRECT_URL} />
          </div>
        </div> */}

        <div className={styles.fade}></div>
      </section>
    </>
  );
};

export default Conference;
