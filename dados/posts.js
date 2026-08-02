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
  imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/nome-da-imagem.jpg",
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
  //  NOTÍCIAS INSTITUCIONAIS (do seu noticias.html)
  // ==========================================================
  {
    titulo: "CAED encaminha à Unisinos o Projeto Aluno Destaque",
    link: "https://caedunisinos.com.br/noticias/projeto-aluno-destaque.html",
    resumo: "Iniciativa visa reconhecer e premiar os melhores estudantes de Direito da Unisinos a cada semestre, com troféu, certificado e créditos acadêmicos.",
    data: "31/07/2026",
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
    data: "30/07/2026",
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
    data: "22/07/2026",
    horario: "16:00",
    categoria: "acessibilidade",
    categoriaLabel: "♿ Inclusão Digital",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/acessibilidade-digital-inclusao.jpg",
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
    titulo: "Férias com Direito: 30 filmes que todo estudante de Direito deveria assistir",
    link: "https://caedunisinos.com.br/noticias/noticia-filmes-ferias.html",
    resumo: "Clássicos nacionais e internacionais que dialogam com o universo jurídico e ajudam a aprender Direito fora da sala de aula.",
    data: "09/07/2026",
    horario: "08:30",
    categoria: "variedades",
    categoriaLabel: "🎓 Férias com Direito",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/F%C3%A9rias%20com%20Direito%2030%20filmes%20que%20todo%20estudante%20de%20Direito%20deveria%20assistir.png",
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
  },
  {
    titulo: "Grupos Oficiais de WhatsApp do Curso de Direito da Unisinos",
    link: "https://caedunisinos.com.br/noticias/noticia-grupos-whatsapp.html",
    resumo: "Fique por dentro de tudo o que acontece no curso! O CAED indica os grupos oficiais de WhatsApp.",
    data: "10/06/2026",
    horario: "14:30",
    categoria: "comunidade",
    categoriaLabel: "📲 Conecte-se",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/caed_grupos_whatsapp.png",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/unisinos_criar_slides.png",
    destaque: false,
    futuro: false
  },

  // ==========================================================
  //  POSTAGENS FUTURAS (programadas - SÓ APARECEM NO ARQUIVO)
  // ==========================================================
  {
    titulo: "📌 NOVIDADE: CAED lança plataforma de mentoria para calouros",
    link: "https://caedunisinos.com.br/noticias/mentoria-calouros-caed.html",
    resumo: "Programa de mentoria para apoiar os novos estudantes de Direito da Unisinos em São Leopoldo e Porto Alegre.",
    data: "15/09/2026",
    horario: "08:00",
    categoria: "institucional",
    categoriaLabel: "🔮 Em breve",
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/mentoria-calouros.jpg",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/palestra-ia.jpg",
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
    imagem: "https://raw.githubusercontent.com/caedunisinos/caedunisinos.github.io/main/noticias/noticias_imagens/processo-seletivo-caed.jpg",
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
