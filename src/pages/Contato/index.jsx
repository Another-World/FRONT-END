import SectionHeader from "../../components/ui/SectionHeader";

export default function Contato() {
  return (
    <section className="bg-bg-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader number="05" label="Contato" />
        <p className="text-text-muted text-sm leading-relaxed mt-6 max-w-2xl">
          Fale com a gente para tirar dúvidas, pedir um orçamento ou iniciar um projeto.
        </p>
      </div>
    </section>
  );
}
