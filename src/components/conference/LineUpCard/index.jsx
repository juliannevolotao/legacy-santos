import { useState } from "react";
import styles from "./styles.module.css";
import { Lock } from "lucide-react"; // ou outro ícone que quiser

const LineUpCard = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <li
      className={styles.cardContainer}
      onClick={handleToggle}
      onMouseEnter={handleToggle}
      onMouseLeave={() => setShowMessage(false)}
    >
      <div className={styles.overlay}>
        <Lock className={styles.lockIcon} />

        <span
          className={`${styles.message} ${showMessage ? styles.visible : ""}`}
        >
          Em breve mais novidades...
        </span>
      </div>
    </li>
  );
};

export default LineUpCard;
