import React from "react";
import styles from "./home.module.css";
import {
  MessageSquare,
  Instagram,
  ArrowUpRight,
  Info,
  Ticket,
  Youtube
} from "lucide-react";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src="/images/logo-branco.png" alt="Logo Legacy" className={styles.logo} />
      <section className={styles.container}>
        <div className={styles.contactSection}>
          <h3> Nos acompanhe </h3>
          <ul className={styles.socialMediaList}>
            <li className={styles.socialMediaListItem + " " + styles.highlight}>
              <a href="/conference" rel="noopener noreferrer">
                <Ticket className={styles.icon} />
                <h2>Legacy Conference 25</h2>
                <span> 12 & 13 de setembro </span>
                <ArrowUpRight className={styles.rightIcon} />
              </a>
            </li>
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
          </ul>
        </div>
        <div className={styles.contactSection}>
          <h3> Grupos no Whatsapp</h3>
          <ul className={styles.socialMediaList}>
            <li className={styles.socialMediaListItem}>
              <a
                href="https://chat.whatsapp.com/JepXdgO3OVTFqy3hEIk7UH"
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
          </ul>
        </div>
        <div className={styles.contactSection}>
          <h3> Entre em contato </h3>
          <ul className={styles.socialMediaList}>
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
                href="https://wa.me/5511975217202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className={styles.icon} />
                <h2>Fale com os líderes </h2>
                <span> Entre em contato no whatsapp </span>
                <ArrowUpRight className={styles.rightIcon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.contactSection}>
          <h3> Informativo </h3>
          <ul className={styles.socialMediaList}>
            
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
             <li className={styles.socialMediaListItem}>
              <a
                href="https://www.instagram.com/lagoinhasantos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className={styles.icon} />
                <h2>Instagram Lagoinha Santos</h2>
                <span> @lagoinhasantos </span>
                <ArrowUpRight className={styles.rightIcon} />
              </a>
            </li>
             <li className={styles.socialMediaListItem}>
              <a
                href="https://www.youtube.com/@lagoinhasantos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className={styles.icon} />
                <h2>Youtube Lagoinha Santos</h2>
                <span> Transmissão ao vivo </span>
                <ArrowUpRight className={styles.rightIcon} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <span className={styles.disclaimer}>Site em desenvolvimento.</span>
    </div>
  );
};

export default Home;
