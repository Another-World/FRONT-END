import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

// Dados dos projetos exibidos no portfólio.
const projects = [
  {
    number: "01",
    category: "Infraestrutura",
    title: "Ambientes preparados para crescer",
    description:
      "Projetos de infraestrutura organizados, seguros e pensados para acompanhar a evolução do negócio.",
  },
  {
    number: "02",
    category: "Web",
    title: "Presença digital com propósito",
    description:
      "Sites responsivos e objetivos que transformam ideias em experiências digitais claras.",
  },
  {
    number: "03",
    category: "Suporte",
    title: "Tecnologia que continua funcionando",
    description:
      "Acompanhamento técnico para manter equipamentos, redes e sistemas operando com eficiência.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-bg-dark px-6 py-24 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1344px]">
        <SectionHeader number="04" label="Portfólio" />

        <div className="mt-12 flex flex-col justify-between gap-8 lg:mt-16 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Projetos que transformam possibilidades em resultados.
          </h2>

          <p className="max-w-sm text-sm leading-7 text-text-muted sm:text-base">
            Cada projeto combina estratégia, técnica e atenção aos detalhes.
          </p>
        </div>

        {/* Grid responsivo dos projetos. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}