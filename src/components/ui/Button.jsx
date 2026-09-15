export default function Button({ children, variant = "outline", className = "", ...props }) {
  // Agora "className" sai separado do resto (...props), então dá pra
  // GRUDAR ele no final em vez de deixar substituir.
  const variants = {
    outline: "bg-bg-card-inner border border-purple text-purple",
    white: "bg-white text-bg-dark",
    solid: "bg-purple text-white",
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap transition hover:opacity-90 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}