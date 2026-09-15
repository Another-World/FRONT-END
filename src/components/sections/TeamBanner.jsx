import mateus_img from "../../assets/mateus-img.jpg";
import clarice_img from "../../assets/clarice-img.jpg";
import leandro_img from "../../assets/leandro-img.jpg";
import biel_img from "../../assets/biel-img.jpg";

export default function TeamBanner() {
    // Mesmo padrão de "array de objetos" que já vimos no StatItem e no Portfolio:
    // cada integrante é um objeto com as infos que vão mudar por pessoa.
    const members = [
        { name: "Mateus Isaque", role: "CEO", photo: mateus_img },
        { name: "Clarice Brasileiro", role: "Diretora", photo: clarice_img },
        { name: "Leandro Soares", role: "Desenvolvedor  Back-end", photo: leandro_img },
        { name: "Gabriel Barbosa", role: "Desenvolvedor Front-end", photo: biel_img },
    ];

    return (
        // Repara: aqui a gente usa "bg-highlight" e "text-highlight-text" —
        // as DUAS variáveis novas que criamos no index.css. É a única seção
        // do site com fundo claro, por isso as cores de texto também invertem
        // (texto escuro em vez de branco/cinza-claro como no resto do site).
        <section className="bg-highlight py-24">
            <div className="max-w-7xl mx-auto px-8 text-center">
                {/* "text-center" centraliza todo o conteúdo dessa seção,
            diferente das outras seções do site que são alinhadas à esquerda.
            Isso ajuda a destacar visualmente esse bloco como "diferente". */}

                <h2 className="text-highlight-text text-4xl md:text-5xl font-bold mb-16">
                    Nossa Equipe
                </h2>

                {/* "flex-wrap" permite que os 4 integrantes quebrem pra próxima linha
            automaticamente se não couberem lado a lado (celular, por exemplo). */}
                <div className="flex flex-wrap justify-center gap-12 mb-16">
                    {members.map((member, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 w-40">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover border border-border"
                            />
                            {/* "object-cover" é importante: garante que a foto preenche o círculo inteiro sem esticar/distorcer, cortando o excesso. Sem isso, uma foto retangular ficaria espremida ou ovalada. */}
                            <div>
                                <p className="text-highlight-text font-semibold">
                                    {member.name}
                                </p>
                                <p className="text-bg-card-inner text-xs uppercase tracking-wider">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* O slogan, em itálico pra parecer uma "frase de efeito". */}
                <p className="text-highlight-text text-xl md:text-2xl font-medium italic max-w-2xl mx-auto">
                    "A equipe que transforma ideias de outro mundo em realidade!"
                </p>
                {/* Ajustei "transformas" pra "transforma" (concordância com "equipe",
            que é 3ª pessoa — "a equipe transforma", não "transformas").
            Muda a frase de volta se a ideia era outra pessoa falando. */}
            </div>
        </section>
    );
}