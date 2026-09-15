export default function Footer() {
  // Duas listas de dados — em vez de escrever cada linha do rodapé na mão,
  // guardamos os textos em arrays e deixamos o .map() desenhar.
  const navLinks = [
    "Quem somos",
    "Serviços",
    "Projetos",
    "Parceiros",
    "Contato",
  ];

  const contactInfo = ["E-mail", "Telefone", "São Paulo, Brasil"];
  //   const socialLinks = ["LinkedIn", "Instagram"];

  return (
    <footer className="bg-bg-footer border-t border-border">
      {/* "border-t" = borda só em cima (top), separando o footer do resto da página. */}

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Mesmo container padrão que usamos no Hero: largura máxima + centralizado. */}

        {/* Bloco de cima: logo + colunas, lado a lado */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* "flex-col md:flex-row" = empilha no celular, coloca lado a lado
              a partir de tablet/desktop. Isso é o que faz o footer virar
              uma coluna só quando a tela é pequena. */}

          {/* Logo + slogan */}
          <div>
            <p className="text-white text-6xl font-bold mb-3">ANOTHER WORLD</p>
            <p className="text-text-muted text-2xl">
              Conectando seu mundo ao futuro.
            </p>
          </div>

          {/* Coluna Navegação */}
          <div>
            <p className="text-purple text-xs font-semibold uppercase tracking-widest mb-4">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {/* <ul> = "unordered list", a tag certa pra uma lista de itens.
                  Poderia ser <div>, mas <ul>/<li> é mais correto semanticamente
                  (ajuda leitores de tela e o Google a entenderem que é uma lista). */}
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted text-sm hover:text-purple transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Contato */}
          <div>
            <p className="text-purple text-xs font-semibold uppercase tracking-widest mb-4">
              Contato
            </p>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <li key={info} className="text-text-muted text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Social
          <div>
            <p className="text-purple text-xs font-semibold uppercase tracking-widest mb-4">
              Social
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social}
                  
                    href="#"
                    className="text-text-muted text-sm hover:text-purple transition"
                  >
                    {social}
                </li>
              ))}
            </ul>
          </div>*/}
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border pt-8 ">
          <p className="text-text-faint text-xs ">
            © 2026 Another World. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}