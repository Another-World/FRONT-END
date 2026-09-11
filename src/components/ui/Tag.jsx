// children representa o conteúdo escrito entre <Tag> e </Tag>.
// className permite acrescentar classes sem alterar o estilo padrão.
export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-bg-card-inner px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-purple ${className}`}
    >
      {children}
    </span>
  );
}