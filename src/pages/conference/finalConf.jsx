import LineUpCard from "../../components/conference/LineUpCard";
import RedirectButton from "../../components/conference/RedirectButton";
import Timeline from "../../components/conference/Timeline";
import TicketCard from "../../components/conference/TicketCard";
import styles from "./conference.module.css";
import finalStyles from "./final.module.css";
import FAQ from "../../components/conference/Faq";

import { Instagram, AppWindow } from "lucide-react";

const FinalConference = () => {
  const REDIRECT_URL = "https://articket.com.br/e/4095/legacy-conf";

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
      description: "O Ministério Cultura do Céu foi Criado pelo cantor Davi Fernandes e seus filhos Kaleb e Josh, o Ministério Cultura do Céu nasceu com o propósito de conduzir pessoas a um encontro com Deus por meio da música.",
      image: "/images/conference/lineup/cultura.jpg",
    },
    {
      name: "Pr. Daniel Santana",
      description: "Daniel Santana é pastor na Igreja Lagoinha Santos, onde exerce seu ministério com dedicação e paixão. Casado com Renata, pai de Davi, Elisa e Helena. É graduado no seminário Teológico Carisma, onde aprofundou seus estudos sobre a Palavra de Deus.",
      image: "/images/conference/lineup/daniel.jpg",
    },
    {
      name: "Legacy Crew",
      description: "A Legacy Crew é formada pelos líderes e músicos que conduzem nossa jornada com energia, propósito e adoração. Eles preparam o ambiente para cada momento da conferência, guiando a experiência com paixão e excelência.",
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
      image: "/images/conference/tickets/lote3.png",
      url: REDIRECT_URL,
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
            <p>
              Nos dias <strong>12 e 13 de setembro</strong>, viva ministrações
              intensas, adoração profunda e experiências sobrenaturais. Um
              ambiente onde o céu invade a terra e corações são transformados.
            </p>

            <RedirectButton redirectUrl={REDIRECT_URL} />
          </div>
        </div>

        <div className={`${styles.caroussel} ${finalStyles.caroussel}`}>
          <div className={`${styles.track} ${finalStyles.track}`}>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>LOTE 2 LIBERADO</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
          </div>
        </div>
        {/* <div className={styles.fade}></div> */}
      </section>

      <section className={finalStyles.secondBanner}>
        <div className={finalStyles.container}>
          <div className={finalStyles.textContainer}>
            <h2>Quando o Céu Invade a Terra</h2>

            <p>
              <strong>Quando o céu invade a terra</strong> não é apenas um tema
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
              eterno.
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
                Acompanhe os marcos que nos preparam para viver algo
                extraordinário na Legacy Conference.
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
                A cada dia revelamos mais do que Deus tem preparado para a
                Legacy Conference 2025. Garanta já o seu ingresso e viva tudo o
                que Ele vai fazer nesses dias.
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
              href="https://www.legacysantos.com.br"
              target="_blank"
              rel="noopener noreferrer"
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
