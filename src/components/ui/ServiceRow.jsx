// ServiceRow representa uma linha individual da seção de serviços.
//
// Exemplo:
// <ServiceRow
//   number="01"
//   title="Hardware"
//   description="Montagem, manutenção e suporte para equipamentos."
// />
export default function ServiceRow({
  number,
  title,
  description,
  href = "#contato",
}) {
  return (
    <article className="group border-t border-border py-7 last:border-b sm:py-9">
      <a
        href={href}
        className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8"
      >
        {/* Número da linha: 01, 02 ou 03. */}
        <span className="text-xs font-semibold tracking-widest text-purple">
          {number}
        </span>

        {/* Área principal com título e explicação. */}
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-purple sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted sm:text-base">
            {description}
          </p>
        </div>

        {/* Seta visual que também indica que a linha é clicável. */}
        <span
          className="text-2xl text-text-muted transition-all group-hover:translate-x-1 group-hover:text-purple"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    </article>
  );
}