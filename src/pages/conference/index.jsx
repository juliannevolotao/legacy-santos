import styles from "./conference.module.css";
import RedirectButton from "../../components/conference/RedirectButton";
import Timeline from "../../components/conference/Timeline";
import LineUpCard from "../../components/conference/LineUpCard";
import FAQ from "../../components/conference/Faq";
import TicketCard from "../../components/conference/TicketCard";

const PreConference = () => {
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
      image: "/images/conference/tickets/pre-venda-esgotado.png",
    },
    {
      status: "Comprar",
      titulo: "Lote 1",
      valor: "",
      isActive: true,
      image: "/images/conference/tickets/lote1.png",
      url: REDIRECT_URL,
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
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">

      <h1 className="font-bold"> Em Breve </h1>
      <p className="text-sm max-w-96 text-center">Estamos preparando uma experiência incrível para você! Em breve, divulgaremos mais informações sobre a conferência. Fique atento às nossas redes sociais e ao nosso site para não perder nenhuma novidade!</p>
    </div>
    </>
  );
};

export default PreConference;
