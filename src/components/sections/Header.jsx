// Importa o useState, usado para controlar se o menu mobile está aberto ou fechado.
import { useState } from "react";

// Importa o botão reutilizável que já foi criado em src/ui/Button.jsx.
import Button from "../ui/Button";

// Array com todos os links do menu.
// Isso evita repetir os mesmos links no desktop e no mobile.
const links = [
  { text: "Portfólio", href: "#portfolio" },
  { text: "Quem somos", href: "#sobre" },
  { text: "Serviços", href: "#servicos" },
  { text: "Projetos", href: "#projetos" },
  { text: "Contato", href: "#contato" },
  { text: "Parceiros", href: "#parceiros" },
];

// Todo componente React começa com uma função.
// export default permite importar este componente sem usar chaves:
// import Header from "./sections/Header";
export default function Header() {
  // menuOpen guarda o estado do menu mobile:
  // false = fechado
  // true = aberto
  //
  // setMenuOpen é a função usada para alterar esse valor.
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu mobile.
  // Vamos usá-la quando o usuário clicar em algum link.
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    /*
      <Header> é a tag semântica correta para o cabeçalho.

      sticky top-0 = mantém o Header preso no topo durante a rolagem.
      z-50 = mantém o Header na frente das outras seções.
      border-b border-border = cria a linha inferior roxa.
      bg-bg-dark/95 = fundo escuro com 95% de opacidade.
      backdrop-blur = aplica desfoque no conteúdo atrás do Header.
    */
    <header className="sticky top-0 z-50 border-b border-border bg-bg-dark/95 backdrop-blur">

      {/*
        Este é o container interno.

        h-[82px] = altura de 82px, igual ao Figma.
        max-w-[1440px] = limita a largura máxima ao layout desktop.
        mx-auto = centraliza o conteúdo.
        px-6 = 24px de espaço lateral no mobile.
        lg:px-12 = 48px de espaço lateral em telas grandes.
        flex = coloca os elementos em linha.
        justify-between = separa logo, menu e botão.
      */}
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/*
          Logo do site.
          href="#inicio" levará a pessoa para a seção Hero,
          que depois terá id="inicio".
        */}
        <a
          href="#inicio"
          className="text-[18px] font-bold tracking-[-0.03em] text-white"
          onClick={closeMenu}
        >
          ANOTHER WORLD
        </a>

        {/*
          Menu desktop.

          hidden = escondido por padrão.
          xl:flex = aparece como flex apenas a partir de 1280px.
          Isso evita que os seis links fiquem apertados em telas menores.
        */}
        <nav
          className="hidden items-center gap-8 xl:flex"
          aria-label="Navegação principal"
        >
          {/*
            .map() percorre cada objeto dentro de links
            e cria um <a> para cada item.
          */}
          {links.map((link) => (
            <a
              /*
                key é obrigatório em listas do React.
                Ele permite que o React identifique cada item.
              */
              key={link.href}

              // Usa o href definido no array.
              href={link.href}

              /*
                text-[10px] = tamanho de texto do Figma.
                uppercase = deixa as letras em maiúsculo.
                hover:text-white = muda a cor ao passar o mouse.
              */
              className="text-[10px] font-semibold uppercase tracking-wide text-text-muted transition-colors hover:text-white"
            >
              {/* Exibe o texto definido no array. */}
              {link.text}
            </a>
          ))}
        </nav>

        {/*
          CTA do desktop.

          hidden xl:block = só aparece a partir de 1280px.
          O Button recebe variant="outline", usando a versão com
          fundo escuro e borda roxa criada no Button.jsx.
        */}
        <div className="hidden xl:block">
          <Button
            variant="outline"
            className="h-11 px-5 text-[10px]"

            /*
              Ao clicar, altera a hash da URL para #contato.
              Quando a seção Contato for criada com id="contato",
              a página rolará até ela.
            */
            onClick={() => (window.location.hash = "contato")}
          >
            Falar conosco
          </Button>
        </div>

        {/*
          Botão do menu mobile.

          xl:hidden = aparece apenas abaixo de 1280px.
          aria-label e aria-expanded melhoram acessibilidade
          para leitores de tela.
        */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-purple hover:text-white xl:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}

          /*
            !menuOpen significa "o oposto do valor atual":

            se menuOpen for false, vira true;
            se menuOpen for true, vira false.
          */
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/*
            Se menuOpen for true, mostra ×.
            Caso contrário, mostra ☰.
          */}
          <span className="text-xl leading-none" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/*
        Renderização condicional:

        O menu abaixo só será renderizado se menuOpen for true.
        false && (...) não mostra nada.
        true && (...) mostra o conteúdo.
      */}
      {menuOpen && (
        <nav
          className="border-t border-border bg-bg-dark px-6 py-5 xl:hidden"
          aria-label="Navegação mobile"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">

            {/* Reaproveita o mesmo array de links do menu desktop. */}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}

                /*
                  onClick={closeMenu} fecha o menu depois que
                  a pessoa escolhe uma página.
                */
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:bg-bg-card hover:text-white"
              >
                {link.text}
              </a>
            ))}

            {/* Botão de contato também disponível no final do menu mobile. */}
            <Button
              variant="outline"
              className="mt-3 w-full"
              onClick={() => {
                // Navega até a seção de contato.
                window.location.hash = "contato";

                // Fecha o menu depois do clique.
                closeMenu();
              }}
            >
              Falar conosco
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}