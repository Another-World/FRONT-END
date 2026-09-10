import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-bg-section py-24 md:py-32">
      {/* "py-24 md:py-32" = padding vertical.
          Em telas pequenas usa 24 (6rem), em "md" (medium/tablet) usa 32 (8rem).
          Isso deixa mais compactado em celular e mais espaçado em desktop. */}

      <div className="max-w-7xl mx-auto px-8">
        {/* Mesmo container que a gente vai usar em todas as seções.
            "max-w-7xl" = largura máxima.
            "mx-auto" = centraliza.
            "px-8" = espaço interno das laterais. */}

        {/* Subtítulo roxo */}
        <p className="text-purple text-xs font-semibold uppercase tracking-widest mb-6">
          Tecnologia — Infraestrutura — Web
        </p>

        {/* Título gigante com efeito de duas linhas de cores diferentes */}
        <div className="mb-8">
          <h1 className="text-white text-7xl md:text-8xl font-bold leading-tight mb-4">
            ANOTHER
          </h1>
          {/* "text-7xl md:text-8xl" = em celular é 3.5rem, em tablet/desktop é 4rem.
              "leading-tight" = reduz o espaço entre linhas (mais compactado). */}

          <h1 className="text-text-faint text-7xl md:text-8xl font-bold leading-tight">
            WORLD
          </h1>
          {/* A palavra "WORLD" em cor mais escura (text-text-faint = #706878)
              Isso cria aquele contraste visual legal onde "ANOTHER" é branco e "WORLD" é cinzento. */}
        </div>

        {/* Descrição */}
        <p className="text-text-muted text-lg md:text-2xl font-medium max-w-2xl mb-8">
          Conectando seu mundo ao futuro.
        </p>
        {/* "max-w-2xl" = limita a largura do texto pra não ficar muito comprido.
            Texto comprido demais é ruim de ler. */}

        {/* Parágrafo maior explicando mais */}
        <p className="text-text-soft text-base md:text-lg max-w-2xl mb-12">
          Hardware, redes e desenvolvimento web em uma mesma visão: construir
          tecnologia que funciona.
        </p>

        {/* Botão */}
        <Button variant="white">Explorar portfólio</Button>
      </div>
    </section>
  );
}