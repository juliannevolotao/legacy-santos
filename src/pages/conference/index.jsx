import styles from "./conference.module.css";
import RedirectButton from "../../components/conference/RedirectButton";
import Timeline from "../../components/conference/Timeline";
import LineUpCard from "../../components/conference/LineUpCard";
import FAQ from "../../components/conference/Faq";
import TicketCard from "../../components/conference/TicketCard";

const Conference = () => {
  const REDIRECT_URL = "https://articket.com.br/e/4095/legacy-conf";

  const LINEUP = [
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
    {
      name: "",
      description: "",
      image: "",
    },
  ];

  const TICKETS = [
    {
      status: "Comprar",
      titulo: "Pré-Venda",
      valor: "65,00",
      isActive: true,
      image: "/images/conference/tickets/pre-venda.png",
      url: REDIRECT_URL,
    },
    {
      status: "Comprar",
      titulo: "Lote 1",
      valor: "",
      isActive: false,
      image: "/images/conference/tickets/lote1.png",
    },
    {
      status: "Comprar",
      titulo: "Lote 2",
      valor: "",
      isActive: false,
      image: "/images/conference/tickets/lote2.png",
    },
    {
      status: "Comprar",
      titulo: "Lote 3",
      valor: "",
      isActive: false,
      image: "/images/conference/tickets/lote3.png",
    },
  ];
  return (
    <>
      <section className={styles.bannerSection}>
        <div title="Legacy Conference" className={styles.logoGlitch}></div>

        <div className={styles.caroussel}>
          <div className={styles.track}>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
            <span>PRÉ-VENDA LIBERADA</span>
            <span>FAÇA SUA INSCRIÇÃO</span>
          </div>
        </div>
        <div className={styles.fade}></div>
      </section>

      <section className={styles.saveTheDateSection}>
        <div>
          <h2 className={styles.saveTheDateTitle}>
            SAVE <br /> THE DATE
          </h2>
          <h2 className={styles.saveTheDateDays}>
            {" "}
            12 & 13 <br /> DE SETEMBRO
          </h2>
          <div className={styles.saveTheDateButton}>
            {/* <h2>PRÉ INSCRIÇÃO</h2> */}
            <RedirectButton redirectUrl={REDIRECT_URL} />
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <h2> Rumo à Legacy Conference </h2>
        <p>
          <i>
            Acompanhe os marcos que nos preparam para viver algo extraordinário
            na Legacy Conference.
          </i>
        </p>
        <Timeline />
      </section>

      <section className={styles.lineUpSection}>
        <h2> LINE-UP </h2>
        <p>
          <i>
            Cada nome aqui carrega uma palavra, uma missão e um impacto pra essa
            geração.
          </i>
        </p>
        <ul className={styles.lineUpList}>
          {LINEUP.map(() => (
            <LineUpCard />
          ))}
        </ul>
      </section>

      <section className={styles.ticketsSection}>
        <div className={styles.ticketsContent}>
          <h2> INGRESSOS </h2>
          <p>
            <i>
              Você ainda não sabe tudo... Mas pode garantir que estará lá quando
              acontecer. Adquira seu ingresso e esteja pronto para o que será
              revelado.
            </i>
          </p>

          <ul className={styles.ticketsList}>
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

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7293.596178461087!2d-46.33952222387302!3d-23.93220287532263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03eaa0927381%3A0x9d53e12e248c8e4!2sIgreja%20Batista%20da%20Lagoinha%20Santos!5e0!3m2!1spt-BR!2sbr!4v1751080748775!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </section>

      <FAQ />

      <footer></footer>
    </>
  );
};

export default Conference;
