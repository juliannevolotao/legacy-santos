import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Tent, Flame, Mountain, Waves, ArrowUpRight, MessageCircle } from "lucide-react";
import styles from "./landing2026.module.css";
import Reveal from "./Reveal";
import CampStamp from "./CampStamp";

const INSCRICAO_URL = "https://forms.gle/WqGS9R78AQktRcFA8";
const INSTAGRAM_URL = "https://www.instagram.com/legacylagoinhasantos";
const WHATSAPP_GRUPO_URL = "https://chat.whatsapp.com/L6pIrMeAoPe6wbo8N3LmQB";

const MARQUEE_PHRASES = [
  "Legacy Camp 27",
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
  { icon: Mountain, label: "Natureza", texto: "Dias longe da correria, no meio do verde." },
  { icon: Tent, label: "Comunhão", texto: "Gente nova e amizades que ficam pra vida." },
  { icon: Flame, label: "Adoração", texto: "Cultos intensos na presença de Deus." },
  { icon: Waves, label: "Descanso", texto: "Piscina, campo e tempo pra respirar." },
];

const FAQ = [
  {
    pergunta: "Quando e onde vai ser o Camp 27?",
    resposta: "De 2 a 4 de abril de 2027, em Mogi das Cruzes - SP.",
  },
  {
    pergunta: "Quem pode participar?",
    resposta: "Jovens de 18 a 35 anos que querem viver um tempo intenso com Deus.",
  },
  {
    pergunta: "Quanto custa a inscrição?",
    resposta:
      "O valor da inscrição é R$ 762,00. Dá pra pagar à vista (dinheiro, Pix ou cartão com taxa), parcelado no cartão em até 12x (com juros da maquininha) ou parcelado no Pix até 26 de março — quanto antes você começar, mais parcelas você tem:",
    tabela: {
      colunas: ["Começando em", "Parcelas no Pix"],
      linhas: [
        ["Outubro", "6x de R$ 127,00"],
        ["Novembro", "5x de R$ 152,40"],
        ["Dezembro", "4x de R$ 190,50"],
        ["Janeiro", "3x de R$ 254,00"],
        ["Fevereiro", "2x de R$ 381,00"],
        ["Março", "1x de R$ 762,00"],
      ],
    },
  },
  {
    pergunta: "O que está incluso no valor?",
    resposta:
      "Transporte de ônibus (ida e volta), camiseta, alimentação e hospedagem durante todo o período do acampamento.",
  },
  {
    pergunta: "Como garanto minha vaga?",
    resposta:
      "Preencha o formulário de inscrição e faça o pagamento (à vista ou da primeira parcela) — a chave Pix e o contato pra enviar o comprovante estão no próprio formulário. A inscrição só é confirmada depois dessas duas etapas. As vagas são limitadas!",
  },
  {
    pergunta: "Preenchi o formulário com alguma informação errada. E agora?",
    resposta:
      "Não preencha de novo! Envie a inscrição apenas uma vez e, se precisar corrigir algo, fale com um dos líderes.",
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
      "Em breve vamos disponibilizar o Manual do Acampante, com todas as orientações e a lista completa do que levar.",
  },
];

const SectionDivider = ({ color, flip = false }) => (
  <div
    className={`${styles.divider} ${flip ? styles.dividerFlip : ""}`}
    style={{ background: color }}
    aria-hidden="true"
  />
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
              href={WHATSAPP_GRUPO_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Grupo do WhatsApp do Legacy Camp"
              className={styles.instaBtn}
            >
              <MessageCircle size={18} />
            </a>
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
        <div className={styles.heroContent}>
          <img
            src="/images/camp/2026/identidade/legacy-camp-27-mark.png"
            alt="Legacy Camp 27"
            className={styles.heroMark}
          />
          <span className={styles.heroTag}>Retiro de jovens</span>
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

      <SectionDivider color="#6b1f2b" />

      <section id="sobre" className={styles.section}>
        <div className={styles.sobreGrid}>
          <Reveal className={styles.sobreContent}>
            <span className={styles.eyebrow}>Sobre o camp</span>
            <h2 className={`${styles.sectionTitle} ${styles.sobreTitle}`}>
              Mais que um <span>acampamento</span>
            </h2>
            <p className={styles.sobreText}>
              O Legacy Camp é um tempo separado da rotina pra viver algo genuíno
              com a presença de Deus. Durante o fim de semana, cada detalhe é
              pensado pra te levar a um encontro real: momentos de adoração
              profunda, conexões verdadeiras e experiências que transformam de
              dentro pra fora.
            </p>
            <blockquote className={styles.sobreQuote}>
              Mais do que um evento, o Camp é um marco — um legado que você
              carrega pra vida.
            </blockquote>
          </Reveal>

          <Reveal delay={120} className={styles.sobreFotos}>
            <img
              src="/images/camp/2026/momentos/ministracao.jpg"
              alt="Jovens orando juntos durante uma ministração no camp"
              className={styles.sobreFotoGrande}
              loading="lazy"
            />
            <img
              src="/images/camp/2026/momentos/abraco.jpg"
              alt="Dois jovens se abraçando emocionados no camp"
              className={styles.sobreFotoPequena}
              loading="lazy"
            />
            <img
              src="/images/camp/2026/identidade/selo-youth-on-fire.png"
              alt=""
              aria-hidden="true"
              className={styles.sobreSelo}
            />
          </Reveal>
        </div>

        <div className={styles.destaquesGrid}>
          {DESTAQUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 70} className={styles.destaqueCard}>
                <span className={styles.destaqueIcon}>
                  <Icon size={22} />
                </span>
                <strong>{item.label}</strong>
                <span className={styles.destaqueTexto}>{item.texto}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SectionDivider color="#5a1a24" flip />

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

      <SectionDivider color="#6b1f2b" />

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
                {item.tabela && (
                  <table className={styles.faqTable}>
                    <thead>
                      <tr>
                        {item.tabela.colunas.map((coluna) => (
                          <th key={coluna}>{coluna}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.tabela.linhas.map((linha) => (
                        <tr key={linha[0]}>
                          {linha.map((celula) => (
                            <td key={celula}>{celula}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.ticketSection}>
        <Reveal className={styles.ticket}>
          <CampStamp className={styles.ticketStamp} />
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
                  <strong>2 a 4 de abril de 2027</strong>
                </div>
                <div>
                  <span className={styles.ticketLabel}>Local</span>
                  <strong>Mogi das Cruzes - SP</strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ticketAction}>
            <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              Fazer inscrição
              <ArrowUpRight size={18} />
            </a>
            <a
              href={WHATSAPP_GRUPO_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.btnSecondary}
            >
              <MessageCircle size={18} />
              Entrar no grupo
            </a>
          </div>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <Link to="/" className={styles.footerLink}>
          <MapPin size={14} />
          Legacy Santos · Igreja Lagoinha Santos
        </Link>
        <span className={styles.footerText}>Legacy Camp 27</span>
      </footer>
    </div>
  );
};

export default Camp2026;
