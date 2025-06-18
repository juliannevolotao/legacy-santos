import styles from "./styles.module.css";

const RedirectButton = ({ redirectUrl }) => {
  return (
    <a
      href={redirectUrl}
      className={styles.buyButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.buttonText}>Quero meu ingresso</span>
      <span className={styles.arrowContainer}>
        <svg
          width="66px"
          height="32px"
          viewBox="0 0 66 43"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              className={styles.arrowOne}
              d="M40.15,3.89 L43.97,0.13 C44.17,-0.05 44.48,-0.05 44.68,0.13 L65.69,20.78 C66.08,21.17 66.09,21.80 65.70,22.19 L44.68,42.86 C44.48,43.05 44.17,43.05 43.97,42.86 L40.15,39.10 C39.95,38.91 39.95,38.59 40.15,38.39 L56.99,21.85 C57.19,21.66 57.19,21.34 57.00,21.14 L40.15,4.60 C39.95,4.41 39.95,4.09 40.15,3.89 Z"
              fill="#FFFFFF"
            />
            <path
              className={styles.arrowTwo}
              d="M20.15,3.89 L23.97,0.13 C24.17,-0.05 24.48,-0.05 24.68,0.13 L45.69,20.78 C46.08,21.17 46.09,21.80 45.70,22.19 L24.68,42.86 C24.48,43.05 24.17,43.05 23.97,42.86 L20.15,39.10 C19.95,38.91 19.95,38.59 20.15,38.39 L36.99,21.85 C37.19,21.66 37.19,21.34 37.00,21.14 L20.15,4.60 C19.95,4.41 19.95,4.09 20.15,3.89 Z"
              fill="#FFFFFF"
            />
            <path
              className={styles.arrowThree}
              d="M0.15,3.89 L3.97,0.13 C4.17,-0.05 4.48,-0.05 4.68,0.13 L25.69,20.78 C26.08,21.17 26.09,21.80 25.70,22.19 L4.68,42.86 C4.48,43.05 4.17,43.05 3.97,42.86 L0.15,39.10 C-0.04,38.91 -0.04,38.59 0.15,38.39 L16.99,21.85 C17.19,21.66 17.19,21.34 17.00,21.14 L0.15,4.60 C-0.04,4.41 -0.04,4.09 0.15,3.89 Z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </span>
    </a>
  );
};

export default RedirectButton;
