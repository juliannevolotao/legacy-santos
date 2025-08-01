import { useState } from "react";
import styles from "./styles.module.css";
import { Lock } from "lucide-react"; // ou outro ícone que quiser

const LineUpCard = ({ name, description, image }) => {
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

        <span
          className={`${styles.message} ${showMessage ? styles.visible : ""}`}
        >
          {description || "Em breve mais novidades..."}
        </span>
        {image ? (
          <img src={image} alt={name} className={styles.image} />
        ) : (
          <Lock className={styles.lockIcon} />
        )}

        
      </div>
    </li>
  );
};

export default LineUpCard;
