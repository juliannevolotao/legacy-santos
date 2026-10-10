import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Tent, Flame, Mountain, Waves, ArrowUpRight } from "lucide-react";
import styles from "./landing2026.module.css";
import Reveal from "./Reveal";

const INSCRICAO_URL = "https://forms.gle/WqGS9R78AQktRcFA8";
const INSTAGRAM_URL = "https://www.instagram.com/legacylagoinhasantos";

const MARQUEE_PHRASES = [
  "Legacy Camp 27",
  "Live the legacy",
  "Chosen and called",
  "Anchored in God",
];

const POLAROIDS = [
  { src: "/images/camp/2026/momentos/gc-ao-ar-livre.jpg", rot: "-6deg" },
  { src: "/images/camp/2026/momentos/bandeira-yeshua.jpg", rot: "4deg" },
  { src: "/images/camp/2026/momentos/abraco.jpg", rot: "-3deg" },
  { src: "/images/camp/2026/momentos/oracao-no-chao.jpg", rot: "5deg" },
  { src: "/images/camp/2026/momentos/ministracao.jpg", rot: "-4deg" },
];

const GALERIA = [
  { src: "/images/camp/2026/piscina.webp", alt: "Piscinas do novo local do Legacy Camp" },
  { src: "/images/camp/2026/campo.webp", alt: "Campo gramado para atividades e esportes" },
  { src: "/images/camp/2026/auditorio.webp", alt: "Auditório preparado para os cultos do camp" },
  { src: "/images/camp/2026/refeitorio-salao.webp", alt: "Salão do refeitório com mesas" },
  { src: "/images/camp/2026/quarto-beliche-1.webp", alt: "Quarto com beliches de madeira" },
  { src: "/images/camp/2026/refeitorio-buffet.webp", alt: "Buffet do refeitório" },
  { src: "/images/camp/2026/quarto-beliche-2.webp", alt: "Quarto com beliches e piso de mármore" },
  { src: "/images/camp/2026/refeitorio-balcao.webp", alt: "Balcão de saladas e bebidas do refeitório" },
];

const DESTAQUES = [
  { icon: Mountain, label: "Natureza" },
  { icon: Tent, label: "Comunhão" },
  { icon: Flame, label: "Adoração" },
  { icon: Waves, label: "Descanso" },
];

const FAQ = [
  {
    pergunta: "Quando vai ser o Camp 27?",
    resposta:
      "Data em definição — em breve anunciamos aqui e nas nossas redes. Fique de olho pra garantir sua vaga assim que abrir.",
  },
  {
    pergunta: "Quem pode participar?",
    resposta: "Jovens de 18 a 35 anos que querem viver um tempo intenso com Deus.",
  },
  {
    pergunta: "O que está incluso na inscrição?",
    resposta:
      "Hospedagem, alimentação, transporte e todas as atividades do camp. Valores e formas de pagamento divulgamos junto com a data.",
  },
  {
    pergunta: "Como funciona o transporte?",
    resposta:
      "Vamos todos juntos de ônibus, saindo da Igreja Lagoinha Santos. Por segurança e integração, não será permitido ir por conta própria.",
  },
  {
    pergunta: "E se eu não conhecer ninguém?",
    resposta:
      "Pode vir tranquilo! O Camp é feito pra criar conexões novas — desde o primeiro dia tem dinâmica e grupo pra todo mundo se enturmar rápido.",
  },
  {
    pergunta: "O que devo levar?",
    resposta:
      "Assim que a data fechar, publicamos a lista completa. Já pode ir separando roupa confortável, Bíblia, caderno e caneta.",
  },
];

const TopoCorners = ({ faded = false }) => (
  <div
    className={`${styles.topoCorners} ${faded ? styles.topoCornersFaded : ""}`}
    aria-hidden="true"
  >
    <img src="/images/camp/2026/identidade/topo-corner-tl.png" alt="" className={styles.topoTl} />
    <img src="/images/camp/2026/identidade/topo-corner-br.png" alt="" className={styles.topoBr} />
  </div>
);

