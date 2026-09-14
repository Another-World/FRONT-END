import SectionHeader from "../ui/SectionHeader";
import ServiceRow from "../ui/ServiceRow";

// Dados dos serviços.
// O .map() será usado para gerar cada linha automaticamente.
const services = [
  {
    number: "01",
    title: "Hardware",
    description:
      "Montagem, manutenção e suporte para computadores e equipamentos.",
  },
  {
    number: "02",
    title: "Redes",
    description:
      "Planejamento, configuração e manutenção de redes estáveis e seguras.",
  },
  {
    number: "03",
    title: "Desenvolvimento Web",
    description:
      "Criação de sites modernos, responsivos e alinhados aos objetivos do negócio.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-bg-section px-6 py-24 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1344px]">
        {/* Identificação da seção. */}
        <SectionHeader number="03" label="Serviços" />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Tecnologia pensada para funcionar.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-text-muted sm:text-lg">
              Da infraestrutura ao desenvolvimento, conectamos conhecimento
              técnico às necessidades reais de cada projeto.
            </p>
          </div>

          {/* Lista dos serviços. */}
          <div>
            {services.map((service) => (
              <ServiceRow
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}