import React from "react";
import styles from "./home.module.css";
import { MessageSquare, Instagram, ArrowUpRight, Info } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.socialMediaList}>
          <li className={styles.socialMediaListItem}>
            <a
              href="https://www.instagram.com/legacylagoinhasantos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className={styles.icon} />
              <h2>Instagram Legacy</h2>
              <span> @legacylagoinhasantos </span>
              <ArrowUpRight className={styles.rightIcon} />
            </a>
          </li>
          <li className={styles.socialMediaListItem}>
            <a
              href="https://chat.whatsapp.com/HGsUX8ZNn8P9acrwL1BEB1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className={styles.icon} />
              <h2>Vem ser Legacy </h2>
              <span> Entre no nosso grupo do whatsapp </span>
              <ArrowUpRight className={styles.rightIcon} />
            </a>
          </li>
          <li className={styles.socialMediaListItem}>
            <a
              href="https://wa.me/5513974112195"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className={styles.icon} />
              <h2>Faça parte de um GC </h2>
              <span> Entre em contato no whatsapp </span>
              <ArrowUpRight className={styles.rightIcon} />
            </a>
          </li>
          <li className={styles.socialMediaListItem}>
            <a
              href="https://chat.whatsapp.com/IvzgRcphUsZBNwsl49N6GT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className={styles.icon} />
              <h2>Legacy Bloom </h2>
              <span> Grupo de mulheres do Legacy </span>
              <ArrowUpRight className={styles.rightIcon} />
            </a>
          </li>
          <li className={styles.socialMediaListItem}>
            <a
              href="https://chat.whatsapp.com/LfqLpHnNDXV7zSjW4xWO22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className={styles.icon} />
              <h2>Legacy Brave </h2>
              <span> Grupo de homens do Legacy </span>
              <ArrowUpRight className={styles.rightIcon} />
            </a>
          </li>
          <li className={styles.socialMediaListItem}>
            <a
              href="https://sandwiche.me/legacylagoinhasantos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Info className={styles.icon} />
              <h2>Sala de Oração </h2>
              <span> Saiba mais sobre a nossa sala de oração </span>
              <ArrowUpRight className={styles.rightIcon} />
            </a>
          </li>
        </ul>

        <span className={styles.disclaimer}>Site em desenvolvimento.</span>
      </section>
    </>
  );
};

export default Home;
