import LineUpCard from "../../components/conference/LineUpCard";
import RedirectButton from "../../components/conference/RedirectButton";
import Timeline from "../../components/conference/Timeline";
import TicketCard from "../../components/conference/TicketCard";
import styles from "./conference.module.css";
import finalStyles from "./final.module.css";
import FAQ from "../../components/conference/Faq";

import { Instagram, AppWindow } from "lucide-react";

const FinalConference = () => {
  const REDIRECT_URL = "https://www.instagram.com/legacylagoinhasantos/";

  const LINEUP = [
    {
      name: "FHOP",
      description:
        "A FHOP (Florianópolis House of Prayer) music começou do transbordar da casa de oração em Florianópolis, onde líderes de louvor,  muitas vezes cantando as Escrituras em uma sala vazia viram  surgir canções genuínas que abençoariam a igreja de Cristo na Terra. ",
      image: "/images/conference/lineup/fhop.jpg",
    },
    {
      name: "Pr. Isaías Fernandes",
      description:
        "Isaías Fernandes é pastor, teólogo, advogado, professor, marido da Nubia e pai da Ísis. Atualmente é pastor auxiliar na Igreja Lagoinha Matriz. Também é o professor da Escola Bíblica Dominical e do Seminário Teológico Carisma.",
      image: "/images/conference/lineup/isaias.jpg",
    },
    {
      name: "Giovana Chartres",
      description:
        "Giovana Chartres é cantora e compositora cristã. Ganhou destaque nas redes sociais com seus vídeos descontraídos e também tem se dedicado à adoração por meio da música. Sua missão tem sido tocar vidas e propagar o Reino.",
      image: "/images/conference/lineup/giovana.jpg",
    },
    {
      name: "Cultura do Céu",
      description:
        "O Ministério Cultura do Céu foi Criado pelo cantor Davi Fernandes e seus filhos Kaleb e Josh, o Ministério Cultura do Céu nasceu com o propósito de conduzir pessoas a um encontro com Deus por meio da música.",
      image: "/images/conference/lineup/cultura.jpg",
    },
    {
      name: "Pr. Daniel Santana",
      description:
        "Daniel Santana é pastor na Igreja Lagoinha Santos, onde exerce seu ministério com dedicação e paixão. Casado com Renata, pai de Davi, Elisa e Helena. É graduado no seminário Teológico Carisma, onde aprofundou seus estudos sobre a Palavra de Deus.",
      image: "/images/conference/lineup/daniel.jpg",
    },
    {
      name: "Legacy Crew",
      description:
        "A Legacy Crew é formada pelos líderes e músicos que conduzem nossa jornada com energia, propósito e adoração. Eles preparam o ambiente para cada momento da conferência, guiando a experiência com paixão e excelência.",
      image: "/images/conference/lineup/legacy.jpg",
    },
  ];

  const TICKETS = [
    {
      status: "Comprar",
      titulo: "Pré-Venda",
      valor: "65,00",
      isActive: true,
      image: "/images/conference/tickets/pre-venda-esgotado.png",
    },
    {
      status: "Comprar",
      titulo: "Lote 1",
      valor: "",
      isActive: true,
      image: "/images/conference/tickets/lote1-esgotado.png",
    },
    {
      status: "Comprar",
      titulo: "Lote 2",
      valor: "",
      isActive: true,
      image: "/images/conference/tickets/lote2-esgotado.png",
    },
    {
      status: "Comprar",
      titulo: "Lote 3",
      valor: "",
      isActive: true,
      image: "/images/conference/tickets/lote3-esgotado.png",
    },
  ];

  return (
    <>
      <section className={finalStyles.firstBanner}>
        <div className={finalStyles.container}>
          <div title="Legacy Conference" className={finalStyles.mainLogo}></div>

          <div className={finalStyles.firstBannerText}>
            <img
              src="/images/conference/logo-final-azul.png"
              alt="Legacy Conference"
              className={finalStyles.logo}
            />
            <p style={{ marginBottom: 30 }}>
              {/* Nos dias <strong>12 e 13 de setembro</strong>, vivemos
              ministrações intensas, adoração profunda e experiências
              sobrenaturais. Um ambiente onde o céu invade a terra e corações
              são transformados.  */}
              Nos dias 12 e 13 de setembro, a{" "}
              <strong>Legacy Conference 2025</strong> reuniu centenas de jovens
              e famílias para dois dias inesquecíveis. Foram ministrações
              intensas, adoração profunda e experiências sobrenaturais que
              marcaram cada coração presente.
              <br />
              <br />
              Vivemos um ambiente onde o céu verdadeiramente invadiu a terra: a
              cada palavra, canção e oração, a presença de Deus foi real e
              transformadora. Pessoas foram curadas, renovadas e despertadas
              para viver o propósito eterno.
              <br />
              <br />A Legacy Conference não foi apenas um evento, mas um{" "}
              <strong>mover de Deus</strong> que uniu gerações em um só clamor.
              O que experimentamos nesses dias ecoará em nossa caminhada,
              inspirando-nos a continuar levando a luz do evangelho e a presença
              de Jesus por onde formos.
            </p>

            <RedirectButton redirectUrl={REDIRECT_URL} />
          </div>
        </div>

        <div className={`${styles.caroussel} ${finalStyles.caroussel}`}>
          <div className={`${styles.track} ${finalStyles.track}`}>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
            <span>LEGACY CONFERENCE 2025</span>
            <span> - </span>
          </div>
        </div>
        {/* <div className={styles.fade}></div> */}
      </section>

      <section className={finalStyles.secondBanner}>
        <div className={finalStyles.container}>
          <div className={finalStyles.textContainer}>
            <h2>Quando o Céu Invade a Terra</h2>

            <p>
              {/* <strong>Quando o céu invade a terra</strong> não é apenas um tema
              — é um clamor. Representa o momento em que a atmosfera do céu
              desce sobre nós, transformando ambientes, vidas e realidades. É
              sobre <strong>viver o sobrenatural de Deus </strong> aqui e agora,
              experimentando Sua presença de forma palpável, intensa e
              transformadora.
              <br />
              Na Legacy Conference 2025, cremos que o céu vai invadir a terra
              por meio de adoração sincera, palavras proféticas e corações
              rendidos. Será um tempo onde a vontade de Deus será feita na terra
              como no céu, e uma geração será marcada para viver o propósito
              eterno. */}
              <strong>Quando o céu invade a terra</strong> não foi apenas um
              tema — foi uma realidade que experimentamos. A atmosfera do céu
              desceu sobre nós, transformando ambientes, vidas e corações.
              Vivemos o sobrenatural de Deus de forma palpável, intensa e
              transformadora.
              <br />
              <br />
              Na <strong>Legacy Conference 2025</strong> vimos adoração sincera,
              palavras proféticas e corações rendidos. Foi um tempo em que a
              vontade de Deus se manifestou na terra como no céu, marcando uma
              geração para viver o Seu propósito eterno.
            </p>
          </div>
          <div
            title="Quando o Céu Invade a Terra"
            className={finalStyles.earth}
          ></div>
        </div>
      </section>

      <section
        className={`${styles.timelineSection} ${finalStyles.timelineSection}`}
      >
        <div className={finalStyles.container}>
          <div className={finalStyles.textContainer}>
            <h2> Rumo à Legacy Conference </h2>
            <p>
              <i>
                A jornada até a Legacy Conference 2025 foi marcada por oração,
                expectativa e fé. Cada preparação foi um passo rumo a algo
                extraordinário que Deus já havia separado para nós.
              </i>
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      <section
        className={`${styles.lineUpSection} ${finalStyles.lineUpSection}`}
      >
        <div className={finalStyles.lineUpContainer}>
          <div className={finalStyles.textContainer}>
            <h2> LINE-UP </h2>
            <p>
              <i>
                Cada nome aqui carrega uma palavra, uma missão e um impacto pra
                essa geração.
              </i>
            </p>
          </div>
          <ul className={`${styles.lineUpList} ${finalStyles.lineUpList}`}>
            {LINEUP.map((item) => (
              <LineUpCard key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`${finalStyles.ticketsSection} ${styles.ticketsSection} `}
      >
        <div
          className={`${styles.ticketsContent} ${finalStyles.ticketsContent}`}
        >
          <div className={finalStyles.textContainer}>
            <h2> INGRESSOS </h2>
            <p>
              <i>
                A Legacy Conference 2025 já aconteceu e foi um tempo
                inesquecível na presença de Deus. Somos gratos a todos que
                participaram e viveram esses dias conosco. Enquanto isso,
                acompanhe nossas redes sociais para rever os melhores momentos e
                ficar por dentro do que vem pela frente.
              </i>
            </p>
          </div>
          <ul className={`${styles.ticketsList} ${finalStyles.ticketsList}`}>
            {TICKETS.map((ticket) => (
              <TicketCard
                titulo={ticket.titulo}
                status={ticket.status}
                valor={ticket.valor}
                isActive={ticket.isActive}
                image={ticket.image}
                url={ticket.url}
              />
            ))}
          </ul>
        </div>
      </section>

      <FAQ />

      <footer className={finalStyles.footer}>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/legacylagoinhasantos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className={finalStyles.footerIcon} />
            </a>
          </li>
          <li>
            <a
              href="/"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <AppWindow className={finalStyles.footerIcon} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default FinalConference;
