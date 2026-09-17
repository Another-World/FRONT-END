import { Link } from "react-router-dom";

// Links reais do site.
// "Projetos" é uma seção da Home, por isso usa uma âncora.
const navLinks = [
  { label: "Início", to: "/" },
  { label: "Quem somos", to: "/quem-somos" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", href: "/#portfolio" },
  { label: "Contato", to: "/contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-footer">
      <div className="mx-auto max-w-[1344px] px-6 py-14 sm:py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">
          {/* Identidade da empresa */}
          <div>
            <Link
              to="/"
              className="text-3xl font-bold tracking-[-0.04em] text-white transition-colors hover:text-purple sm:text-4xl"
            >
              ANOTHER WORLD
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-text-muted">
              Conectando seu mundo ao futuro por meio de tecnologia,
              infraestrutura e desenvolvimento web.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple">
              Navegação
            </h2>

            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    /*
                      Usamos <a> neste caso porque a âncora #portfolio fica
                      dentro da Home. Assim o navegador abre a Home e rola
                      até a seção correta.
                    */
                    <a
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm text-text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple">
              Orçamentos
            </h2>

            <p className="mt-5 text-sm leading-7 text-text-muted">
              Solicite um orçamento e nossa equipe retornará por e-mail ou
              WhatsApp.
            </p>

            <Link
              to="/contato"
              className="mt-5 inline-flex text-sm font-semibold text-white transition-colors hover:text-purple"
            >
              Solicitar orçamento →
            </Link>

            <p className="mt-6 text-sm text-text-faint">
              São Paulo, Brasil
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-border pt-7">
          <p className="text-xs text-text-faint">
            © 2026 Another World. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}