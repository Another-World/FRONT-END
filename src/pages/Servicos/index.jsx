import SectionHeader from "../../components/ui/SectionHeader";
import ServiceRow from "../../components/ui/ServiceRow";

const services = [
  {
    number: "01",
    title: "Hardware",
    description:
      "Montagem, manutenção e suporte para computadores, notebooks e equipamentos.",
  },
  {
    number: "02",
    title: "Redes",
    description:
      "Planejamento, configuração e manutenção de redes estáveis, organizadas e seguras.",
  },
  {
    number: "03",
    title: "Desenvolvimento Web",
    description:
      "Criação de sites e aplicações web responsivas, modernas e alinhadas às necessidades do negócio.",
  },
  
];

export default function Servicos() {
  return (
    <>
      <section
        id="servicos"
        className="bg-bg-section px-6 py-24 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1344px]">
          <SectionHeader number="03" label="Serviços" />

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Tecnologia pensada para resolver problemas reais.
              </h1>

              <p className="mt-6 max-w-md text-base leading-8 text-text-muted sm:text-lg">
                Oferecemos soluções em tecnologia para ajudar empresas e
                clientes a trabalhar com mais eficiência, segurança e
                organização.
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-text-soft sm:text-base">
                Conheça nossas principais áreas de atuação e encontre a solução
                ideal para cada necessidade.
              </p>
            </div>

            <div>
              {services.map((service) => (
                <ServiceRow
                  key={service.number}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  href="#contato"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg-dark px-6 py-24 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-purple">
                Nosso compromisso
              </span>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Mais do que oferecer tecnologia, queremos entregar soluções
                que realmente funcionam.
              </h2>
            </div>

            <a
              href="#contato"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-white transition-colors hover:border-purple hover:text-purple"
            >
              Falar conosco ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
