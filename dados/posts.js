// ============================================================
// dados/posts.js
// Base de dados de notícias do CAED – Direito UNISINOS
// ------------------------------------------------------------
// Estrutura de cada post:
//   titulo          → Título da notícia
//   link            → URL completa da notícia
//   resumo          → Resumo curto (usado em cards)
//   data            → DD/MM/AAAA (formato brasileiro)
//   horario         → HH:MM
//   categoria       → slug (usado nos filtros)
//   categoriaLabel  → Rótulo com emoji (exibido no card)
//   imagem          → URL da imagem de capa
//   destaque        → true = aparece em destaque na home
//   futuro          → true = post agendado (badge "Em breve")
// ------------------------------------------------------------
// Categorias disponíveis (para arquivo.html / filtros):
//   institucional · eventos · academico · carreira
//   direito-digital · variedades · representacao
//   servicos · loja · transparencia · comunidade
// ============================================================

const posts = [

  // ============================================================
  // OUTUBRO 2026
  // ============================================================

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
    futuro: false
  },

  {
    titulo: "Direito ao Esquecimento: o que o STF decidiu e seus impactos no Direito Digital",
    link: "https://caedunisinos.com.br/noticias/direito-ao-esquecimento-stf-impactos-direito-digital-2026.html",
    resumo: "Análise do julgamento do RE 1.010.606/RJ pelo STF: o que é o direito ao esquecimento, por que foi considerado incompatível com a Constituição e como se relaciona com a LGPD.",
    data: "07/10/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital · STF",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direito-ao-esquecimento-stf-impactos-caed-unisinos.jpg",
    destaque: false,
    futuro: false
  },

  // ============================================================
  // AGENDADOS — OUTUBRO E NOVEMBRO 2026
  // ============================================================

  {
    titulo: "Countdown Corrida: faltam 4 dias para a 1ª Corrida da Unisinos",
    link: "https://caedunisinos.com.br/noticias/primeira-corrida-unisinos-2026.html",
    resumo: "Faltam apenas 4 dias para a 1ª Corrida da Unisinos! Prepare o tênis, a hidratação e venha fazer parte deste marco esportivo no Campus São Leopoldo.",
    data: "14/10/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🏃 Corrida Unisinos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/primeira-corrida-unisinos-2026-caed.jpg",
    destaque: false,
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

  // ============================================================
  // NOVEMBRO 2026
  // ============================================================

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

  // ============================================================
  // DEZEMBRO 2026
  // ============================================================

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

  // ============================================================
  // NOTÍCIAS RECENTES (setembro–agosto 2026)
  // ============================================================

  {
    titulo: "1ª Corrida da Unisinos: CAED, AD Sports e Tubarão apresentam evento histórico",
    link: "https://caedunisinos.com.br/noticias/primeira-corrida-unisinos-2026.html",
    resumo: "O CAED, em parceria com AD Sports e a Atlética Tubarão, apresenta a 1ª Corrida da Unisinos — 5 km no campus São Leopoldo. Inscrições abertas com 10% de desconto para alunos!",
    data: "28/09/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🏃 1ª Corrida da Unisinos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/primeira-corrida-unisinos-2026-caed.jpg",
    destaque: true,
    futuro: false
  },

  {
    titulo: "CAED informa: atividades remotas na Unisinos em 21 de setembro de 2026",
    link: "https://caedunisinos.com.br/noticias/caed-informa-atividades-remotas-unisinos-21-setembro-2026.html",
    resumo: "O CAED informa à comunidade acadêmica sobre a alteração no calendário: aulas remotas em 21 de setembro de 2026. Confira os detalhes.",
    data: "18/09/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🏛️ Informe Institucional",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-informa-atividades-remotas-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Pesquisa de Satisfação CAED 2026/2: sua opinião define o futuro da gestão",
    link: "https://caedunisinos.com.br/noticias/pesquisa-satisfacao-caed-2026-2.html",
    resumo: "Participe da Pesquisa de Satisfação CAED 2026/2! Sua opinião é fundamental para definir os próximos passos da gestão A Mudança Precisa Continuar.",
    data: "15/09/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "📊 Pesquisa de Satisfação",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/pesquisa-satisfacao-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED notifica DCE extrajudicialmente por descumprimento estatutário",
    link: "https://caedunisinos.com.br/noticias/caed-notifica-dce-extrajudicialmente-descumprimento.html",
    resumo: "O CAED, por meio de sua assessoria jurídica, notificou extrajudicialmente o DCE da UNISINOS por descumprimento do estatuto. Entenda o caso.",
    data: "12/09/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "⚖️ Notificação DCE",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/notificacao-extrajudicial-dce-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Nota Oficial: CAED reafirma neutralidade institucional nas Eleições 2026",
    link: "https://caedunisinos.com.br/noticias/nota-oficial-caed-eleicoes-2026.html",
    resumo: "Em nota oficial, o CAED reafirma seu compromisso com a neutralidade institucional e com a defesa da democracia durante o período eleitoral de 2026.",
    data: "10/09/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🗳️ Nota Oficial",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/nota-oficial-eleicoes-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Palestra Marcos Rolim: Justiça Restaurativa no campus Porto Alegre",
    link: "https://caedunisinos.com.br/noticias/palestra-marcos-rolim-justica-restaurativa-poa.html",
    resumo: "Marcos Rolim apresenta 'Além da punição: os caminhos da Justiça Restaurativa' no Campus Porto Alegre. Não perca!",
    data: "09/09/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "⚖️ Justiça Restaurativa · POA",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-marcos-rolim-poa-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Palestra Dra. Audri Castro: Direito Médico – do atestado ao Tribunal",
    link: "https://caedunisinos.com.br/noticias/palestra-direito-medico-audri-castro-caed-unisinos.html",
    resumo: "Uma imersão prática na interface entre o Direito e a Medicina com a Dra. Audri Castro. Evento imperdível para quem se interessa pelo Direito Médico.",
    data: "08/09/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🩺 Direito Médico",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-audri-castro-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Palestra Marcos Rolim: Justiça Restaurativa em São Leopoldo",
    link: "https://caedunisinos.com.br/noticias/palestra-marcos-rolim-justica-restaurativa.html",
    resumo: "Marcos Rolim apresenta 'Além da punição: os caminhos da Justiça Restaurativa' no Campus São Leopoldo.",
    data: "04/09/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "⚖️ Justiça Restaurativa",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-marcos-rolim-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Mês Acadêmico CAED: palestra com Juiz Alexandre Kosby Boeira",
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-primeiro-palestrante-juiz-alexandre-boeira.html",
    resumo: "Entre a crise e a sobrevivência: o papel do Judiciário na recuperação das empresas. Aula magna com o Juiz Alexandre Kosby Boeira.",
    data: "28/08/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "⚖️ Mês Acadêmico · Aula Magna",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/mes-academico-juiz-boeira-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Mês Acadêmico CAED Unisinos 2026: programação completa",
    link: "https://caedunisinos.com.br/noticias/mes-academico-caed-unisinos-2026.html",
    resumo: "O Mês Acadêmico CAED Unisinos 2026 está chegando com uma programação intensa: palestras, debates, networking e a 1ª Corrida da Unisinos.",
    data: "24/08/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "🎓 Mês Acadêmico 2026",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/mes-academico-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED conquista sala no Campus Porto Alegre: uma vitória histórica",
    link: "https://caedunisinos.com.br/noticias/caed-conquista-sala-campus-porto-alegre.html",
    resumo: "Após meses de articulação, o CAED conquista um espaço físico no Campus Porto Alegre para melhor servir aos estudantes de Direito.",
    data: "21/08/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏛️ Conquista CAED · POA",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-conquista-sala-poa-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Direito Digital e Perícia Computacional: a nova fronteira da advocacia",
    link: "https://caedunisinos.com.br/noticias/direito-digital-pericia-caed.html",
    resumo: "Descubra como o Direito Digital e a perícia computacional estão revolucionando a advocacia e abrindo novas fronteiras para os estudantes de Direito.",
    data: "17/08/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/direito-digital-pericia-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Guia de Formatura em Direito Unisinos: tudo que você precisa saber",
    link: "https://caedunisinos.com.br/noticias/guia-formatura-direito-unisinos-caed.html",
    resumo: "Guia completo do CAED sobre formatura em Direito: procedimentos, prazos, documentos, cerimonial e dicas práticas para os formandos.",
    data: "14/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 Guia de Formatura",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-formatura-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Nota Pública: CAED repudia ação do DCE no Campus Porto Alegre",
    link: "https://caedunisinos.com.br/noticias/nota-publica-caed-repudia-dce-sala-poa.html",
    resumo: "O CAED torna pública sua posição sobre a ação do DCE no Campus Porto Alegre. Confira a nota na íntegra.",
    data: "12/08/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "📢 Nota Pública",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/nota-publica-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Acolhida CAED 2026/2: recepção aos calouros de Direito",
    link: "https://caedunisinos.com.br/noticias/acolhida-caed-2026-2.html",
    resumo: "O CAED dá boas-vindas aos calouros de Direito no semestre 2026/2. Conheça as atividades de acolhida e integração.",
    data: "08/08/2026",
    horario: "08:00",
    categoria: "variedades",
    categoriaLabel: "🎓 Acolhida 2026/2",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/acolhida-caed-2026-2.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Dia do Advogado: homenagem do CAED aos profissionais do Direito",
    link: "https://caedunisinos.com.br/noticias/dia-do-advogado-caed-homenagem.html",
    resumo: "Neste 11 de agosto, o CAED presta homenagem a todos os advogados e advogadas que constroem a justiça brasileira.",
    data: "11/08/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "⚖️ Dia do Advogado",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dia-advogado-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  // ============================================================
  // NOTÍCIAS ANTERIORES (julho e anteriores)
  // ============================================================

  {
    titulo: "CAED estreia no LinkedIn com conteúdo exclusivo para estudantes de Direito",
    link: "https://caedunisinos.com.br/noticias/caed-estreia-no-linkedin-conteudo-exclusivo.html",
    resumo: "O CAED agora está no LinkedIn! Siga para acompanhar conteúdos exclusivos sobre carreira, mercado jurídico e formação complementar.",
    data: "25/07/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "💼 CAED no LinkedIn",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-estreia-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED lança página de Vagas de Estágio em Direito",
    link: "https://caedunisinos.com.br/noticias/caed-lanca-pagina-vagas-estagio-direito.html",
    resumo: "O CAED lança uma página dedicada a vagas de estágio em Direito, com oportunidades atualizadas e dicas para o mercado jurídico.",
    data: "22/07/2026",
    horario: "08:00",
    categoria: "carreira",
    categoriaLabel: "💼 Vagas de Estágio",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-vagas-estagio-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Vitória da Democracia: propostas do CAED aprovadas na Assembleia do DCE",
    link: "https://caedunisinos.com.br/noticias/noticia-vitoria-dce-caed.html",
    resumo: "Em um marco histórico para a representação estudantil, as propostas do CAED foram aprovadas na Assembleia Geral do DCE. Entenda o que mudou.",
    data: "18/07/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🏆 Vitória Democrática",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/vitoria-dce-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Reforma Estatutária do DCE: o que está em jogo para os estudantes",
    link: "https://caedunisinos.com.br/noticias/noticia-reforma-estatutaria-dce.html",
    resumo: "Entenda o processo de reforma estatutária do DCE da UNISINOS e por que ele importa para a representação estudantil.",
    data: "15/07/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "📜 Reforma Estatutária",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/reforma-estatutaria-dce-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED protocola Projeto Mulheres no Direito",
    link: "https://caedunisinos.com.br/noticias/caed-protocola-projeto-mulheres-no-direito.html",
    resumo: "O CAED protocola o Projeto Mulheres no Direito, uma iniciativa que visa ampliar a participação feminina na advocacia e no mercado jurídico.",
    data: "10/07/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "♀️ Mulheres no Direito",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/projeto-mulheres-direito-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Chega de Fraudes Eleitorais no Processo Eleitoral do DCE",
    link: "https://caedunisinos.com.br/noticias/dce-fraudes-eleitorais-2026.html",
    resumo: "O CAED denuncia fraudes no processo eleitoral do DCE e reafirma seu compromisso com a transparência e a democracia estudantil.",
    data: "05/07/2026",
    horario: "08:00",
    categoria: "representacao",
    categoriaLabel: "🚨 Fraudes DCE",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/fraudes-eleitorais-dce-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED em Porto Alegre: como encontrar e participar",
    link: "https://caedunisinos.com.br/noticias/caed-porto-alegre-como-encontrar-participar.html",
    resumo: "Guia completo para os estudantes de Direito do Campus Porto Alegre: como encontrar o CAED, participar das atividades e se engajar.",
    data: "28/06/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "📍 CAED em POA",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-porto-alegre-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Projeto Aluno Destaque: reconhecendo os talentos do Direito Unisinos",
    link: "https://caedunisinos.com.br/noticias/projeto-aluno-destaque.html",
    resumo: "O Projeto Aluno Destaque reconhece e valoriza os estudantes de Direito da UNISINOS que se destacam academicamente e socialmente.",
    data: "20/06/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🏆 Aluno Destaque",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/projeto-aluno-destaque-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Regulariza Unisinos: iniciativas de apoio aos estudantes",
    link: "https://caedunisinos.com.br/noticias/noticia-regulariza-unisinos.html",
    resumo: "Conheça as iniciativas do Regulariza Unisinos e como o CAED atua no apoio aos estudantes em situação de irregularidade acadêmica.",
    data: "15/06/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "📋 Regulariza Unisinos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/regulariza-unisinos-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Acessibilidade Digital no CAED: inclusão que transforma",
    link: "https://caedunisinos.com.br/noticias/noticia-acessibilidade-caed.html",
    resumo: "O CAED investe em acessibilidade digital: VLibras, leitura por voz, comandos de voz e outras ferramentas para tornar o conteúdo acessível a todos.",
    data: "10/06/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "♿ Acessibilidade",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/acessibilidade-digital-caed-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Encerramento da Gestão 2025/2: prestação de contas e conquistas",
    link: "https://caedunisinos.com.br/noticias/encerramento-gestao-2025-2.html",
    resumo: "Confira o balanço final da Gestão 2025/2: prestação de contas, conquistas e agradecimentos aos membros que fizeram parte desta história.",
    data: "05/06/2026",
    horario: "08:00",
    categoria: "transparencia",
    categoriaLabel: "📊 Prestação de Contas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/encerramento-gestao-2025-2.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Coleção Inverno CAED 2026: conheça as peças da coleção",
    link: "https://caedunisinos.com.br/noticias/colecao-inverno-2026.html",
    resumo: "Apresentamos a Coleção Inverno CAED 2026: Moletom Preto, Moletom Bordô, Camisetas, Ecobag e Kit Chimarrão. Vista a camisa do Direito Unisinos!",
    data: "01/06/2026",
    horario: "08:00",
    categoria: "loja",
    categoriaLabel: "🧥 Coleção Inverno 2026",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/colecao-inverno-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Carteirinha Estudantil Unisinos: como solicitar a sua",
    link: "https://caedunisinos.com.br/noticias/carteirinha-estudantil-unisinos-como-solicitar.html",
    resumo: "Passo a passo completo para solicitar a Carteirinha Estudantil Unisinos. Garanta sua meia-entrada em cinemas, teatros e eventos culturais.",
    data: "25/05/2026",
    horario: "08:00",
    categoria: "servicos",
    categoriaLabel: "🎫 Carteirinha Estudantil",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/carteirinha-estudantil-unisinos.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Carteirinha AERGS: entenda as diferenças e vantagens",
    link: "https://caedunisinos.com.br/noticias/carteirinha-estudantil-aergs.html",
    resumo: "Entenda o que é a Carteirinha AERGS, como funciona e quais as diferenças em relação à Carteirinha Estudantil Unisinos.",
    data: "20/05/2026",
    horario: "08:00",
    categoria: "servicos",
    categoriaLabel: "🎫 Carteirinha AERGS",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/carteirinha-aergs-2026.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Grupos de WhatsApp do CAED: conecte-se com a sua turma",
    link: "https://caedunisinos.com.br/noticias/noticia-grupos-whatsapp.html",
    resumo: "Faça parte dos grupos oficiais de WhatsApp do CAED por semestre e disciplina. Fique por dentro de tudo que acontece no Direito Unisinos.",
    data: "15/05/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "💬 Grupos WhatsApp",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/grupos-whatsapp-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Guia de Links Jurídicos: os melhores recursos para estudantes de Direito",
    link: "https://caedunisinos.com.br/noticias/guia-links-juridicos-caed.html",
    resumo: "Seleção do CAED com os melhores links jurídicos: portais de jurisprudência, doutrina, legislação e recursos gratuitos para estudantes de Direito.",
    data: "10/05/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🔗 Guia de Links Jurídicos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-links-juridicos-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Vade Mecum Digital e E-books gratuitos: onde baixar",
    link: "https://caedunisinos.com.br/noticias/vade-mecum-ebooks-gratuitos-caed.html",
    resumo: "Guia completo do CAED com links para Vade Mecum digital e e-books jurídicos gratuitos. Economize nos livros sem perder qualidade nos estudos.",
    data: "05/05/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📖 Vade Mecum Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/vade-mecum-ebooks-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Simulados OAB: prepare-se com o CAED",
    link: "https://caedunisinos.com.br/noticias/simulados-oab-prepare-se-caed.html",
    resumo: "O CAED disponibiliza simulados para o Exame da OAB. Prepare-se com questões reais e comentadas por professores especializados.",
    data: "30/04/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📝 Simulados OAB",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/simulados-oab-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Dicas para Calouros de Direito: o que você precisa saber",
    link: "https://caedunisinos.com.br/noticias/dicas-calouros-direito-caed-unisinos.html",
    resumo: "Guia completo do CAED para os calouros de Direito: como organizar os estudos, quais materiais adquirir, dicas de carreira e muito mais.",
    data: "25/04/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Dicas para Calouros",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/dicas-calouros-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Guia de Apresentações: como arrasar nos seminários",
    link: "https://caedunisinos.com.br/noticias/noticia-guia-apresentacoes.html",
    resumo: "Aprenda a estruturar apresentações, controlar o nervosismo e arrasar nos seminários da faculdade com o guia prático do CAED.",
    data: "20/04/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎤 Guia de Apresentações",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/guia-apresentacoes-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "30 Livros de Direito que todo estudante deveria ler",
    link: "https://caedunisinos.com.br/noticias/noticia-livros-direito.html",
    resumo: "Seleção do CAED com 30 livros essenciais para a formação jurídica: clássicos, contemporâneos e obras de referência.",
    data: "15/04/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 30 Livros de Direito",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/30-livros-direito-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "30 Filmes para Estudantes de Direito: os melhores do gênero jurídico",
    link: "https://caedunisinos.com.br/noticias/noticia-filmes-ferias.html",
    resumo: "Seleção do CAED com 30 filmes sobre Direito e justiça: clássicos, contemporâneos e obras essenciais para o repertório jurídico.",
    data: "10/04/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎬 30 Filmes Jurídicos",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/30-filmes-direito-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED anuncia nova parceria com Pankekas",
    link: "https://caedunisinos.com.br/noticias/caed-anuncia-nova-parceria-pankekas.html",
    resumo: "O CAED anuncia nova parceria com a Pankekas. Benefícios exclusivos para os estudantes de Direito da UNISINOS. Confira!",
    data: "05/04/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "🤝 Parceria Pankekas",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/parceria-pankekas-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Encontro 25 anos de Teoria do Direito na Unisinos",
    link: "https://caedunisinos.com.br/noticias/caed-encontro-25-anos-teoria-do-direito.html",
    resumo: "Celebramos 25 anos de Teoria do Direito na UNISINOS com um encontro especial que reuniu professores, alunos e egressos.",
    data: "30/03/2026",
    horario: "08:00",
    categoria: "eventos",
    categoriaLabel: "📖 Teoria do Direito",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/25-anos-teoria-direito.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Carta Aberta do CAED à comunidade acadêmica",
    link: "https://caedunisinos.com.br/noticias/Carta%20aberta.html",
    resumo: "Carta Aberta do CAED à comunidade acadêmica da UNISINOS sobre os desafios e compromissos da representação estudantil.",
    data: "25/03/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "✉️ Carta Aberta",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/carta-aberta-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Conecte-se ao CAED: todos os canais de comunicação",
    link: "https://caedunisinos.com.br/noticias/conecte-se-ao-caed-canais-comunicacao.html",
    resumo: "Conheça todos os canais oficiais de comunicação do CAED: WhatsApp, Instagram, LinkedIn, e-mail e Linktree. Fique sempre conectado!",
    data: "20/03/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "📲 Conecte-se ao CAED",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/conecte-se-caed.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "CAED no LinkedIn: 3 frentes de atuação na advocacia",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-3-frentes-atuacao-advocacia.html",
    resumo: "Conteúdo exclusivo do CAED no LinkedIn: entenda as 3 principais frentes de atuação na advocacia contemporânea.",
    data: "15/03/2026",
    horario: "08:00",
    categoria: "carreira",
    categoriaLabel: "💼 LinkedIn · Advocacia",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-advocacia.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Boas-vindas ao LinkedIn do CAED: conteúdo exclusivo para estudantes",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-boas-vindas-conteudo-exclusivo.html",
    resumo: "O CAED dá as boas-vindas ao seu LinkedIn oficial, com conteúdo exclusivo sobre carreira jurídica, mercado e formação complementar.",
    data: "10/03/2026",
    horario: "08:00",
    categoria: "comunidade",
    categoriaLabel: "💼 Boas-vindas LinkedIn",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-boas-vindas.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Acompanhe as decisões do STF durante a graduação",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-acompanhar-decisoes-stf-graduacao.html",
    resumo: "Conteúdo do CAED no LinkedIn: por que acompanhar as decisões do STF desde a graduação é fundamental para a formação jurídica.",
    data: "05/03/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "⚖️ STF na Graduação",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-stf.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Formação jurídica além da sala de aula: como se preparar",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-formacao-juridica-alem-sala-aula.html",
    resumo: "Conteúdo do CAED no LinkedIn: como complementar a formação jurídica com atividades extracurriculares, cursos e projetos.",
    data: "28/02/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🎓 Formação Além da Sala",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-formacao.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Processo legislativo no Senado: guia prático para estudantes de Direito",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-processo-legislativo-senado.html",
    resumo: "Conteúdo do CAED no LinkedIn: entenda como funciona o processo legislativo no Senado Federal e sua importância para o Direito.",
    data: "22/02/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "🏛️ Processo Legislativo",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-senado.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "RUF 2025: Direito Unisinos entre os melhores do Brasil",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-ruf-2025-direito-unisinos.html",
    resumo: "Conteúdo do CAED no LinkedIn: Direito Unisinos se destaca no Ranking Universitário Folha (RUF) 2025. Confira os números.",
    data: "15/02/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🏆 RUF 2025",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-ruf-2025.jpg",
    destaque: false,
    futuro: false
  },

  {
    titulo: "Livros jurídicos que transformam o pensamento",
    link: "https://caedunisinos.com.br/noticias/caed-linkedin-livros-juridicos-transformam-pensamento.html",
    resumo: "Conteúdo do CAED no LinkedIn: uma seleção de livros jurídicos que transformam a forma de pensar o Direito e a sociedade.",
    data: "08/02/2026",
    horario: "08:00",
    categoria: "academico",
    categoriaLabel: "📚 Livros Transformadores",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed-linkedin-livros.jpg",
    destaque: false,
    futuro: false
  }

];

// ============================================================
// Exportação (compatível com módulos ES6 / CommonJS / global)
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { posts };
}
