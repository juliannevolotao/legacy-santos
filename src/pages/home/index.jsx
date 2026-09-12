import { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Instagram, X } from "lucide-react";

const WHATSAPP_NUMERO = "5513974112195";
const ENDERECO_IGREJA_QUERY = "-23.9322078,-46.3369473";
const MAPA_GCS_SRC =
  "https://www.google.com/maps/d/u/0/embed?mid=1mkgzonyHT363eFTCTBnvU_g-B1xYsG4&ehbc=2E312F&noprof=1";

const waLink = (texto) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

const LINK_PRINCIPAL = waLink("Oi! Quero fazer parte do Legacy Santos");
const LINK_GC = waLink("Quero participar de um GC");
const MAPA_IGREJA_SRC = `https://maps.google.com/maps?q=${ENDERECO_IGREJA_QUERY}&z=17&output=embed`;
const IGREJA_LINK = `https://www.google.com/maps/search/?api=1&query=${ENDERECO_IGREJA_QUERY}`;

const CANAIS = [
  {
    tipo: "Whatsapp",
    titulo: "Vem ser Legacy",
    sub: "Grupo geral dos jovens",
    href: "https://chat.whatsapp.com/JepXdgO3OVTFqy3hEIk7UH",
  },
  {
    tipo: "Whatsapp",
    titulo: "Legacy Shine",
    sub: "Grupo de mulheres",
    href: "https://chat.whatsapp.com/IvzgRcphUsZBNwsl49N6GT",
  },
  {
    tipo: "Whatsapp",
    titulo: "Legacy Hero",
    sub: "Grupo de homens",
    href: "https://chat.whatsapp.com/LfqLpHnNDXV7zSjW4xWO22",
  },
  {
    tipo: "Whatsapp",
    titulo: "Fale com os líderes",
    sub: "Conversa direta no privado",
    href: waLink("Oi! Gostaria de falar com os líderes do Legacy"),
  },
  {
    tipo: "Instagram",
    titulo: "@legacylagoinhasantos",
    sub: "O dia a dia do Legacy",
    href: "https://instagram.com/legacylagoinhasantos",
  },
  {
    tipo: "Youtube",
    titulo: "Lagoinha Santos",
    sub: "Transmissões ao vivo",
    href: "https://youtube.com/@lagoinhasantos",
  },
];

