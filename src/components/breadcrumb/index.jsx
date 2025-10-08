import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./breadcrumb.module.css";
import { ArrowUpLeft } from "lucide-react";

const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.breadcrumb}>
      {items.length > 1 && (
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <ArrowUpLeft size={16} /> Voltar
        </button>
      )}
      <ul className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {item.link ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className={styles.separator}>/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
