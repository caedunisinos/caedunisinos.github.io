// ==========================================================
//  POSTS (dados das notícias) - CENTRALIZADO
//  Arquivo: /dados/posts.js
//  Carregado por: noticias.html e arquivo.html
//  Site: https://caedunisinos.com.br
//  ----------------------------------------------------------
//  Estrutura de cada post:
//    titulo, link, resumo, data (DD/MM/AAAA), horario (HH:MM),
//    categoria, categoriaLabel, imagem, destaque, futuro
//  ----------------------------------------------------------
//  O campo 'futuro' serve como fallback visual. A fonte da
//  verdade é a data+hora, avaliada por postPublicado().
// ==========================================================

const posts = [

  // ==========================================================
  //  ⭐ OUTUBRO 2026 — PUBLICADOS
  // ==========================================================

  {
    titulo: "Eleições 2026: o guia completo do eleitor — sua voz transforma o futuro",
    link: "https://caedunisinos.com.br/noticias/eleicoes-2026-guia-completo-eleitor.html",
    resumo: "Guia completo do CAED para o dia da votação: por que o voto importa, como descobrir sua sessão eleitoral, documentos necessários, FAQ, justificativa de ausência e muito mais. Sua voz transforma o futuro!",
    data: "04/10/2026",
    horario: "07:00",
    categoria: "institucional",
    categoriaLabel: "🗳️ Eleições 2026 · Guia do Eleitor",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/eleicoes-2026-guia-completo-eleitor-caed.jpg",
    destaque: true,
    futuro: false
  },

  // ==========================================================
  //  📅 OUTUBRO 2026 — PROGRAMADOS (ordem cronológica)
  // ==========================================================

  {
    titulo: "Mês Acadêmico CAED 2026: um mês de conhecimento, coletividade e conexões que transformam",
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-2026-balanco-encerramento.html",
    resumo: "Balanço completo do Mês Acadêmico CAED Unisinos 2026: palestras, gratidão a palestrantes e participantes, destaques, 1ª Corrida da Unisinos e próximos passos.",
    data: "05/10/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🎓 Mês Acadêmico · Balanço",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/mes-academico-caed-2026-balanco-gratidao-coletividade.jpg",
    destaque: true,
    futuro: true
  },
  {
    titulo: "Direito ao Esquecimento: Case Acadêmico Premiado da UNISINOS",
    link: "https://caedunisinos.com.br/noticias/direito-ao-esquecimento-case-academico-premiado-caed-unisinos.html",
    resumo: "Alunos da UNISINOS alcançam nota máxima com trabalho interdisciplinar sobre o RE 1.010.606/STF. Análise com Kelsen, Dworkin e Bobbio, site interativo, QR Code e homenagem a Carolina Willmann.",
    data: "07/10/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital · Case Premiado",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direito-ao-esquecimento-case-academico-premiado-caed-unisinos.jpg",
    destaque: true,
    futuro: true
  },
  {
    titulo: "Como se destacar em estágios de Direito: guia completo do CAED",
    link: "https://caedunisinos.com.br/noticias/como-se-destacar-estagios-direito-2026.html",
    resumo: "Guia prático do CAED para conquistar e se destacar em estágios jurídicos: currículo, LinkedIn, entrevistas, postura profissional e primeiros passos na carreira.",
    data: "09/10/2026",
    horario: "08:00",
    categoria: "carreira",
    categoriaLabel: "💼 Carreira Jurídica",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/como-se-destacar-estagios-direito-caed-unisinos.jpg",
    destaque: true,
    futuro: true
  },
  {
  titulo: "Véspera da Corrida: como se preparar para os 5 km da Unisinos",
  link: "https://caedunisinos.com.br/noticias/vespera-corrida-como-se-preparar-unisinos.html",
  resumo: "Faltam 5 dias para a 1ª Corrida da Unisinos! Confira o guia completo do CAED com checklist, hidratação, alimentação e dicas para chegar preparado no dia da prova.",
  data: "13/10/2026",
  horario: "08:00",
  categoria: "eventos",
  categoriaLabel: "🏃 Véspera da Corrida",
  imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/vespera-corrida-preparacao-unisinos-caed.jpg",
  destaque: true,
  futuro: true
},
  {
    titulo: "Faltam 4 dias para a 1ª Corrida da Unisinos: como participar",
    link: "https://caedunisinos.com.br/noticias/countdown-corrida-unisinos-2026.html",
    resumo: "Contagem regressiva para a 1ª Corrida da Unisinos! Faltam 4 dias para o evento que vai marcar a história esportiva da universidade. Confira tudo o que você precisa saber.",
    data: "14/10/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🏃 1ª Corrida da Unisinos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/countdown-4-dias-corrida-unisinos-caed.jpg",
    destaque: true,
    futuro: true
  },
  {
    titulo: "Dia do Professor: homenagem do CAED aos mestres do Direito",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Neste 15 de outubro, o CAED presta homenagem a todos os professores que constroem o futuro do Direito com dedicação e sabedoria.",
    data: "15/10/2026",
    horario: "08:00",
    categoria: "variedades",
    categoriaLabel: "👨‍🏫 Dia do Professor",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dia-do-professor-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Últimos dias para se inscrever na 1ª Corrida da Unisinos",
    link: "https://caedunisinos.com.br/noticias/primeira-corrida-unisinos-2026.html",
    resumo: "As inscrições estão se encerrando! Garanta já a sua vaga na 1ª Corrida da Unisinos. Alunos têm 10% de desconto.",
    data: "16/10/2026",
    horario: "18:00",
    categoria: "eventos",
    categoriaLabel: "🏃 Últimos Dias",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/primeira-corrida-unisinos-2026-caed.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Balanço da 1ª Corrida da Unisinos: um marco na história esportiva da universidade",
    link: "https://caedunisinos.com.br/noticias/primeira-corrida-unisinos-2026.html",
    resumo: "Confira o balanço completo da 1ª Corrida da Unisinos: números, destaques, agradecimentos e os melhores momentos de um dia histórico.",
    data: "19/10/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🏆 Balanço Corrida",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/primeira-corrida-unisinos-2026-caed.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Direito Digital no Cinema: 7 filmes e séries para estudantes de Direito",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Snowden, O Jogo da Imitação, A Rede Social, Mr. Robot, Black Mirror e mais: uma seleção de filmes e séries que todo estudante de Direito Digital deveria assistir.",
    data: "21/10/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "🎬 Direito Digital no Cinema",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direito-digital-cinema-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Nova data da palestra com Edgar Abreu: vencendo através da educação",
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-palestra-edgar-abreu.html",
    resumo: "Em razão de viagem internacional do palestrante, a palestra com Edgar Abreu foi remarcada. Confira a nova data e garanta seu lugar!",
    data: "22/10/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "⚖️ Palestra Edgar Abreu",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-edgar-abreu-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Outubro Rosa: o Direito e a Saúde da Mulher",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "O CAED apoia o Outubro Rosa. Uma reflexão sobre o papel do Direito na proteção da saúde da mulher e no combate ao câncer de mama.",
    data: "25/10/2026",
    horario: "10:00",
    categoria: "variedades",
    categoriaLabel: "🎀 Outubro Rosa",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/outubro-rosa-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Halloween Jurídico: 7 casos curiosos do Direito",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Neste Halloween, o CAED traz uma seleção de casos jurídicos bizarros e curiosos que marcaram a história do Direito.",
    data: "26/10/2026",
    horario: "08:00",
    categoria: "variedades",
    categoriaLabel: "🎃 Halloween Jurídico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/halloween-juridico-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Dia do Servidor Público: como se preparar para carreiras públicas",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Guia completo do CAED sobre como se preparar para concursos públicos na área jurídica: estudo, disciplinas essenciais e dicas práticas.",
    data: "28/10/2026",
    horario: "08:00",
    categoria: "carreira",
    categoriaLabel: "🏛️ Carreiras Públicas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dia-servidor-publico-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },

  // ==========================================================
  //  📅 NOVEMBRO 2026 — PROGRAMADOS
  // ==========================================================

  {
    titulo: "Preparação OAB 2026/2: guia completo do CAED",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Guia completo de preparação para o Exame da OAB 2026/2: cronograma de estudos, disciplinas prioritárias, simulados e dicas do CAED.",
    data: "02/11/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 Preparação OAB",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/preparacao-oab-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "LGPD na Prática: guia para o estudante de Direito",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Guia prático da LGPD para estudantes de Direito: fundamentos, direitos dos titulares, obrigações dos controladores e como aplicar na advocacia.",
    data: "04/11/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "🔒 LGPD na Prática",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/lgpd-pratica-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Guia do Calouro 2027/1: tudo que você precisa saber",
    link: "https://caedunisinos.com.br/guia-do-estudante.html",
    resumo: "Guia completo do CAED para os calouros de Direito da UNISINOS: o que levar, como se organizar, grupos de WhatsApp e dicas essenciais.",
    data: "09/11/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Guia do Calouro",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-calouro-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Dia do Estudante: reflexões e dicas do CAED",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Neste 11 de agosto, o CAED celebra o Dia do Estudante com reflexões sobre a vida acadêmica e dicas práticas para os estudantes de Direito.",
    data: "11/11/2026",
    horario: "08:00",
    categoria: "variedades",
    categoriaLabel: "📖 Dia do Estudante",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dia-estudante-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Proclamação da República: o Direito e a história do Brasil",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Reflexão sobre os 137 anos da Proclamação da República e o papel do Direito na construção da democracia brasileira.",
    data: "15/11/2026",
    horario: "10:00",
    categoria: "institucional",
    categoriaLabel: "🏛️ Proclamação da República",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/proclamacao-republica-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Carreiras em Direito Digital: oportunidades em 2026",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Panorama das carreiras em Direito Digital: compliance, proteção de dados, perícia forense, crimes cibernéticos e muito mais. Como se preparar?",
    data: "16/11/2026",
    horario: "08:00",
    categoria: "carreira",
    categoriaLabel: "💼 Carreiras Direito Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/carreiras-direito-digital-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Direito Digital na Prática: como aplicar o conhecimento jurídico no mundo tech",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Do compliance à perícia digital: como o estudante de Direito pode aplicar seus conhecimentos no mercado de tecnologia.",
    data: "18/11/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "🚀 Direito Digital na Prática",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direito-digital-pratica-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Consciência Negra: Direito, Igualdade e Justiça Racial",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Reflexão do CAED sobre a Consciência Negra e o papel do Direito na promoção da igualdade racial e no combate ao racismo estrutural.",
    data: "20/11/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "✊ Consciência Negra",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/consciencia-negra-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Black Friday CAED: descontos especiais na loja oficial",
    link: "https://caedunisinos.com.br/loja.html",
    resumo: "Aproveite os descontos da Black Friday na Loja Oficial CAED! Produtos com identidade Direito Unisinos por tempo limitado.",
    data: "23/11/2026",
    horario: "08:00",
    categoria: "loja",
    categoriaLabel: "🛍️ Black Friday CAED",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/black-friday-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Cyber Monday: últimas ofertas digitais do CAED em 2026",
    link: "https://caedunisinos.com.br/loja.html",
    resumo: "A Cyber Monday chegou! Últimas ofertas do ano na Loja Oficial CAED — aproveite antes que acabe!",
    data: "25/11/2026",
    horario: "08:00",
    categoria: "loja",
    categoriaLabel: "🖤 Cyber Monday",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/cyber-monday-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },
  {
    titulo: "Retrospectiva CAED 2026: um ano de conquistas e transformações",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Relembre os principais momentos de 2026 no CAED: eventos, conquistas, projetos e tudo que marcou o ano da Gestão A Mudança Precisa Continuar.",
    data: "30/11/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🎄 Retrospectiva CAED",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/retrospectiva-caed-2026.jpg",
    destaque: false,
    futuro: true
  },

  // ==========================================================
  //  📅 DEZEMBRO 2026 — PROGRAMADOS
  // ==========================================================

  {
    titulo: "Direitos Humanos: 78 anos da Declaração Universal da ONU",
    link: "https://caedunisinos.com.br/noticias.html",
    resumo: "Reflexão sobre os 78 anos da Declaração Universal dos Direitos Humanos e sua importância para o Direito contemporâneo.",
    data: "10/12/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "⚖️ Direitos Humanos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direitos-humanos-caed-unisinos.jpg",
    destaque: false,
    futuro: true
  },

  // ==========================================================
  //  📅 LONGO PRAZO — 2027
  // ==========================================================

  {
    titulo: "📌 NOVIDADE: CAED lança plataforma de mentoria para calouros",
    link: "https://caedunisinos.com.br/noticias/mentoria-calouros-caed.html",
    resumo: "Programa de mentoria para apoiar os novos estudantes de Direito da Unisinos em São Leopoldo e Porto Alegre.",
    data: "15/09/2027",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🔮 Em breve",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/mentoria-calouros.jpg",
    destaque: false,
    futuro: true
  },

  // ==========================================================
  //  ⭐ SETEMBRO 2026 — PUBLICADOS
  // ==========================================================

  {
    titulo: 'UNISINOS: atividades do Campus São Leopoldo serão remotas nesta segunda (21/09)',
    link: "https://caedunisinos.com.br/noticias/caed-informa-atividades-remotas-unisinos-21-setembro-2026.html",
    resumo: "Devido à tempestade da madrugada, a UNISINOS informou que as atividades acadêmicas e administrativas do Campus São Leopoldo ocorrerão de forma remota nesta segunda-feira, 21 de setembro. O Campus Porto Alegre funciona normalmente.",
    data: "21/09/2026",
    horario: "10:30",
    categoria: "institucional",
    categoriaLabel: "⚠️ Comunicado Institucional",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-comunicado-atividades-remotas-unisinos-21-setembro-2026.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: '"Além da punição: os caminhos da Justiça Restaurativa" — palestra com Marcos Rolim e Adalgiso Dutra em Porto Alegre',
    link: "https://caedunisinos.com.br/noticias/palestra-marcos-rolim-justica-restaurativa-poa.html",
    resumo: "No dia 23 de setembro, em Porto Alegre, o CAED Unisinos recebe Marcos Rolim e Adalgiso Augusto Silva Dutra para a palestra 'Além da punição: os caminhos da Justiça Restaurativa'. Evento gratuito com certificado no TEDU 311 — Unisinos Campus Porto Alegre.",
    data: "18/09/2026",
    horario: "20:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Mês Acadêmico · POA",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-marcos-rolim-justica-restaurativa-poa-caed-unisinos.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: 'Vem aí a Pesquisa de Satisfação CAED 2026/2 — sua opinião define os próximos rumos',
    link: "https://caedunisinos.com.br/noticias/pesquisa-satisfacao-caed-2026-2.html",
    resumo: "Espaço totalmente anônimo para estudantes de Direito da Unisinos opinarem, elogiarem, criticarem e sugerirem melhorias. Sua participação orienta as decisões do CAED e pode se transformar no próximo projeto da gestão. Fique ligado nos nossos canais!",
    data: "17/09/2026",
    horario: "10:00",
    categoria: "institucional",
    categoriaLabel: "📊 Representação Estudantil",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-pesquisa-satisfacao-2026-2-participacao-estudantes.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: 'Direito Médico: Do atestado ao Tribunal — palestra com a Dra. Audri Castro',
    link: "https://caedunisinos.com.br/noticias/palestra-direito-medico-audri-castro-caed-unisinos.html",
    resumo: "No dia 15 de setembro, às 19h45, o CAED Unisinos recebe a Dra. Audri Castro para a palestra 'Direito Médico: Do atestado ao Tribunal'. Evento gratuito com certificado no Auditório Maurício Berni, Campus São Leopoldo. Inscrições abrem em 14/09.",
    data: "14/09/2026",
    horario: "10:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Mês Acadêmico · Direito Médico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/audri-castro-direito-medico-do-atestado-ao-tribunal-caed-unisinos.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: 'Eleições 2026: CAED reafirma neutralidade institucional e lista candidatos',
    link: "https://caedunisinos.com.br/noticias/nota-oficial-caed-eleicoes-2026.html",
    resumo: "Em meio às Eleições 2026, o CAED reafirma sua neutralidade institucional: não manifestará apoio a candidatos, partidos ou coligações. A Gestão 'A mudança precisa continuar' garante representação de TODOS os estudantes de Direito da Unisinos — em São Leopoldo e Porto Alegre.",
    data: "11/09/2026",
    horario: "18:00",
    categoria: "institucional",
    categoriaLabel: "📢 Nota Oficial · Eleições 2026",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-nota-oficial-eleicoes-2026-capa.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: 'Mês Acadêmico CAED: palestra "Vencendo através da educação" com Edgar Abreu',
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-palestra-edgar-abreu.html",
    resumo: "No dia 15 de setembro, o CAED Unisinos recebe Edgar Abreu para a palestra 'Vencendo através da educação: uma história de vida, escolhas e caminhos diferentes'. Uma noite de aprendizado e superação.",
    data: "10/09/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Mês Acadêmico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/imagens/logo_caed.jpeg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "Conecte-se com o CAED — Todos os canais de comunicação",
    link: "https://caedunisinos.com.br/noticias/conecte-se-ao-caed-canais-comunicacao.html",
    resumo: "O CAED está em São Leopoldo e Porto Alegre! Conecte-se com a gente pelo WhatsApp, Instagram, LinkedIn, E-mail e Linktree. Fique por dentro de todas as novidades e participe da representação estudantil da UNISINOS.",
    data: "08/09/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "📱 Canais de Comunicação",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/caed-canais-comunicacao.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "CAED dá boas-vindas aos seguidores no LinkedIn — conteúdo exclusivo para sua carreira",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-boas-vindas-conteudo-exclusivo.html",
    resumo: "O perfil do CAED no LinkedIn foi lançado com uma mensagem de boas-vindas, convidando estudantes de Direito da UNISINOS em São Leopoldo e Porto Alegre a acompanharem conteúdos exclusivos para sua carreira jurídica.",
    data: "07/09/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Representação",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-boas-vindas.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Curso de Direito da Unisinos no RUF 2025 — resultado divulgado pelo CAED no LinkedIn",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-ruf-2025-direito-unisinos.html",
    resumo: "O Curso de Direito da Unisinos alcançou 1º lugar entre as privadas do RS, 3º lugar geral no Estado e 6º lugar entre as privadas do Brasil no RUF 2025.",
    data: "07/09/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🏆 Ranking Universitário",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-ruf.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Acompanhe o processo legislativo no Senado Federal — dica do CAED no LinkedIn",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-processo-legislativo-senado.html",
    resumo: "Ficar atento ao Senado Federal é essencial para compreender o processo legislativo na prática e conectar teoria e realidade institucional.",
    data: "06/09/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🏛️ Processo Legislativo",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-senado.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Por que acompanhar as decisões do STF ainda na graduação? — CAED no LinkedIn",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-acompanhar-decisoes-stf-graduacao.html",
    resumo: "Acompanhar o Supremo Tribunal Federal não é apenas um hábito acadêmico, mas uma ferramenta essencial para a formação crítica de estudantes de Direito.",
    data: "05/09/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🏛️ STF e Constituição",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-stf.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: '"Além da punição: os caminhos da Justiça Restaurativa" — palestra com Marcos Rolim',
    link: "https://caedunisinos.com.br/noticias/palestra-marcos-rolim-justica-restaurativa.html",
    resumo: "No dia 08 de setembro, o CAED Unisinos recebe Marcos Rolim para a palestra 'Além da punição: os caminhos da Justiça Restaurativa'. Evento gratuito com certificado no Auditório Maurício Berni, Campus São Leopoldo.",
    data: "04/09/2026",
    horario: "20:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Mês Acadêmico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-marcos-rolim-justica-restaurativa-caed-unisinos.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "Livros jurídicos que transformam o pensamento — indicações do CAED no LinkedIn",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-livros-juridicos-transformam-pensamento.html",
    resumo: "Estudar Direito também é entender o contexto social e as bases do pensamento jurídico. O CAED indica três obras fundamentais: 'A Sociedade dos Indivíduos' (Norbert Elias), 'Justiça' (Michael Sandel) e 'O Conceito de Direito' (H.L.A. Hart).",
    data: "04/09/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📖 Leitura Jurídica",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-livros.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Formação jurídica que vai além da sala de aula — conteúdo do CAED no LinkedIn",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-formacao-juridica-alem-sala-aula.html",
    resumo: "A formação em Direito ensina habilidades que vão além das leis: pensamento crítico, argumentação, comunicação, negociação e capacidade de solucionar problemas.",
    data: "03/09/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 Formação Acadêmica",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-habilidades.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "3 frentes de atuação além da advocacia tradicional — conteúdo do CAED no LinkedIn",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-3-frentes-atuacao-advocacia.html",
    resumo: "A graduação em Direito é uma das mais versáteis do mercado. A publicação do CAED no LinkedIn explora três grandes frentes de atuação: Advocacia Privada, Carreiras Públicas e Novas Fronteiras do Direito.",
    data: "02/09/2026",
    horario: "08:00",
    categoria: "carreira",
    categoriaLabel: "🧠 Carreira Jurídica",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-post-carreira.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED protocola junto à Unisinos o projeto 'Mulheres no Direito'",
    link: "https://caedunisinos.com.br/noticias/caed-protocola-projeto-mulheres-no-direito.html",
    resumo: "O CAED protocolou na Unisinos o projeto 'Mulheres no Direito', iniciativa da Secretaria da Mulher para apoiar, orientar e proteger as estudantes do curso de Direito.",
    data: "01/09/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Representação",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/projeto-mulheres-no-direito.jpg",
    destaque: false,
    futuro: false
  },

  // ==========================================================
  //  ⭐ AGOSTO 2026 — PUBLICADOS
  // ==========================================================

  {
    titulo: "CAED estreia no LinkedIn com conteúdo exclusivo para estudantes de Direito",
    link: "https://caedunisinos.com.br/noticias/caed-estreia-no-linkedin-conteudo-exclusivo.html",
    resumo: "O CAED acaba de estrear seu perfil oficial no LinkedIn, trazendo conteúdo exclusivo sobre carreira jurídica, formação acadêmica, decisões do STF, livros e muito mais.",
    data: "30/08/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Representação",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/linkedin-caed-banner.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED lança página exclusiva com vagas de estágio em Direito",
    link: "https://caedunisinos.com.br/noticias/caed-lanca-pagina-vagas-estagio-direito.html",
    resumo: "O CAED acaba de lançar uma página dedicada a reunir as melhores oportunidades de estágio em Direito para estudantes da UNISINOS em Porto Alegre, São Leopoldo, Canoas e Sapucaia do Sul.",
    data: "29/08/2026",
    horario: "18:00",
    categoria: "carreira",
    categoriaLabel: "💼 Oportunidades",
    imagem: "https://caedunisinos.com.br/noticias/noticias_imagens/vagas-estagio-banner.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "Mês Acadêmico CAED: Juiz Alexandre Kosby Boeira é o primeiro palestrante confirmado",
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-primeiro-palestrante-juiz-alexandre-boeira.html",
    resumo: "O Juiz de Direito Alexandre Kosby Boeira, titular da Vara Empresarial Regional de Novo Hamburgo, é o primeiro palestrante confirmado do Mês Acadêmico CAED Unisinos.",
    data: "28/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Eventos Acadêmicos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestrante-juiz-alexandre-boeira-mes-academico-caed.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED anuncia nova parceria com Pankekas: tradicional bar de São Leopoldo",
    link: "https://caedunisinos.com.br/noticias/caed-anuncia-nova-parceria-pankekas.html",
    resumo: "É com muita alegria que o CAED anuncia sua nova parceria com o Pankekas, tradicional bar de São Leopoldo. Em breve, teremos vários eventos e novidades para os estudantes!",
    data: "27/08/2026",
    horario: "14:00",
    categoria: "comunidade",
    categoriaLabel: "🤝 Parcerias",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/parceria-caed-pankekas-destaque.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED marca presença no Encontro de 25 anos do Grupo Teoria do Direito",
    link: "https://caedunisinos.com.br/noticias/caed-encontro-25-anos-teoria-do-direito.html",
    resumo: "O CAED confirma sua participação no Encontro de 25 anos do Grupo Teoria do Direito, um dos eventos acadêmicos mais importantes da área, que acontece nos dias 21 e 22 de setembro na UNISINOS.",
    data: "27/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Eventos Acadêmicos",
    imagem: "https://images.even3.com/OAtarpvpo1OFEDg7-XS86oeoaQ0=/1100x440/smart/https://static.even3.com/banner/WhatsAppImage2026-08-12at5.53.18PM.9ac93c9dff0c4a3e8c0d.jpeg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED notifica DCE extrajudicialmente por descumprimento de acordo e falta de registro",
    link: "https://caedunisinos.com.br/noticias/caed-notifica-dce-extrajudicialmente-descumprimento.html",
    resumo: "Após constatar que o DCE não registrou em cartório a alteração estatutária aprovada em Assembleia, o CAED formalizou notificação extrajudicial cobrando transparência e cumprimento da decisão coletiva.",
    data: "26/08/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Representação",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/notificacao-extrajudicial-caed-dce-destaque.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "CAED em Porto Alegre: Como encontrar, participar e fortalecer o movimento estudantil",
    link: "https://caedunisinos.com.br/noticias/caed-porto-alegre-como-encontrar-participar.html",
    resumo: "Com a conquista da sala no Campus Porto Alegre, o CAED está mais forte e acessível. Saiba como encontrar a gente, participar das ações e fortalecer a representação estudantil na capital.",
    data: "25/08/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Representação",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed_forte_vitoria.jpeg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "🔥 VEM AÍ: Mês Acadêmico CAED Unisinos com palestras, networking e Calourada Direito",
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-unisinos-2026.html",
    resumo: "O CAED apresenta o Mês Acadêmico 2026: um mês inteiro de palestras, networking e conhecimento para os estudantes de Direito da Unisinos. Com grandes nomes do Direito e a tradicional Calourada para encerrar.",
    data: "24/08/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Mês Acadêmico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/mes-academico-caed-unisinos-2026.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "VITÓRIA! CAED conquista sala no Campus Porto Alegre e fortalece representação estudantil",
    link: "https://caedunisinos.com.br/noticias/caed-conquista-sala-campus-porto-alegre.html",
    resumo: "Após meses de luta e mobilização estudantil, o CAED conquistou as chaves da sala no Campus Porto Alegre. Espaço será destinado ao acolhimento, representação e convivência dos estudantes de Direito.",
    data: "21/08/2026",
    horario: "20:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Conquista",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed_forte_vitoria.jpeg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "VEM AÍ: 1ª Corrida da Unisinos – Inscrições abertas para o dia 18 de outubro",
    link: "https://caedunisinos.com.br/noticias/primeira-corrida-unisinos-2026.html",
    resumo: "O CAED, em parceria com a AD SPORTS e a Associação Atlética Direito Unisinos – TUBARÃO, apresenta a 1ª Corrida da Unisinos. Percurso de 5 km no campus São Leopoldo. Alunos têm 10% de desconto!",
    data: "19/08/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🏃 Eventos Esportivos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/primeira_corrida_unisinos.jpeg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "🚀 Direito Digital e Perícia Computacional: A Nova Fronteira da Advocacia",
    link: "https://caedunisinos.com.br/noticias/direito-digital-pericia-caed.html",
    resumo: "Descubra como o Direito Digital e a perícia computacional estão revolucionando a advocacia. Conheça a parceria do CAED com especialistas em cibersegurança e análise forense digital.",
    data: "17/08/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direito-digital-pericia-caed.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "📖 Vade Mecum Digital e E-books Gratuitos: Biblioteca Jurídica ao Alcance de Todos",
    link: "https://caedunisinos.com.br/noticias/vade-mecum-ebooks-gratuitos-caed.html",
    resumo: "O CAED divulga uma seleção de bibliotecas virtuais com e-books gratuitos, incluindo o Vade Mecum do Senado, coletâneas de doutrina e materiais essenciais para a formação jurídica.",
    data: "14/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📖 Bibliotecas Virtuais",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/vade-mecum-ebooks-caed.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "📚 Guia Completo de Links Jurídicos: Referência para estudantes e operadores do Direito",
    link: "https://caedunisinos.com.br/noticias/guia-links-juridicos-caed.html",
    resumo: "O CAED apresenta um guia completo com os principais sites oficiais e portais jurídicos do Brasil, organizados por categoria: tribunais, legislação, previdência, jurisprudência e muito mais.",
    data: "13/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 Guias e Recursos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-links-juridicos-caed.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "📌 Ontem foi Dia do Advogado: CAED celebra a advocacia e inspira futuros colegas",
    link: "https://caedunisinos.com.br/noticias/dia-do-advogado-caed-homenagem.html",
    resumo: "No 11 de agosto, Dia do Advogado, o CAED homenageia todos os profissionais da advocacia e deseja sucesso aos futuros colegas que estão construindo sua jornada no Direito.",
    data: "12/08/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "⚖️ Homenagem",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dia-do-advogado2-caed-2026.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Dia do Advogado: CAED homenageia os profissionais e futuros colegas",
    link: "https://caedunisinos.com.br/noticias/dia-do-advogado-caed-homenagem.html",
    resumo: "Neste 11 de agosto, Dia do Advogado, o CAED homenageia todos os profissionais da advocacia e deseja sucesso aos futuros colegas que estão construindo sua jornada no Direito.",
    data: "11/08/2026",
    horario: "06:00",
    categoria: "institucional",
    categoriaLabel: "⚖️ Homenagem",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dia-do-advogado-caed-2026.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Simulados OAB: Prepare-se para o Exame com o CAED",
    link: "https://caedunisinos.com.br/noticias/simulados-oab-prepare-se-caed.html",
    resumo: "O CAED oferece simulados OAB gratuitos para você testar seus conhecimentos, identificar pontos fracos e chegar preparado para o exame da OAB.",
    data: "07/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 OAB & Carreira",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/simulados-oab-caed-unisinos.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Carteirinha Estudantil UNISINOS: Como Solicitar e Quais os Benefícios",
    link: "https://caedunisinos.com.br/noticias/carteirinha-estudantil-unisinos-como-solicitar.html",
    resumo: "Saiba como solicitar sua carteirinha estudantil com o CAED e garanta meia-entrada em cinemas, teatros, eventos culturais e muito mais.",
    data: "06/08/2026",
    horario: "08:00",
    categoria: "servicos",
    categoriaLabel: "🎫 Benefícios Estudantis",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/carteirinha-estudantil-caed-unisinos.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED Explica: Tudo sobre a Colação de Grau e a Formatura de Direito na Unisinos",
    link: "https://caedunisinos.com.br/noticias/guia-formatura-direito-unisinos-caed.html",
    resumo: "Guia completo do CAED para os formandos de Direito da Unisinos. Datas das cerimônias, prazos, passo a passo e tudo que você precisa saber.",
    data: "05/08/2026",
    horario: "15:00",
    categoria: "academico",
    categoriaLabel: "🎓 Formatura & Carreira",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-formatura-direito-unisinos-caed.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "NOTA PÚBLICA: CAED repudia obstáculos do DCE para reabertura de sala no Campus Porto Alegre",
    link: "https://caedunisinos.com.br/noticias/nota-publica-caed-repudia-dce-sala-poa.html",
    resumo: "O CAED vem a público repudiar a postura do DCE Unisinos que, desde abril, impede a reabertura de uma sala de uso comum no Campus Porto Alegre, destinada a estudantes e entidades.",
    data: "05/08/2026",
    horario: "18:00",
    categoria: "representacao",
    categoriaLabel: "🗳️ Representação",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/nota-publica-caed-repudia-dce-sala-poa.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Calouro de Direito: Dicas do CAED para Você Sobreviver (e Curtir) o Primeiro Semestre na Unisinos",
    link: "https://caedunisinos.com.br/noticias/dicas-calouros-direito-caed-unisinos.html",
    resumo: "Chegou o primeiro dia de aula! O CAED preparou um guia com dicas essenciais para você se localizar nos campi, estudar, fazer networking e começar a vida acadêmica com o pé direito.",
    data: "04/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Dicas para Calouros",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dicas-calouros-direito-caed-2026-2.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Guia da Acolhida CAED 2026/2: O que Levar e Como se Preparar",
    link: "https://caedunisinos.com.br/noticias/guia-acolhida-caed-2026-2-o-que-levar.html",
    resumo: "Prepare-se para a volta às aulas com o guia do CAED. Confira dicas essenciais sobre o que levar, como se organizar e aproveitar ao máximo a Acolhida 2026/2 nos campi de São Leopoldo e Porto Alegre.",
    data: "03/08/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Volta às Aulas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-dicas-acolhida-caed-2026-2.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "CAED encaminha à Unisinos o Projeto Aluno Destaque",
    link: "https://caedunisinos.com.br/noticias/projeto-aluno-destaque.html",
    resumo: "Iniciativa visa reconhecer e premiar os melhores estudantes de Direito da Unisinos a cada semestre, com troféu, certificado e créditos acadêmicos.",
    data: "01/08/2026",
    horario: "14:00",
    categoria: "institucional",
    categoriaLabel: "🏆 Valorização Acadêmica",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/projeto-aluno-destaque-caed.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "CAED na Acolhida 2026/2: Brindes e Novidades para os Calouros",
    link: "https://caedunisinos.com.br/noticias/acolhida-caed-2026-2.html",
    resumo: "O CAED estará nos campi de São Leopoldo e Porto Alegre com distribuição de agendas, canetas e o Tubarão com panfletos e canecas exclusivas.",
    data: "31/07/2026",
    horario: "15:30",
    categoria: "eventos",
    categoriaLabel: "🎓 Volta às Aulas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/acolhida-caed-unisinos-2026-2.jpg",
    destaque: true,
    futuro: false
  },
  {
    titulo: "CAED implementa acessibilidade digital: recursos já disponíveis",
    link: "https://caedunisinos.com.br/noticias/noticia-acessibilidade-caed.html",
    resumo: "Nesta página você encontra VLibras, modo escuro, alto contraste, fonte para dislexia, leitura por áudio, comandos de voz e muito mais.",
    data: "30/07/2026",
    horario: "16:00",
    categoria: "acessibilidade",
    categoriaLabel: "♿ Inclusão Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/acessibilidade-digital-inclusao.jpg",
    destaque: false,
    futuro: false
  },

  // ==========================================================
  //  ⭐ JULHO 2026 — PUBLICADOS
  // ==========================================================

  {
    titulo: "Grupos Oficiais de WhatsApp do Curso de Direito da Unisinos",
    link: "https://caedunisinos.com.br/noticias/noticia-grupos-whatsapp.html",
    resumo: "Fique por dentro de tudo o que acontece no curso! O CAED indica os grupos oficiais de WhatsApp.",
    data: "20/07/2026",
    horario: "14:30",
    categoria: "comunidade",
    categoriaLabel: "📲 Conecte-se",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed_grupos_whatsapp.png",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Férias com Direito: 30 filmes que todo estudante de Direito deveria assistir",
    link: "https://caedunisinos.com.br/noticias/noticia-filmes-ferias.html",
    resumo: "Clássicos nacionais e internacionais que dialogam com o universo jurídico e ajudam a aprender Direito fora da sala de aula.",
    data: "16/07/2026",
    horario: "08:30",
    categoria: "variedades",
    categoriaLabel: "🎓 Férias com Direito",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/F%C3%A9rias%20com%20Direito%2030%20filmes%20que%20todo%20estudante%20de%20Direito%20deveria%20assistir.png",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Literatura e Direito: 30 livros que todo estudante de Direito deveria ler",
    link: "https://caedunisinos.com.br/noticias/noticia-livros-direito.html",
    resumo: "Clássicos da literatura universal, ficção jurídica e obras brasileiras que dialogam com o universo do Direito.",
    data: "15/07/2026",
    horario: "09:00",
    categoria: "variedades",
    categoriaLabel: "📖 Leitura Recomendada",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/literatura_e_direito.png",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed_unisinos_regulariza.jpg",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/carteirinha-estudantil.jpg",
    destaque: false,
    futuro: false
  },
  {
    titulo: "Guia Completo: Como Criar Apresentações de Slides Notáveis",
    link: "https://caedunisinos.com.br/noticias/noticia-guia-apresentacoes.html",
    resumo: "Do planejamento à execução: ferramentas, design, uso de IA e cuidados com o ambiente de exibição.",
    data: "05/07/2026",
    horario: "16:30",
    categoria: "academico",
    categoriaLabel: "🎓 Dicas Acadêmicas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/unisinos_criar_slides.png",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/colecao-inverno-2026.jpg",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/prestacao-contas.jpg",
    destaque: false,
    futuro: false
  },

  // ==========================================================
  //  ⭐ JUNHO 2026 — PUBLICADOS
  // ==========================================================

  {
    titulo: "CAED propõe eleições verdadeiramente democráticas para o DCE",
    link: "https://caedunisinos.com.br/noticias/noticia-reforma-estatutaria-dce.html",
    resumo: "O CAED apresentou sua proposta de alteração do Estatuto do DCE Unisinos para garantir eleições mais democráticas.",
    data: "25/06/2026",
    horario: "15:30",
    categoria: "representacao",
    categoriaLabel: "🚨 Última Hora",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/DCEvsCAED.jpeg",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/DCEvsCAED.jpeg",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/equipe_caed.jpeg",
    destaque: false,
    futuro: false
  }

];

// ==========================================================
//  HELPERS — Verificação dinâmica de data/hora
//  ----------------------------------------------------------
//  Estas funções permitem que o site exiba automaticamente
//  cada post APENAS quando sua data + horário chegarem.
//  Nada precisa ser editado manualmente no futuro.
// ==========================================================

/**
 * Verifica se um post já foi publicado (data + horário <= agora).
 * @param {Object} post
 * @returns {boolean}
 */
function postPublicado(post) {
  if (!post || !post.data) return false;
  try {
    const [dia, mes, ano] = post.data.split('/').map(Number);
    const horaStr = post.horario || '00:00';
    const [hora, minuto] = horaStr.split(':').map(Number);
    const dataPost = new Date(ano, mes - 1, dia, hora, minuto, 0);
    return new Date() >= dataPost;
  } catch (e) {
    console.warn('Erro ao verificar data do post:', post.titulo, e);
    return false;
  }
}

/**
 * Retorna apenas os posts JÁ PUBLICADOS, ordenados por data desc.
 * Use em noticias.html e index.html.
 */
function getPostsPublicados() {
  return posts
    .filter(postPublicado)
    .sort((a, b) => {
      const da = a.data.split('/').reverse().join('');
      const db = b.data.split('/').reverse().join('');
      return db.localeCompare(da);
    });
}

/**
 * Retorna apenas os posts FUTUROS, ordenados por data asc.
 */
function getPostsFuturos() {
  return posts
    .filter(p => !postPublicado(p))
    .sort((a, b) => {
      const da = a.data.split('/').reverse().join('');
      const db = b.data.split('/').reverse().join('');
      return da.localeCompare(db);
    });
}

/**
 * Retorna TODOS os posts, ordenados por data desc.
 * Use em arquivo.html (índice completo, com badge "Em breve").
 */
function getTodosPosts() {
  return [...posts].sort((a, b) => {
    const da = a.data.split('/').reverse().join('');
    const db = b.data.split('/').reverse().join('');
    return db.localeCompare(da);
  });
}

// ==========================================================
//  NÃO MODIFICAR A PARTIR DAQUI
// ==========================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { posts, postPublicado, getPostsPublicados, getPostsFuturos, getTodosPosts };
}
