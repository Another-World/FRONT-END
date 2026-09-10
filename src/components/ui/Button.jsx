// Isso aqui é "desestruturação de props" — em vez de escrever props.children,
// props.variant, a gente já "abre a caixa" e pega o que precisa direto.
export default function Button({ children, variant = "outline", ...props }) {
  // "children" é tudo que você colocar ENTRE as tags do componente.
  // Tipo: <Button>Falar conosco</Button> → "Falar conosco" vira o children.

  // variant = "outline" quer dizer: se ninguém disser qual variant usar,
  // usa "outline" como padrão. Isso evita erro se você esquecer de passar.

  // Aqui é um objeto (tipo um dicionário) onde a CHAVE é o nome da variant
  // e o VALOR são as classes do Tailwind pra aquele visual.
  const variants = {
    // botão com borda roxa e fundo escuro (o do cabeçalho)
    outline: "bg-bg-card-inner border border-purple text-purple",
    // botão branco sólido (o do Hero, "Explorar portfólio")
    white: "bg-white text-bg-dark",
    // botão roxo sólido (o do CTA final)
    solid: "bg-purple text-white",
  };

  return (
    <div>
      <button
        // Aqui a gente CONCATENA (gruda) duas strings de classes:
        // uma fixa (que todo botão tem) + a que muda de acordo com a variant.
        // O `${...}` dentro de crase é chamado "template literal" —
        // é um jeito de misturar texto com variável dentro de uma string.
        className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-full
        text-[11px] font-semibold uppercase tracking-wide
        whitespace-nowrap
        transition hover:opacity-90
        ${variants[variant]}
        `}
        // "...props" pega qualquer outra prop que vier (tipo onClick) e
        // joga ela pro <button> de verdade. Assim seu componente aceita
        // tudo que um botão HTML normal aceitaria, sem você reescrever.
        {...props}
      >
        {children}
      </button>
      
    </div>
  );
}
