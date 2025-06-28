import styles from "./styles.module.css";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.line}></div>

      <div className={`${styles.step} ${styles.done}`}>
        <p className={styles.date}>28/06</p>
        <div className={styles.dot}></div>
        <p className={styles.text}>Pré-venda liberada</p>
      </div>

      <div className={`${styles.step}`}>
        <p className={styles.date}></p>
        <div className={styles.dot}></div>
        <p className={styles.text}>1º lote</p>
      </div>

      <div className={`${styles.step}`}>
        <p className={styles.date}></p>
        <div className={styles.dot}></div>
        <p className={styles.text}>
          2º lote <br /> Divulgação do tema
        </p>
      </div>

      <div className={styles.step}>
        <p className={styles.date}></p>
        <div className={styles.dot}></div>
        <p className={styles.text}>3º lote <br /> Divulgação da line-up</p>
      </div>

      <div className={styles.step}>
        <p className={styles.date}>12/09</p>
        <div className={styles.dot}></div>
        <p className={styles.text}>Legacy Conference 25</p>
      </div>
    </div>
  );
};

export default Timeline;
