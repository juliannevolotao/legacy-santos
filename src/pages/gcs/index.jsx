import React from "react";
import styles from "./gcs.module.css";
import { MessageSquare, MapPin } from "lucide-react";
import Footer from "../../components/footer";
import Breadcrumb from "../../components/breadcrumb";

const Gcs = () => {
  return (
    <>
      <div className={styles.gcsPage}>
        <img
          src="/images/logo-branco.png"
          alt="Logo Legacy"
          className={styles.logo}
        />

        <Breadcrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Grupos de Crescimento" },
          ]}
        />

        <section className={styles.intro}>
          <h1>Grupos de Crescimento</h1>
          <p>
            GC são os nossos <strong>Grupos de Crescimento</strong>, nossos
            encontros nos lares. É um momento edificante onde aprendemos mais
            sobre a Palavra, conhecemos novas pessoas, temos comunhão e somos
            acompanhados de pertinho.
          </p>
          <p>
            Temos GCs para <strong>mulheres</strong>, <strong>homens</strong>, 
            <strong> mistos</strong> e <strong>GCs Online.</strong>  Encontre o GC mais perto de você!
          </p>

          <a
            href="https://wa.me/5513974112195"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <MessageSquare size={18} />
            Quero participar de um GC
          </a>
        </section>

        <section className={styles.mapSection}>
          <h2>
            <MapPin size={22} /> Encontre um GC perto de você
          </h2>
          <div className={styles.mapContainer}>
            {/* <iframe
            src="https://www.google.com/maps/d/embed?mid=1aBcDeFgHiJkLmNoPqRsTuVwXyZ"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa dos GCs"
          ></iframe> */}

            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1mkgzonyHT363eFTCTBnvU_g-B1xYsG4&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa dos GCs"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Gcs;
