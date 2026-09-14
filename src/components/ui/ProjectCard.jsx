// ProjectCard representa um projeto individual do portfólio.
export default function ProjectCard({
  number,
  category,
  title,
  description,
  href = "#contato",
}) {
  return (
    <article className="group border border-border bg-bg-card p-6 transition-colors duration-300 hover:bg-bg-card-inner sm:p-8">
      <a href={href} className="block">
        {/* Número e categoria do projeto. */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest text-purple">
            {number}
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-faint">
            {category}
          </span>
        </div>

        {/* Conteúdo principal do card. */}
        <h3 className="mt-16 text-2xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-purple sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-text-muted">
          {description}
        </p>

        {/* Indicador visual de navegação. */}
        <span
          className="mt-8 inline-block text-2xl text-text-muted transition-all group-hover:translate-x-1 group-hover:text-purple"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    </article>
  );
}