const BLOCOS_SALA = [
  {
    titulo: "O que é a Sala de Oração:",
    paragrafos: [
      "A sala de oração é um espaço dedicado a conhecer Cristo de forma mais profunda, valorizar e desfrutar da presença de Deus, ser transformado por Sua essência e clamar pela vinda de Cristo.",
      "Tudo isso fundamentado nas verdades e promessas da Palavra de Deus.",
    ],
  },
  {
    titulo: "Como fazemos isso?",
    paragrafos: [
      "Declarando quem Deus é, adorando quem ele é, intercedendo pelas causas de Deus.",
    ],
  },
  {
    titulo: "Turno de Devocional:",
    paragrafos: [
      "É um momento dedicado à contemplação, oração e leitura da Palavra de Deus de forma individual e profunda.",
    ],
  },
  {
    titulo: "Turno de Adoração com a Palavra:",
    paragrafos: [
      "É um turno focado para contemplação e revelação de quem Deus é. Adoramos a Deus com porções das escrituras.",
      "O intuito é crescer no conhecimento de Deus e nosso coração ser alinhado por quem Deus é.",
    ],
  },
  {
    titulo: "Turno de Intercessão:",
    paragrafos: [
      "Neste formato, nós intercedemos em concordância com a palavra de Deus a partir de temas específicos escolhidos.",
    ],
  },
  {
    titulo: "Turno de Imersão:",
    paragrafos: [
      "Um momento que une o turno de adoração, intercessão e a Palavra de Deus em torno de um tema central.",
    ],
  },
];

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [salaAberta, setSalaAberta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!salaAberta) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSalaAberta(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [salaAberta]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.headerBar} ${scrolled ? styles.scrolled : ""}`}>
          <a href="#top" className={styles.headerLogo}>
            <img src="/images/home/legacy-logo-branco.png" alt="Legacy Santos" />
          </a>
          <nav className={styles.nav}>
            <a href="#agenda">Agenda</a>
            <a href="#gcs">GCs</a>
            <a href="#local">Local</a>
          </nav>
          <div className={styles.headerActions}>
            <a
              href="https://instagram.com/legacylagoinhasantos"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Legacy"
              className={styles.instaBtn}
            >
              <Instagram size={18} />
            </a>
            <a
              href={LINK_PRINCIPAL}
              target="_blank"
              rel="noreferrer"
              className={styles.ctaBtn}
            >
              <span className={styles.ctaLong}>Vem ser Legacy</span>
              <span className={styles.ctaShort}>Participar</span>
            </a>
          </div>
        </div>
      </header>

      <section id="top" className={styles.hero}>
        <img
          src="/images/home/hero-palco.jpg"
          alt=""
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>
            <span className={styles.heroTagBar} />
            Jovens · Lagoinha Santos
          </span>
          <h1 className={styles.heroTitle}>Vivendo para fazer história</h1>
          <p className={styles.heroText}>
            Fé de verdade, amizade de verdade. Chega junto no encontro da
            semana ou encontre um GC perto de casa.
          </p>
          <div className={styles.heroButtons}>
            <a
              href={LINK_PRINCIPAL}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              Quero fazer parte
            </a>
            <a href="#gcs" className={styles.btnSecondary}>
              Encontrar um GC
            </a>
          </div>
        </div>
      </section>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} style={{ display: "flex", gap: "40px" }}>
              <span>Encontro da semana</span>
              <span className={styles.marqueeDot}>✱</span>
              <span>GCs pela cidade</span>
              <span className={styles.marqueeDot}>✱</span>
              <span>Amizade de verdade</span>
              <span className={styles.marqueeDot}>✱</span>
              <span>Legado eterno</span>
              <span className={styles.marqueeDot}>✱</span>
            </span>
          ))}
        </div>
      </div>

      <section id="agenda" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>O que rola por aqui</h2>
          <span className={styles.sectionSub}>Dois jeitos de chegar junto</span>
        </div>

        <div className={styles.cardsGrid}>
          <a href="#canais" className={styles.card}>
            <img
              src="/images/home/culto-chamado.jpg"
              alt="Jovens no encontro Legacy"
              className={styles.cardImg}
              style={{ objectPosition: "60% 40%" }}
            />
            <span className={styles.cardOverlay} />
            <span className={styles.cardNum}>01</span>
            <span className={styles.cardTag}>Encontro da semana</span>
            <strong className={styles.cardTitle}>Culto Legacy</strong>
            <span className={styles.cardText}>
              Louvor, palavra e ministração para a juventude. Vem do jeito
              que você é.
            </span>
          </a>

          <a href="#gcs" className={styles.card}>
            <img
              src="/images/home/gcs-boas-vindas.jpg"
              alt="Equipe de boas-vindas do Legacy"
              className={styles.cardImg}
              style={{ objectPosition: "35% 45%" }}
            />
            <span className={styles.cardOverlay} />
            <span className={styles.cardNum}>02</span>
            <span className={styles.cardTag}>Toda semana</span>
            <strong className={styles.cardTitle}>GCs nos lares</strong>
            <span className={styles.cardText}>
              Mulheres, homens, mistos e online. Comunhão de perto, durante
              a semana.
            </span>
          </a>
        </div>
      </section>

      <section id="gcs" className={`${styles.split} ${styles.splitAlt}`}>
        <div className={styles.splitText}>
          <span className={styles.eyebrow}>Grupos de crescimento</span>
          <h2 className={styles.splitTitle}>Tem um GC perto de você</h2>
          <p className={styles.splitParagraph}>
            Todos os grupos ficam no mapa, sempre atualizados: mulheres,
            homens, mistos e online. Escolha o bairro e chegue.
          </p>
          <a
            href={LINK_GC}
            target="_blank"
            rel="noreferrer"
            className={`${styles.splitCta} ${styles.btnPrimary}`}
          >
            Quero participar de um GC
          </a>
        </div>
        <div className={styles.splitMap}>
          <iframe
            src={MAPA_GCS_SRC}
            title="Mapa dos GCs"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      <section id="local" className={styles.split}>
        <div className={`${styles.localMap} ${styles.localMapStacked}`}>
          <iframe
            src={MAPA_IGREJA_SRC}
            title="Mapa da Igreja Lagoinha Santos"
            loading="lazy"
          />
        </div>
        <div className={`${styles.splitText} ${styles.localTextStacked}`}>
          <span className={styles.eyebrow}>Onde a gente se reúne</span>
          <h2 className={styles.splitTitle}>Igreja Lagoinha Santos</h2>
          <p className={styles.splitParagraph}>
            É aqui que acontecem os encontros do Legacy. Chegue um pouco
            antes, a equipe de boas-vindas te espera na porta.
          </p>
          <a
            href={IGREJA_LINK}
            target="_blank"
            rel="noreferrer"
            className={`${styles.splitCta} ${styles.btnSecondary}`}
          >
            Traçar rota
          </a>
        </div>
      </section>

      <section id="canais" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Chega junto</h2>
          <span className={styles.sectionSub}>
            Escolha por onde falar com a gente
          </span>
        </div>
        <div className={styles.channelsGrid}>
          {CANAIS.map((canal) => (
            <a
              key={canal.titulo}
              href={canal.href}
              target="_blank"
              rel="noreferrer"
              className={styles.channelCard}
            >
              <span className={styles.channelTipo}>{canal.tipo}</span>
              <strong className={styles.channelTitulo}>{canal.titulo}</strong>
              <span className={styles.channelSub}>{canal.sub}</span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => setSalaAberta(true)}
            className={`${styles.channelCard} ${styles.salaCard}`}
          >
            <span className={styles.channelTipo}>Informativo</span>
            <strong className={styles.channelTitulo}>Sala de Oração</strong>
            <span className={styles.channelSub}>
              Entenda o que é e como funciona
            </span>
          </button>
        </div>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>Seu lugar já está guardado</h2>
        <a
          href={LINK_PRINCIPAL}
          target="_blank"
          rel="noreferrer"
          className={styles.btnPrimary}
        >
          Vem ser Legacy
        </a>
      </section>

      {salaAberta && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSalaAberta(false)}
        >
          <div
            className={styles.modalSheet}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSalaAberta(false)}
              aria-label="Fechar"
              className={styles.modalClose}
            >
              <X size={16} />
            </button>
            <span className={styles.eyebrow}>
              Legacy · Jovens da Lagoinha Santos
            </span>
            <h2 className={styles.modalTitle}>Sala de Oração</h2>
            <div className={styles.modalBlocks}>
              {BLOCOS_SALA.map((bloco) => (
                <div key={bloco.titulo} className={styles.modalBlock}>
                  <strong className={styles.modalBlockTitle}>
                    {bloco.titulo}
                  </strong>
                  {bloco.paragrafos.map((p, i) => (
                    <span key={i} className={styles.modalParagraph}>
                      {p}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <a
              href={LINK_PRINCIPAL}
              target="_blank"
              rel="noreferrer"
              className={styles.modalCta}
            >
              Quero participar
            </a>
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <img
          src="/images/home/legacy-logo-branco.png"
          alt=""
          className={styles.footerLogo}
        />
        <span className={styles.footerText}>
          Legacy Santos · Igreja Lagoinha Santos
        </span>
      </footer>
    </div>
  );
};

export default Home;
