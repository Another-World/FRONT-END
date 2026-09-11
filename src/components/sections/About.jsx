import SectionHeader from "../ui/SectionHeader";
import Tag from "./Tag";

// Os textos das tags ficam em um array para evitar quatro blocos repetidos.
const areas = ["Hardware", "Redes", "Web", "Tecnologia"];

export default function About() {
  return (
    // O id conecta esta seção ao link "Quem somos" do Header.
    <section id="sobre" className="bg-bg-section px-6 py-24 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1344px]">
        {/* Componente reutilizável responsável pelo número e pelo nome da seção. */}
        <SectionHeader number="01" label="Sobre nós" />

        {/*
          No celular, todo o conteúdo fica em uma coluna.
          A partir de lg, título e texto ocupam duas colunas equilibradas.
        */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-20">
          <h2 className="max-w-[560px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Quem é a Another World?
          </h2>

          <div className="max-w-[590px] lg:pt-2">
            <p className="text-base leading-8 text-text-muted sm:text-lg">
              Somos uma empresa de tecnologia que transforma desafios em soluções
              práticas. Atuamos com infraestrutura, redes, hardware, suporte e
              desenvolvimento web para construir ambientes digitais eficientes,
              seguros e preparados para evoluir.
            </p>

            <p className="mt-6 text-sm leading-7 text-text-soft sm:text-base">
              Unimos conhecimento técnico, organização e proximidade para entender
              cada necessidade e entregar tecnologia que realmente funciona no dia
              a dia dos nossos clientes.
            </p>

            {/* flex-wrap permite que as tags quebrem de linha em telas menores. */}
            <div className="mt-9 flex flex-wrap gap-3" aria-label="Áreas de atuação">
              {areas.map((area) => (
                <Tag key={area}>{area}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
