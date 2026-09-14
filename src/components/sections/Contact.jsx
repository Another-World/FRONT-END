import { useState } from "react";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

// Lista usada no <select> de serviços.
const services = [
  "Hardware",
  "Redes",
  "Desenvolvimento Web",
  "Suporte técnico",
  "Outro",
];

// O ViaCEP preenche parte desses campos.
// Número e complemento continuam sendo preenchidos pelo cliente.
const initialAddress = {
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

// A URL será definida futuramente no arquivo .env.
// Exemplo: VITE_QUOTE_API_URL=https://sua-api.com/orcamentos
const quoteApiUrl = import.meta.env.VITE_QUOTE_API_URL;

export default function Contact() {
  const [address, setAddress] = useState(initialAddress);

  const [cepStatus, setCepStatus] = useState({
    type: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  // Remove qualquer caractere que não seja número e limita a 8 dígitos.
  function formatCep(value) {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    // Após os cinco primeiros números, insere o hífen.
    return numbers.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  // Atualiza qualquer campo do endereço.
  function handleAddressChange(event) {
    const { name, value } = event.target;

    setAddress((currentAddress) => ({
      ...currentAddress,
      [name]: name === "cep" ? formatCep(value) : value,
    }));

    // Remove mensagens antigas enquanto o cliente edita o CEP.
    if (name === "cep") {
      setCepStatus({ type: "", message: "" });
    }
  }

  // Consulta o ViaCEP ao sair do campo de CEP.
  async function searchCep() {
    const cep = address.cep.replace(/\D/g, "");

    if (!cep) {
      return;
    }

    if (cep.length !== 8) {
      setCepStatus({
        type: "error",
        message: "Digite um CEP válido com 8 números.",
      });
      return;
    }

    try {
      setCepStatus({
        type: "loading",
        message: "Buscando endereço...",
      });

      const response = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      if (!response.ok) {
        throw new Error("Não foi possível consultar o CEP.");
      }

      const data = await response.json();

      // O ViaCEP retorna erro: true para CEP válido, porém inexistente.
      if (data.erro) {
        setCepStatus({
          type: "error",
          message: "CEP não encontrado. Confira o número ou preencha manualmente.",
        });
        return;
      }

      setAddress((currentAddress) => ({
        ...currentAddress,
        cep: data.cep || currentAddress.cep,
        street: data.logradouro || "",
        neighborhood: data.bairro || "",
        city: data.localidade || "",
        state: data.uf || "",
      }));

      setCepStatus({
        type: "success",
        message: "Endereço preenchido automaticamente. Confira os dados.",
      });
    } catch {
      setCepStatus({
        type: "error",
        message:
          "Não foi possível consultar o CEP. Preencha o endereço manualmente.",
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    // Reúne todos os campos do formulário em um objeto.
    const payload = Object.fromEntries(new FormData(form));

    // O endereço controlado pelo React também é incluído no envio.
    const quoteData = {
      ...payload,
      ...address,
    };

    if (!quoteApiUrl) {
      setSubmitStatus({
        type: "error",
        message:
          "O envio de orçamentos ainda não está configurado. Tente novamente mais tarde.",
      });

      return;
    }

    try {
      setSubmitStatus({
        type: "loading",
        message: "Enviando sua solicitação...",
      });

      const response = await fetch(quoteApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar orçamento.");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Solicitação enviada com sucesso. Entraremos em contato por e-mail ou WhatsApp.",
      });

      form.reset();
      setAddress(initialAddress);
      setCepStatus({ type: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Não foi possível enviar sua solicitação agora. Tente novamente mais tarde.",
      });
    }
  }

  const cepMessageColor = {
    loading: "text-text-muted",
    success: "text-purple",
    error: "text-red-400",
  };

  const submitMessageColor = {
    loading: "text-text-muted",
    success: "text-purple",
    error: "text-red-400",
  };

  return (
    <section
      id="contato"
      className="bg-bg-section px-6 py-24 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1344px]">
        <SectionHeader number="05" label="Orçamento" />

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Conte seu projeto. Nós cuidamos da tecnologia.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-text-muted sm:text-lg">
              Preencha as informações abaixo para solicitar um orçamento.
              Nossa equipe analisará sua necessidade e retornará por e-mail ou
              WhatsApp.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-faint">
                Como funciona
              </p>

              <ol className="mt-5 space-y-4 text-sm leading-7 text-text-muted">
                <li>
                  <span className="mr-3 text-purple">01</span>
                  Você envia os dados do projeto.
                </li>
                <li>
                  <span className="mr-3 text-purple">02</span>
                  Analisamos a necessidade e o escopo.
                </li>
                <li>
                  <span className="mr-3 text-purple">03</span>
                  Retornamos com os próximos passos e o orçamento.
                </li>
              </ol>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-bg-card p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Nome completo
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Empresa
                </span>

                <input
                  type="text"
                  name="company"
                  placeholder="Nome da empresa (opcional)"
                  className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  E-mail
                </span>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="voce@email.com"
                  className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  WhatsApp
                </span>

                <input
                  type="tel"
                  name="whatsapp"
                  required
                  inputMode="tel"
                  placeholder="(11) 99999-9999"
                  className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                />
              </label>
            </div>

            <label className="mt-8 flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Serviço de interesse
              </span>

              <select
                name="service"
                required
                defaultValue=""
                className="border-b border-border bg-bg-card py-3 text-sm text-white outline-none focus:border-purple"
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Localização do projeto
              </p>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    CEP
                  </span>

                  <input
                    type="text"
                    name="cep"
                    required
                    inputMode="numeric"
                    maxLength="9"
                    value={address.cep}
                    onChange={handleAddressChange}
                    onBlur={searchCep}
                    placeholder="00000-000"
                    className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    Estado
                  </span>

                  <input
                    type="text"
                    name="state"
                    required
                    maxLength="2"
                    value={address.state}
                    onChange={handleAddressChange}
                    placeholder="SP"
                    className="border-b border-border bg-transparent py-3 text-sm uppercase text-white outline-none placeholder:text-text-faint focus:border-purple"
                  />
                </label>
              </div>

              {cepStatus.message && (
                <p
                  className={`mt-3 text-xs ${cepMessageColor[cepStatus.type]}`}
                  role="status"
                >
                  {cepStatus.message}
                </p>
              )}

              <label className="mt-6 flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Endereço
                </span>

                <input
                  type="text"
                  name="street"
                  required
                  value={address.street}
                  onChange={handleAddressChange}
                  placeholder="Rua, Avenida ou Logradouro"
                  className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                />
              </label>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    Número
                  </span>

                  <input
                    type="text"
                    name="number"
                    required
                    value={address.number}
                    onChange={handleAddressChange}
                    placeholder="Número"
                    className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    Complemento
                  </span>

                  <input
                    type="text"
                    name="complement"
                    value={address.complement}
                    onChange={handleAddressChange}
                    placeholder="Apartamento, sala, bloco..."
                    className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                  />
                </label>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    Bairro
                  </span>

                  <input
                    type="text"
                    name="neighborhood"
                    required
                    value={address.neighborhood}
                    onChange={handleAddressChange}
                    placeholder="Seu bairro"
                    className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    Cidade
                  </span>

                  <input
                    type="text"
                    name="city"
                    required
                    value={address.city}
                    onChange={handleAddressChange}
                    placeholder="Sua cidade"
                    className="border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
                  />
                </label>
              </div>
            </div>

            <label className="mt-8 flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Descreva sua necessidade
              </span>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Conte o que você precisa, prazo desejado e outras informações importantes."
                className="resize-none border-b border-border bg-transparent py-3 text-sm text-white outline-none placeholder:text-text-faint focus:border-purple"
              />
            </label>

            <label className="mt-7 flex items-start gap-3 text-xs leading-5 text-text-muted">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 accent-purple"
              />

              <span>
                Autorizo o uso destes dados para análise do orçamento e contato
                por e-mail ou WhatsApp.
              </span>
            </label>

            <div className="mt-8">
              <Button
                variant="solid"
                type="submit"
                disabled={submitStatus.type === "loading"}
              >
                {submitStatus.type === "loading"
                  ? "Enviando..."
                  : "Solicitar orçamento"}
              </Button>

              {submitStatus.message && (
                <p
                  className={`mt-4 text-sm ${submitMessageColor[submitStatus.type]}`}
                  role="status"
                  aria-live="polite"
                >
                  {submitStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}