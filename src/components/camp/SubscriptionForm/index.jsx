import { useState } from "react";
import styles from "./subscriptionform.module.css";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    cpf: "",
    rg: "",
    whatsapp: "",
    modeloCamiseta: "",
    tamanhoCamiseta: "",
    modoPagamento: "",
    termoParcelamento: false,
    termoPagamento: false,
    termoConduta: false,
    termoMidia: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleMaskedChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .substring(0, 14);
    }

    if (name === "rg") {
      formattedValue = value
        .replace(/\D/g, "") // remove tudo que não é número
        .replace(/(\d{2})(\d)/, "$1.$2") // adiciona o primeiro ponto após 2 dígitos
        .replace(/(\d{3})(\d)/, "$1.$2") // adiciona o segundo ponto após mais 3 dígitos
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2") // adiciona o hífen no final
        .substring(0, 12); // limita o tamanho total (12 chars)
    }

    if (name === "whatsapp") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 15);
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 Verifica se todos os campos estão preenchidos
    for (let key in formData) {
      if (formData[key] === "" || formData[key] === false) {
        alert(
          "Por favor, preencha todos os campos e aceite os termos obrigatórios."
        );
        return;
      }
    }

    const url =
      "https://script.google.com/macros/s/AKfycbxxS--KklRbY8vS5YwBypZOfxcei_r10KllaZddizSmnjzIJEseRMMVg0T-4lc4k9u-kA/exec";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.result === "success") {
        alert("Inscrição enviada com sucesso! 🎉");
        setFormData({
          nomeCompleto: "",
          dataNascimento: "",
          cpf: "",
          rg: "",
          whatsapp: "",
          modeloCamiseta: "",
          tamanhoCamiseta: "",
          modoPagamento: "",
          termoParcelamento: false,
          termoPagamento: false,
          termoConduta: false,
          termoMidia: false,
        });
      } else {
        alert("Erro ao enviar inscrição.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar inscrição.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Inscrição Camp Legacy</h2>

      <label>
        Nome completo
        <input
          type="text"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Data de nascimento
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        CPF
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleMaskedChange}
          required
        />
      </label>

      <label>
        RG
        <input
          type="text"
          name="rg"
          value={formData.rg}
          onChange={handleMaskedChange}
          required
        />
      </label>

      <label>
        WhatsApp
        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleMaskedChange}
          required
        />
      </label>

      <label>
        Modelo da camiseta
        <select
          name="modeloCamiseta"
          value={formData.modeloCamiseta}
          onChange={handleChange}
          required
        >
          <option value="">Selecione...</option>
          <option value="oversized">Oversized</option>
          <option value="normal">Normal</option>
        </select>
      </label>

      <label>
        Tamanho da camiseta
        <select
          name="tamanhoCamiseta"
          value={formData.tamanhoCamiseta}
          onChange={handleChange}
          required
        >
          <option value="">Selecione...</option>
          <option value="PP">PP</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
      </label>

      <label>
        Modo de pagamento
        <select
          name="modoPagamento"
          value={formData.modoPagamento}
          onChange={handleChange}
          required
        >
          <option value="">Selecione...</option>
          <option value="à vista">À vista</option>
          <option value="à vista cartão">À vista cartão</option>
          <option value="parcelado">Parcelado</option>
          <option value="parcelado cartão">Parcelado cartão</option>
        </select>
      </label>

      <div className={styles.termos}>
        <label>
          <input
            type="checkbox"
            name="termoParcelamento"
            checked={formData.termoParcelamento}
            onChange={handleChange}
            required
          />
          Estou ciente que quanto mais próximo do Camp, em menos vezes consigo
          parcelar no pix.
        </label>

        <label>
          <input
            type="checkbox"
            name="termoPagamento"
            checked={formData.termoPagamento}
            onChange={handleChange}
            required
          />
          Declaro que estou ciente da validação da minha inscrição mediante ao
          pagamento do valor total do retiro.
        </label>

        <label>
          <input
            type="checkbox"
            name="termoConduta"
            checked={formData.termoConduta}
            onChange={handleChange}
            required
          />
          Declaro que me comprometo a manter uma boa conduta e seguir as regras
          do evento.
        </label>

        <label>
          <input
            type="checkbox"
            name="termoMidia"
            checked={formData.termoMidia}
            onChange={handleChange}
            required
          />
          Autorizo o uso da minha imagem em fotos e vídeos do retiro.
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Enviar inscrição
      </button>
    </form>
  );
};

export default SubscriptionForm;
