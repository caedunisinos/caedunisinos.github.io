// ==========================================================
//  POSTS (dados das notícias) - CENTRALIZADO
//  Arquivo: /dados/posts.js
//  Carregado por: noticias.html e arquivo.html
//  Site: https://caedunisinos.com.br
// ==========================================================

// ==========================================================
//  TEMPLATE PARA NOVAS POSTAGENS (COPIAR E COLAR)
//  ==========================================================
/*
{
  titulo: "Título da postagem",
  link: "https://caedunisinos.com.br/noticias/slug-da-postagem.html",
  resumo: "Resumo da postagem...",
  data: "DD/MM/AAAA",
  horario: "HH:MM",
  categoria: "institucional",
  categoriaLabel: "🏛️ Institucional",
  imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/nome-da-imagem.jpg",
  destaque: false,
  futuro: false
}
*/
// ==========================================================
//  CATEGORIAS DISPONÍVEIS:
//  institucional, eventos, academico, carreira, direito-digital,
//  variedades, representacao, servicos, loja, transparencia,
//  comunidade, acessibilidade, inovacao, trabalhista
// ==========================================================

const posts = [
  // ==========================================================
  //  NOTÍCIAS INSTITUCIONAIS (período da tarde)
  // ==========================================================
  {
    titulo: "CAED encaminha à Unisinos o Projeto Aluno Destaque",
    link: "https://caedunisinos.com.br/noticias/projeto-aluno-destaque.html",
    resumo: "Iniciativa visa reconhecer e premiar os melhores estudantes de Direito da Unisinos a cada semestre, com troféu, certificado e créditos acadêmicos.",
    data: "31/07/2026",
    horario: "14:00",
    categoria: "institucional",
    categoriaLabel: "🏆 Valorização Acadêmica",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/projeto-aluno-destaque.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "CAED na Acolhida 2026/2: Brindes e Novidades para os Calouros",
    link: "https://caedunisinos.com.br/noticias/acolhida-caed-2026-2.html",
    resumo: "O CAED estará nos campi de São Leopoldo e Porto Alegre com distribuição de agendas, canetas e o Tubarão com panfletos e canecas exclusivas.",
    data: "04/08/2026",
    horario: "15:30",
    categoria: "eventos",
    categoriaLabel: "🎓 Volta às Aulas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/acolhida-caed-2026.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "CAED implementa acessibilidade digital: recursos já disponíveis",
    link: "https://caedunisinos.com.br/noticias/noticia-acessibilidade-caed.html",
    resumo: "Nesta página você encontra VLibras, modo escuro, alto contraste, fonte para dislexia, leitura por áudio, comandos de voz e muito mais.",
    data: "01/08/2026",
    horario: "16:00",
    categoria: "acessibilidade",
    categoriaLabel: "♿ Inclusão Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/acessibilidade-caed.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED lança Regulariza Unisinos: consultoria gratuita para DAs e CAs",
    link: "https://caedunisinos.com.br/noticias/noticia-regulariza-unisinos.html",
    resumo: "Consultoria jurídica e contábil gratuita para entidades estudantis que desejam regularizar sua situação fiscal e cartorial.",
    data: "15/07/2026",
    horario: "14:30",
    categoria: "institucional",
    categoriaLabel: "📢 Lançamento",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/regulariza-unisinos.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Carteirinha Estudantil UNISINOS — Meia-Entrada para Todos",
    link: "https://caedunisinos.com.br/noticias/carteirinha-estudantil-aergs.html",
    resumo: "O CAED emite a carteirinha estudantil para acadêmicos da UNISINOS, garantindo o direito à meia-entrada em eventos culturais e esportivos.",
    data: "10/07/2026",
    horario: "15:00",
    categoria: "servicos",
    categoriaLabel: "🎫 Benefícios",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/carteirinha-estudantil.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Coleção de Inverno CAED 2026 — Peças Exclusivas Direito UNISINOS",
    link: "https://caedunisinos.com.br/noticias/colecao-inverno-2026.html",
    resumo: "Chegou a Coleção de Inverno CAED 2026! Camiseta Preta, Moletom Preto, Moletom Bordô, Ecobag e Kit Chimarrão exclusivos.",
    data: "05/07/2026",
    horario: "16:30",
    categoria: "loja",
    categoriaLabel: "🛍️ Loja Oficial",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/colecao-inverno-2026.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Prestação de Contas Disponível — Transparência para os Acadêmicos",
    link: "https://caedunisinos.com.br/noticias/prestacao-contas-2025-2.html",
    resumo: "O CAED reafirma seu compromisso com a transparência. Confira a prestação de contas da gestão.",
    data: "01/07/2026",
    horario: "14:00",
    categoria: "transparencia",
    categoriaLabel: "📊 Prestação de Contas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/prestacao-contas.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED propõe eleições verdadeiramente democráticas para o DCE",
    link: "https://caedunisinos.com.br/noticias/noticia-reforma-estatutaria-dce.html",
    resumo: "O CAED apresentou sua proposta de alteração do Estatuto do DCE Unisinos para garantir eleições mais democráticas.",
    data: "25/06/2026",
    horario: "15:30",
    categoria: "representacao",
    categoriaLabel: "🚨 Última Hora",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/reforma-estatutaria-dce.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Chega de Fraudes Eleitorais no Processo Eleitoral do DCE UNISINOS!",
    link: "https://caedunisinos.com.br/noticias/dce-fraudes-eleitorais-2026.html",
    resumo: "O CAED manifesta repúdio à tentativa do DCE Unisinos de manter regras eleitorais que comprometem a pluralidade do processo democrático.",
    data: "20/06/2026",
    horario: "16:00",
    categoria: "representacao",
    categoriaLabel: "🚨 Posição Oficial",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/fraudes-eleitorais.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Vitória da Democracia: Propostas do CAED são aprovadas na Assembleia do DCE",
    link: "https://caedunisinos.com.br/noticias/noticia-vitoria-dce-caed.html",
    resumo: "Após anos de luta, as propostas defendidas pela gestão do CAED foram aprovadas na Assembleia do DCE por 15 votos a 11.",
    data: "15/06/2026",
    horario: "15:00",
    categoria: "representacao",
    categoriaLabel: "🏆 Vitória Histórica",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/vitoria-dce.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Grupos Oficiais de WhatsApp do Curso de Direito da Unisinos",
    link: "https://caedunisinos.com.br/noticias/noticia-grupos-whatsapp.html",
    resumo: "Fique por dentro de tudo o que acontece no curso! O CAED indica os grupos oficiais de WhatsApp.",
    data: "10/06/2026",
    horario: "14:30",
    categoria: "comunidade",
    categoriaLabel: "📲 Conecte-se",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/grupos-whatsapp.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Guia Completo: Como Criar Apresentações de Slides Notáveis",
    link: "https://caedunisinos.com.br/noticias/noticia-guia-apresentacoes.html",
    resumo: "Do planejamento à execução: ferramentas, design, uso de IA e cuidados com o ambiente de exibição.",
    data: "05/06/2026",
    horario: "16:30",
    categoria: "academico",
    categoriaLabel: "🎓 Dicas Acadêmicas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/guia-apresentacoes.jpg",
    destaque: false,
    futuro: false
  },

  // ==========================================================
  //  CONTEÚDO MATINAL (leis, variedades, cultura)
  // ==========================================================
  {
    titulo: "LGPD na Faculdade: Como a Lei Protege Seus Dados na Unisinos?",
    link: "https://caedunisinos.com.br/noticias/lgpd-faculdade-protecao-dados-unisinos.html",
    resumo: "Entenda como a Lei Geral de Proteção de Dados (LGPD) impacta o dia a dia dos estudantes de Direito da Unisinos em São Leopoldo e Porto Alegre.",
    data: "10/08/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/lgpd-faculdade.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Novidades da OAB/RS: O que Mudou para o Exame e a Inscrição em 2026?",
    link: "https://caedunisinos.com.br/noticias/novidades-oab-rs-2026.html",
    resumo: "Fique por dentro das últimas resoluções da OAB/RS que impactam os estudantes de Direito da Unisinos.",
    data: "09/08/2026",
    horario: "08:30",
    categoria: "carreira",
    categoriaLabel: "⚖️ Legislação & Carreira",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/oab-rs-2026.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Entre Livros e Leis: 10 Podcasts Jurídicos para Ouvir no Caminho",
    link: "https://caedunisinos.com.br/noticias/podcasts-juridicos-para-estudantes.html",
    resumo: "Recomendação de podcasts para otimizar o tempo de deslocamento até os campi de São Leopoldo e Porto Alegre.",
    data: "08/08/2026",
    horario: "08:00",
    categoria: "variedades",
    categoriaLabel: "💡 Variedades & Cultura",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/podcasts-juridicos.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Marco Civil da Internet: Seus Direitos no Mundo Digital",
    link: "https://caedunisinos.com.br/noticias/marco-civil-internet-direitos.html",
    resumo: "Entenda de forma simples a importância do Marco Civil da Internet para a sua vida digital como estudante.",
    data: "07/08/2026",
    horario: "09:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/marco-civil-internet.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Estágio no Direito: Guia para Encontrar as Melhores Oportunidades em 2026",
    link: "https://caedunisinos.com.br/noticias/guia-estagio-direito-2026.html",
    resumo: "Guia prático com dicas para conseguir um estágio de qualidade durante a graduação na Unisinos.",
    data: "06/08/2026",
    horario: "08:30",
    categoria: "carreira",
    categoriaLabel: "⚖️ Legislação & Carreira",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/guia-estagio-direito.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Filmes e Séries para Entender o Direito Além dos Clássicos",
    link: "https://caedunisinos.com.br/noticias/filmes-series-entender-direito.html",
    resumo: "Sugestões contemporâneas com temática jurídica para aprender Direito de forma descontraída.",
    data: "05/08/2026",
    horario: "09:00",
    categoria: "variedades",
    categoriaLabel: "💡 Variedades & Cultura",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/filmes-series-direito.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Mapa Mental: Como Estudar Direito Civil com Eficiência",
    link: "https://caedunisinos.com.br/noticias/mapa-mental-direito-civil.html",
    resumo: "Dicas de estudo e organização para dominar uma das matérias mais importantes do curso de Direito.",
    data: "04/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Acadêmico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/mapa-mental-direito-civil.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Lei de Estágio: Seus Direitos e Deveres Trabalhistas",
    link: "https://caedunisinos.com.br/noticias/lei-estagio-direitos-deveres.html",
    resumo: "Esclareça suas dúvidas sobre os direitos e deveres no estágio obrigatório e não obrigatório.",
    data: "03/08/2026",
    horario: "08:30",
    categoria: "trabalhista",
    categoriaLabel: "⚖️ Direito do Trabalho",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/lei-estagio.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "The Good Wife vs. Suits: Qual Retrata Melhor a Advocacia Real?",
    link: "https://caedunisinos.com.br/noticias/good-wife-vs-suits-advocacia.html",
    resumo: "Uma análise lúdica sobre a representação da advocacia em duas séries de sucesso.",
    data: "02/08/2026",
    horario: "09:30",
    categoria: "variedades",
    categoriaLabel: "💡 Variedades & Cultura",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/good-wife-suits.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "IA na Pesquisa Jurídica: Ferramentas para o Acadêmico",
    link: "https://caedunisinos.com.br/noticias/ia-pesquisa-juridica-ferramentas.html",
    resumo: "Conheça ferramentas de Inteligência Artificial que podem auxiliar na pesquisa jurídica e nos estudos.",
    data: "01/08/2026",
    horario: "08:00",
    categoria: "inovacao",
    categoriaLabel: "🚀 Inovação & Tecnologia",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/ia-pesquisa-juridica.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Os 30 Livros que Todo Estudante de Direito Deveria Ler",
    link: "https://caedunisinos.com.br/noticias/noticia-livros-direito.html",
    resumo: "Clássicos da literatura universal, ficção jurídica e obras brasileiras que dialogam com o universo do Direito.",
    data: "28/07/2026",
    horario: "09:00",
    categoria: "variedades",
    categoriaLabel: "📖 Leitura Recomendada",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/livros-direito.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Os 30 Filmes que Todo Estudante de Direito Deveria Assistir",
    link: "https://caedunisinos.com.br/noticias/noticia-filmes-ferias.html",
    resumo: "Clássicos nacionais e internacionais que dialogam com o universo jurídico e ajudam a aprender Direito fora da sala de aula.",
    data: "25/07/2026",
    horario: "08:30",
    categoria: "variedades",
    categoriaLabel: "🎓 Férias com Direito",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/filmes-direito.jpg",
    destaque: false,
    futuro: false
  },

  // ==========================================================
  //  POSTAGENS FUTURAS (programadas)
  // ==========================================================
  {
    titulo: "📌 NOVIDADE: CAED lança plataforma de mentoria para calouros",
    link: "https://caedunisinos.com.br/noticias/mentoria-calouros-caed.html",
    resumo: "Programa de mentoria para apoiar os novos estudantes de Direito da Unisinos em São Leopoldo e Porto Alegre.",
    data: "15/09/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🔮 Em breve",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/mentoria-calouros.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "📌 Palestra: Direito e Inteligência Artificial com Especialista da OAB",
    link: "https://caedunisinos.com.br/noticias/palestra-direito-ia-oab.html",
    resumo: "Evento imperdível sobre os desafios da IA no Direito, com palestrante convidado da OAB/RS.",
    data: "20/09/2026",
    horario: "19:00",
    categoria: "eventos",
    categoriaLabel: "🔮 Em breve",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/palestra-ia.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "📌 Processo Seletivo para Novos Membros do CAED 2026/2",
    link: "https://caedunisinos.com.br/noticias/processo-seletivo-caed-2026-2.html",
    resumo: "Estão abertas as inscrições para estudantes que desejam integrar as equipes do CAED.",
    data: "25/09/2026",
    horario: "14:00",
    categoria: "institucional",
    categoriaLabel: "🔮 Em breve",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/imagens/processo-seletivo-caed.jpg",
    destaque: false,
    futuro: true
  }
];

// ==========================================================
//  NÃO MODIFICAR A PARTIR DAQUI
//  (código para exportar os dados)
// ==========================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = posts;
}
