import SectionHeader from "../ui/SectionHeader";

export default function MissionVisionValues() {
  // Array de objetos — cada objeto representa 1 card.
  // Isso é uma evolução do array de strings que já usamos (tipo o menu do Header):
  // aqui cada item tem VÁRIAS informações (título + texto), não só uma palavra.
  const items = [
    {
      title: "Missão",
      text: "Entregar tecnologia que funciona de verdade — do hardware ao código — resolvendo problemas reais dos nossos clientes.",
    },
    {
      title: "Visão",
      text: "Ser reconhecida como a ponte entre infraestrutura e experiências digitais, em qualquer escala de projeto.",
    },
    {
      title: "Valores",
      text: "Transparência, solução bem pensada e compromisso com o próximo passo do cliente, não só com a entrega atual.",
    },
  ];

  return (
    <section className="bg-bg-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader number="02" label="Missão, Visão e Valores" />

        {/* grid = organiza em grade (linhas E colunas), diferente do flex
            que só organiza em uma direção (linha OU coluna).
            "grid-cols-1 md:grid-cols-3" = 1 coluna no celular, 3 colunas a partir do tablet. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-white text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}