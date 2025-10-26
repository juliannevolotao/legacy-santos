import React, { useRef, useState } from "react";
import { X, MapPin, Calendar, Users, Bus } from "lucide-react";
import campStyles from "./camp.module.css";

const Camp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const handleBackdropClick = (e) => {
    const dialog = dialogRef.current;
    const rect = dialog.querySelector(".modal-box").getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeModal();
    }
  };

  const faqData = [
    {
      question: "Quem pode participar?",
      answer:
        "Jovens de 18 a 35 anos que desejam viver um tempo intenso com Deus.",
    },
    {
      question: "Onde vai acontecer o camp?",
      answer: "O camp vai acontecer em Itapecerica da Serra, São Paulo.",
    },
    {
      question: "O que está incluso na inscrição?",
      answer:
        "A inscrição inclui hospedagem, alimentação, camiseta, transporte e todas as atividades do camp.",
    },
    {
      question: "Qual é o valor e as formas de pagamento?",
      answer: (
        <>
          O valor é R$ 640,00. Você pode escolher a melhor opção pra você:{" "}
          <br />
          <br />
          💸 À vista no Pix ou no cartão; <br />
          💰 Parcelado em até 6x no Pix (primeira parcela ainda neste mês de
          outubro); <br />
          💳 Parcelado em até 12x no cartão (com a taxa da maquininha). <br />
          <br />
          <strong>
            Para garantir sua vaga, é necessário pagar R$107,00, referente à
            primeira parcela — independente da forma de pagamento.
          </strong>
        </>
      ),
    },
    {
      question: "E se eu não conhecer ninguém?",
      answer:
        "Pode vir tranquilo(a)! O Camp é feito justamente pra novas conexões. Desde o primeiro dia, temos dinâmicas e grupos que ajudam todo mundo a se enturmar rapidinho.",
    },
    {
      question: "Como funciona o transporte?",
      answer: (
        <>
          Vamos todos juntos de ônibus! <br />
          <br />
          <strong>
            Por segurança e integração, não será permitido ir de carro.
          </strong>
        </>
      ),
    },
    {
      question: "Como funciona o transporte?",
      answer: (
        <>
          Vamos todos juntos de ônibus! <br />
          <br />
          <strong>
            Por segurança e integração, não será permitido ir de carro.
          </strong>
        </>
      ),
    },
    {
      question: "O que devo levar?",
      answer:
        "Em breve publicaremos uma lista completa do que levar, mas já pode ir separando roupas confortáveis, itens de higiene pessoal, Bíblia, caderno e caneta!",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center bg-[#b73426] bg-[url(/images/camp/fundo1.jpg)]  bg-cover bg-center text-white">
        <div className="max-w-[1400px] mx-auto relative pt-10 not-lg:pt-20">
          <img
            src="/images/camp/logo.png"
            alt="Acampamento Legacy Santos"
            className={`h-auto rounded-lg z-10 max-w-[300px] not-lg:max-w-[100px] absolute -top-[60px] not-lg:-top-[35px] -left-[170px] not-lg:-left-[20px] ${campStyles.mainLogo}`}
          />
          <div className="flex items-center z-20 not-lg:flex-col gap-8 justify-between max-w-[1200px] mx-auto">
            <div className="flex flex-col items-start text-[#ece0c1]">
              <h1 className="font-bold mb-4 uppercase tracking-tighter text-5xl">
                Legacy Camp
              </h1>
              <p className="text-left mb-4 max-w-[440px]">
                O Legacy Camp é um encontro transformador para jovens do Legacy,
                focado em crescimento espiritual, comunhão e momentos de
                aprendizado, louvor e diversão. É uma oportunidade de fortalecer
                a fé, fazer novas amizades e viver experiências que inspiram a
                caminhada com Deus.
              </p>
              <button
                onClick={openModal}
                className="btn px-8 bg-[#ece0c1] border-none text-[#b73426] py-3 font-semibold shadow-none rounded-lg transition uppercase"
              >
                Fazer inscrição
              </button>
            </div>
            <img
              src="/images/camp/foto-camp25.jpg"
              alt="Acampamento Legacy Santos"
              className="w-full h-auto rounded-lg max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sobre o camp */}
      <section className="py-16 not-lg:px-6 bg-[#f5ebd3] text-[#69351a] bg-[url(/images/camp/fundo3.jpg)] bg-cover bg-center text-center not-lg:text-left">
        <div className="max-w-[1400px] relative mx-auto flex flex-col items-center justify-center not-lg:items-start">
          <h2 className="text-3xl not-lg:text-4xl font-bold mb-6 ">
            O que é o Camp?
          </h2>

          <img
            src="/images/camp/logo2.png"
            alt="Acampamento Legacy Santos"
            className={`h-auto rounded-lg z-10 max-w-[300px] not-lg:max-w-[100px] absolute -top-[30px] right-[20px] not-lg:-right-[10px] ${campStyles.mainLogo}`}
          />

          <p className="max-w-[680px] mx-auto mb-2">
            O Legacy Camp é mais do que um simples acampamento — é um tempo
            separado pra viver algo novo com Deus e com pessoas que compartilham
            o mesmo propósito. Durante três dias intensos, a rotina fica pra
            trás e damos espaço pra aquilo que realmente importa: momentos de
            adoração profunda, conexões verdadeiras e experiências que
            transformam de dentro pra fora.
          </p>
          <p className="max-w-[680px] mx-auto mb-6">
            Aqui, cada detalhe foi pensado pra te levar a um encontro genuíno
            com a presença de Deus. É o lugar onde você pode rir, chorar,
            cantar, refletir e ser renovado — tudo em meio à natureza, à
            comunhão e à Palavra. <br />
            <br />
            <br />
            <strong>
              Mais do que um evento, o Camp é um marco — um legado que você vai
              levar pra vida.
            </strong>
          </p>
          <div className="flex flex-wrap justify-center gap-6 z-20">
            {["Fé", "Comunhão", "Propósito", "Renovação"].map((item) => (
              <div
                key={item}
                className="p-6 bg-[#1d9292] rounded-xl shadow-md  text-center w-40"
              >
                <p className="font-semibold text-[#f5ebd3]">{item}</p>
              </div>
            ))}
          </div>
          {/* <img
            src="/images/camp/map.png"
            alt="Acampamento Legacy Santos"
            className="absolute w-full h-auto rounded-lg max-w-3xl top-full z-10"
          /> */}
        </div>
      </section>

      {/* Informações principais */}
      <section className="py-16 not-lg:px-6 px-6 bg-[#f5ebd3] bg-[url(/images/camp/fundo3.jpg)] text-[#69351a]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-1 not-lg:text-4xl">
            Detalhes que você precisa saber
          </h2>
          <p className="mb-6 text-center">
            Tudo que vai te ajudar a se preparar pro fim de semana mais marcante
            do ano.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar size={36} className="mb-2 text-black" />
              <p className="font-semibold ">13 a 15 de março de 2026</p>
              <p className="text-sm text-[#b73426]">
                (sexta, sábado e domingo)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={36} className="mb-2 text-black" />
              <p className="font-semibold">São Paulo</p>
              <p className="text-sm text-[#b73426]">Itapecerica da Serra</p>
            </div>
            <div className="flex flex-col items-center">
              <Bus size={36} className="mb-2 text-black" />
              <p className="font-semibold ">Saída sexta às 19h</p>
              <p className="text-sm text-[#b73426]">Igreja Lagoinha Santos</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={36} className="mb-2 text-black" />
              <p className="font-semibold ">18 a 35 anos</p>
              <p className="text-sm text-[#b73426]">Público jovem adulto</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5ebd3] py-16 text-center bg-[url(/images/camp/fundo3.jpg)] bg-cover bg-center text-[#69351a] not-lg:px-6 not-lg:text-left">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl not-lg:text-4xl font-bold  text-center mb-1 not-lg:text-left">
            O cenário do <br />
            próximo Legacy Camp
          </h2>
          <p className="mb-6 text-center not-lg:text-left">
            Natureza, comunhão e presença — tudo no mesmo lugar.
          </p>
          <ul className="w-full flex-wrap flex">
            <li className=" w-1/3 not-lg:w-1/2  px-2 py-2">
              <div className="bg-black w-full h-64 not-lg:h-52  rounded-lg overflow-hidden">
                <img
                  src="/images/camp/1.jpeg"
                  alt="Acampamento Legacy Santos"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </li>
            <li className=" w-1/3 not-lg:w-1/2 px-2 py-2">
              <div className="bg-black w-full h-64 not-lg:h-52  rounded-lg overflow-hidden">
                <img
                  src="/images/camp/2.jpeg"
                  alt="Acampamento Legacy Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li className=" w-1/3 not-lg:w-1/2 px-2 py-2">
              <div className="bg-black w-full h-64 not-lg:h-52   rounded-lg overflow-hidden">
                <img
                  src="/images/camp/3.jpeg"
                  alt="Acampamento Legacy Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li className=" w-1/3 not-lg:w-1/2 px-2 py-2">
              <div className="bg-black w-full h-64 not-lg:h-52  rounded-lg overflow-hidden">
                <img
                  src="/images/camp/4.jpeg"
                  alt="Acampamento Legacy Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li className=" w-1/3 not-lg:w-1/2 px-2 py-2">
              <div className="bg-black w-full h-64 not-lg:h-52  rounded-lg overflow-hidden">
                <img
                  src="/images/camp/5.jpeg"
                  alt="Acampamento Legacy Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li className=" w-1/3 not-lg:w-1/2 px-2 py-2">
              <div className="bg-black w-full h-64 not-lg:h-52  rounded-lg overflow-hidden">
                <img
                  src="/images/camp/6.jpeg"
                  alt="Acampamento Legacy Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to action final */}
      <section className="py-20 text-center bg-[#69351a] text-[#ece0c1] not-lg:px-6 not-lg:text-left bg-[url(/images/camp/fundo2.jpg)] bg-cover bg-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-4 not-lg:text-left">
            Preparado para viver algo que vai marcar a sua história?
          </h2>
          <p className="mb-6 not-lg:text-left">
            As vagas são limitadas —{" "}
            <strong>garanta a sua e venha fazer parte do Legacy Camp!</strong>
          </p>
          <button
            onClick={openModal}
            className="btn px-8 bg-[#b73426] border-none text-[#ece0c1] py-3 font-semibold shadow-none rounded-lg transition uppercase"
          >
            Fazer inscrição
          </button>
        </div>
      </section>

      <section className="py-20 text-center bg-[#ece0c1] bg-[url(/images/camp/fundo3.jpg)] bg-cover bg-center text-[#69351a] not-lg:px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-1 w-full text-left">
            Possíveis dúvidas
          </h2>
          <p className="mb-8 w-full text-left">
            Tudo o que você precisa saber antes de viver o melhor fim de semana
            de 2026.
          </p>
          <ul className="list-none p-0 m-0">
            {faqData.map((item, index) => (
              <li key={index} className={`${index > 0 ? "mt-2" : ""} `}>
                <button
                  className="bg-[#b73426] text-[#f5ebd3] border-none font-bold w-full text-left py-4 px-6 text-sm flex justify-between items-center cursor-pointer"
                  onClick={() => toggleIndex(index)}
                >
                  {item.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`${
                    openIndex === index ? "block" : "hidden"
                  } rounded-none bg-[#962316] text-[#f5ebd3] p-4 text-left text-sm`}
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modal com form */}
      <dialog ref={dialogRef} className="modal" onClick={handleBackdropClick}>
        <div className="modal-box relative max-w-4xl bg-[#ebe3d1] rounded-2xl shadow-xl border ">
          <button
            className="absolute cursor-pointer right-4 top-4   transition"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h3 className="font-bold text-2xl text-[#69351a] mb-2 text-center">
            🏕️ Formulário de Inscrição
          </h3>
          <p className="text-center  mb-10 text-[#69351a]">
            Preencha o formulário abaixo para garantir sua vaga no acampamento!
          </p>

          <div className="rounded-xl overflow-hidden border shadow-inner bg-[#ece7d9]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScVGa4q5C87885QAwt1MA9czYLz0Y8djKsQaPlQ1LuWN7234Q/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulário de inscrição"
              className="rounded-lg"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Camp;
