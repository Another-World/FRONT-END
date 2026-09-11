// StatItem representa um número/indicador grande + uma descrição menor.
//
// Exemplo de uso:
// <StatItem value="03" label="Áreas de atuação" />
export default function StatItem({ value, label }) {
  return (
    <article className="border-t border-border pt-6">
      {/* value recebe o dado principal: 03, 01 ou ∞. */}
      <strong className="block text-6xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl">
        {value}
      </strong>

      {/* label recebe o texto explicativo abaixo do número. */}
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
        {label}
      </p>
    </article>
  );
}