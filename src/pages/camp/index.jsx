import React, { useRef } from "react";
import { X, MapPin, Calendar, Users, Bus } from "lucide-react";

const Camp = () => {
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

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gray-100 text-white">
        <div className="max-w-[1400px] mx-auto">
          <img
            src="/images/camp/landing-header.png"
            alt="Acampamento Legacy Santos"
            className="w-full h-auto rounded-lg mb-8 max-w-[1400px]"
          />
          <div className="flex items-center gap-8 justify-between max-w-[1200px] mx-auto">
            <div className="flex flex-col items-start   text-black">
              <h1 className="font-bold mb-4 uppercase">Legacy Camp</h1>
              <p className="text-left mb-4 max-w-[440px]">
                O Legacy Camp é um encontro transformador para jovens do Legacy,
                focado em crescimento espiritual, comunhão e momentos de
                aprendizado, louvor e diversão. É uma oportunidade de fortalecer
                a fé, fazer novas amizades e viver experiências que inspiram a
                caminhada com Deus.
              </p>
              <button
                onClick={openModal}
                className="btn uppercase px-8 py-3 font-semibold  text-black border-black rounded-lg shadow-md transition"
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
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-semibold mb-6">O que é o Camp?</h2>
          <p className="max-w-2xl mx-auto mb-10">
            O Acampamento Legacy é um retiro cristão voltado para jovens adultos
            (18 a 35 anos), onde vivemos momentos marcantes de adoração, amizade
            e transformação espiritual.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Fé", "Comunhão", "Diversão", "Propósito"].map((item) => (
              <div
                key={item}
                className="p-6 bg-white rounded-xl shadow-md border border-black w-40"
              >
                <p className="font-semibold text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações principais */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 ">
            Informações importantes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar size={36} className="mb-2 text-black" />
              <p className="font-semibold ">13 a 15 de abril de 2026</p>
              <p className="text-sm text-[#555555]">
                (sexta, sábado e domingo)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={36} className="mb-2 text-black" />
              <p className="font-semibold">São Paulo</p>
              <p className="text-sm text-[#555555]">Local a ser divulgado</p>
            </div>
            <div className="flex flex-col items-center">
              <Bus size={36} className="mb-2 text-black" />
              <p className="font-semibold ">Saída sexta às 19h</p>
              <p className="text-sm text-[#555555]">Igreja Lagoinha Santos</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={36} className="mb-2 text-black" />
              <p className="font-semibold ">18 a 35 anos</p>
              <p className="text-sm text-[#555555]">Público jovem adulto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      {/* <section className="py-16 bg-[#FEEBCB]">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#2C7A7B]">
          Momentos do Camp
        </h2>
        <div className="carousel w-full max-w-5xl mx-auto rounded-xl shadow-lg">
          {["/camp1.jpg", "/camp2.jpg", "/camp3.jpg", "/camp4.jpg"].map(
            (img, i) => (
              <div key={i} id={`slide${i}`} className="carousel-item w-full">
                <img
                  src={img}
                  className="w-full object-cover h-96 rounded-lg"
                  alt={`Camp ${i}`}
                />
              </div>
            )
          )}
        </div>
      </section> */}

      {/* Call to action final */}
      <section className="py-20 text-center bg-[#9e9e9e] text-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para viver essa experiência?
          </h2>
          <p className="mb-8">
            Garanta sua vaga agora e venha fazer parte do Legacy Camp!
          </p>
          <button
            onClick={openModal}
            className="btn px-8 py-3 font-semibold shadow-none rounded-lg transition"
          >
            Fazer inscrição
          </button>
        </div>
      </section>

      {/* Modal com form */}
      <dialog ref={dialogRef} className="modal" onClick={handleBackdropClick}>
        <div className="modal-box relative max-w-4xl bg-white rounded-2xl shadow-xl border ">
          <button
            className="absolute cursor-pointer right-4 top-4   transition"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h3 className="font-bold text-2xl  mb-4 text-center">
            🏕️ Formulário de Inscrição
          </h3>
          <p className="text-center  mb-6">
            Preencha o formulário abaixo para garantir sua vaga no acampamento!
          </p>

          <div className="rounded-xl overflow-hidden border shadow-inner bg-[#E6FFFA]">
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
