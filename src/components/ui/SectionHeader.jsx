export default function SectionHeader({ number, label }) {
  // Esse componente é bem mais simples: só recebe DUAS props
  // (number e label) e organiza elas uma embaixo da outra.

  return (
    // "flex flex-col" = empilha os filhos na vertical (column).
    // Se fosse só "flex" ele empilharia na horizontal, lado a lado.
    <div className="flex flex-col gap-2">
      <span className="text-purple text-xs font-semibold">
        {number}
      </span>
      <span className="text-purple text-[10px] font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}