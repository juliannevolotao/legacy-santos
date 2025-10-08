import styles from './footer.module.css';
import { Instagram, AppWindow } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/legacylagoinhasantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className={styles.footerIcon} />
          </a>
        </li>
        <li>
          <a
            href="/"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <AppWindow className={styles.footerIcon} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;