const Camp2026 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.headerBar} ${scrolled ? styles.scrolled : ""}`}>
          <Link to="/" className={styles.headerLogo}>
            <img src="/images/camp/2026/identidade/legacy-camp-27-mark.png" alt="Legacy Camp 27" />
          </Link>
          <nav className={styles.nav}>
            <a href="#sobre">Sobre</a>
            <a href="#local">O local</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className={styles.headerActions}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Legacy"
              className={styles.instaBtn}
            >
              <Instagram size={18} />
            </a>
            <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              Fazer inscrição
            </a>
          </div>
        </div>
      </header>

      <section id="top" className={styles.hero}>
        <img
          src="/images/camp/2026/hero-grupo.jpg"
          alt=""
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <TopoCorners />
        <div className={styles.heroContent}>
          <img
            src="/images/camp/2026/identidade/legacy-camp-27-mark.png"
            alt="Legacy Camp 27"
            className={styles.heroMark}
          />
          <span className={styles.heroTag}>
            <span className={styles.heroTagBar} />
            Retiro de jovens · Live the legacy
          </span>
          <p className={styles.heroText}>
            Três dias separados pra viver algo novo com Deus e com gente que
            compartilha o mesmo propósito. Natureza, comunhão e presença — tudo
            no mesmo lugar.
          </p>
          <div className={styles.heroButtons}>
            <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              Fazer inscrição
            </a>
            <a href="#sobre" className={styles.btnSecondary}>
              Saiba mais
            </a>
          </div>

          <div className={styles.polaroids} aria-hidden="true">
            {POLAROIDS.map((foto) => (
              <div key={foto.src} className={styles.polaroid} style={{ "--rot": foto.rot }}>
                <img src={foto.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={styles.marqueeGroup}>
              {MARQUEE_PHRASES.map((frase) => (
                <span key={frase} className={styles.marqueeItem}>
                  {frase}
                  <span className={styles.marqueeDot}>✱</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="sobre" className={styles.section}>
        <TopoCorners faded />
        <Reveal className={styles.sectionHead}>
          <span className={styles.eyebrow}>Sobre o camp</span>
          <h2 className={styles.sectionTitle}>Mais que um acampamento</h2>
        </Reveal>

        <Reveal delay={80} className={styles.sobreGrid}>
          <p className={styles.sobreText}>
            O Legacy Camp é um tempo separado da rotina pra viver algo genuíno
            com a presença de Deus. Durante o fim de semana, cada detalhe é
            pensado pra te levar a um encontro real: momentos de adoração
            profunda, conexões verdadeiras e experiências que transformam de
            dentro pra fora.
            <br />
            <br />
            Mais do que um evento, o Camp é um marco — um legado que você
            carrega pra vida.
          </p>
          <div className={styles.destaquesGrid}>
            {DESTAQUES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={styles.destaqueCard}>
                  <Icon size={26} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section id="local" className={styles.sectionAlt}>
        <Reveal className={styles.sectionHead}>
          <span className={styles.eyebrow}>Onde vai rolar</span>
          <h2 className={styles.sectionTitle}>O local do Camp</h2>
          <span className={styles.sectionSub}>
            Piscina, campo, auditório e alojamento confortável
          </span>
        </Reveal>

        <div className={styles.galeriaGrid}>
          {GALERIA.map((foto, i) => (
            <Reveal key={foto.src} delay={i * 60} className={styles.galeriaItem}>
              <img src={foto.src} alt={foto.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <Reveal className={styles.sectionHead}>
          <span className={styles.eyebrow}>Possíveis dúvidas</span>
          <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
        </Reveal>

        <div className={styles.faqList}>
          {FAQ.map((item, index) => (
            <Reveal key={item.pergunta} delay={index * 50} className={styles.faqItem}>
              <button
                type="button"
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {item.pergunta}
                <span className={styles.faqIcon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  openIndex === index ? styles.faqAnswerOpen : ""
                }`}
              >
                <p>{item.resposta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.ticketSection}>
        <Reveal className={styles.ticket}>
          <div className={styles.ticketMain}>
            <img
              src="/images/camp/2026/identidade/legacy-camp-27-mark.png"
              alt="Legacy Camp 27"
              className={styles.ticketMark}
            />
            <div className={styles.ticketInfo}>
              <span className={styles.eyebrow}>Retiro de jovens · Camp 27</span>
              <h2 className={styles.ticketTitle}>Garanta sua vaga</h2>
              <div className={styles.ticketRow}>
                <div>
                  <span className={styles.ticketLabel}>Data</span>
                  <strong>Em breve</strong>
                </div>
                <div>
                  <span className={styles.ticketLabel}>Local</span>
                  <strong>Em breve</strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ticketAction}>
            <img
              src="/images/camp/2026/identidade/legacy-camp-27-stamp.png"
              alt=""
              className={styles.ticketStamp}
              aria-hidden="true"
            />
            <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              Fazer inscrição
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <Link to="/" className={styles.footerLink}>
          <MapPin size={14} />
          Legacy Santos · Igreja Lagoinha Santos
        </Link>
        <span className={styles.footerText}>Legacy Camp 27 · Live the legacy</span>
      </footer>
    </div>
  );
};

export default Camp2026;
