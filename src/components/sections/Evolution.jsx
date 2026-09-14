import SectionHeader from "../ui/SectionHeader";
import StatItem from "../ui/StatItem";

// Cada objeto representa um indicador da seção.
// Assim evitamos repetir três blocos <StatItem /> manualmente.
const stats = [
  { value: "03", label: "Áreas de atuação" },
  { value: "01", label: "Visão integrada" },
  { value: "∞", label: "Próximo passo" },
];

export default function Evolution() {
  return (
    /*
      id="evolucao" permite criar um link futuro como:
      <a href="#evolucao">Nossa evolução</a>
    */
    <section
      id="evolucao"
      className="border-y border-border bg-bg-dark px-6 py-24 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1344px]">
        {/* Número e identificação padrão das seções. */}
        <SectionHeader number="02" label="Nossa evolução" />

        <div className="mt-12 lg:mt-16">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Crescemos com cada desafio que escolhemos resolver.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            Nossa evolução acontece na prática: conectando diferentes áreas da
            tecnologia para construir soluções mais completas e relevantes.
          </p>
        </div>

        {/*
          grid = organiza os indicadores.
          Em celular: uma coluna.
          Em telas médias: três colunas lado a lado.
        */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            /*
              key identifica cada item da lista para o React.
              ...stat espalha value e label para dentro de StatItem:
              <StatItem value={stat.value} label={stat.label} />
            */
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}