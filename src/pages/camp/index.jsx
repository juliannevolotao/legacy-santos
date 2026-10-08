import styles from "./coming-soon.module.css";
import { ArrowLeft } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/legacylagoinhasantos";

const Camp = () => {
  return (
    <div className={styles.page}>
      <div className={styles.stage}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Sinal em reconstrução
        </div>

        <div className={styles.code} aria-label="Erro 404">
          <span className={styles.base}>404</span>
          <span className={styles.layerRed} aria-hidden="true">404</span>
          <span className={styles.layerCyan} aria-hidden="true">404</span>
          <span className={styles.shards} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <h1 className={styles.headline}>
          Esse acampamento ainda não começou.
        </h1>

        <p className={styles.bodyCopy}>
          O <strong>Legacy Camp</strong> está sendo reconstruído nos
          bastidores. Em breve soltamos a data, as informações do evento e a
          inscrição — por enquanto, essa página ficou perdida no sinal.
        </p>

        <div className={styles.divider} />

        <div className={styles.status}>
          <span>
            Status <span className={styles.accent}>em breve</span>
          </span>
          <span className={styles.sep}>/</span>
          <span>
            Fique de olho no{" "}
            <a
              className={styles.handle}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              @legacylagoinhasantos
            </a>
          </span>
        </div>

        <a className={styles.back} href="/">
          <ArrowLeft />
          Voltar para a home
        </a>
      </div>
    </div>
  );
};

export default Camp;
