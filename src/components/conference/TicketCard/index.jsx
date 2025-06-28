import { useState } from "react";
import styles from "./styles.module.css";
import { Lock } from "lucide-react"; // ou outro ícone que quiser

const LineUpCard = ({ status, titulo, valor, url, isActive, image }) => {
  console.log(isActive);
  return (
    <li
      className={`${styles.cardContainer} ${
        isActive ? styles.activeCard : styles.inactiveCard
      }`}
    >
        {/* {!isActive && (

      <div className={styles.fade}></div>
        )} */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={titulo} className={styles.image} />
      </a>

      {/* <div className={styles.infoContainer}>
        <h2>{titulo}</h2>
        {valor !== "" ? (
          <h3>
            <span className={styles.cifrao}>R$</span>
            <span className={styles.preco}>{valor}</span>
          </h3>
        ) : (
          <h3 className={styles.embreve}> EM BREVE </h3>
        )}
      </div>
      <div className={styles.statusContainer}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p> {status}</p>
        </a>
      </div> */}
    </li>
  );
};

export default LineUpCard;
