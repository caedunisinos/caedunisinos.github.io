// js/produtos.js
// ============================================================
// CATÁLOGO DE PRODUTOS – CAED Direito Unisinos
// ------------------------------------------------------------
// Ordem: disponíveis primeiro (destaque), depois esgotados.
// Status possíveis:
//   'ano-todo'   → disponível o ano inteiro (evergreen)
//   'ultimas'    → últimas unidades disponíveis (urgência)
//   'esgotado'   → fora de estoque, volta em breve
// ------------------------------------------------------------
// CTA padronizado:
//   disponivel → "📦 RESERVAR AGORA"     (.btn-reservar)
//   esgotado   → "🔔 AVISE-ME QUANDO VOLTAR" (.btn-aviseme)
// ============================================================

const PRODUTOS = [
  // ============================================================
  // ✅ PRODUTOS DISPONÍVEIS (2) – exibidos primeiro
  // ============================================================
  {
    slug: 'carteirinha',
    nome: 'Carteirinha Estudantil CAED',
    preco: 'R$ 40,00',
    descricao: 'Carteirinha estudantil com meia-entrada garantida. Válida para todos os alunos de Direito da UNISINOS. Disponível o ano todo.',
    imagem: '/imagens/carteirinha-estudantil-caed.jpg',
    status: 'ano-todo',
    disponivel: true,
    destaque: true,
    ordem: 1,
    badge: '✅ DISPONÍVEL O ANO TODO',
    badgeCor: '#2e7d32',
    badgeIcone: '✅',
    cta: {
      tipo: 'reservar',
      icone: '🎫',
      texto: 'SOLICITAR CARTEIRINHA',
      classe: 'btn-reservar'
    },
    tamanhos: 'Única',
    tabela: null
  },
  {
    slug: 'ecobag',
    nome: 'Ecobag Direito Unisinos',
    preco: 'R$ 35,00',
    descricao: 'Ecobag sustentável com estampa "DIREITO UNISINOS". Perfeita para o dia a dia acadêmico. Últimas unidades disponíveis!',
    imagem: '/imagens/ecobag-direito-unisinos.jpg',
    status: 'ultimas',
    disponivel: true,
    destaque: true,
    ordem: 2,
    badge: '🔥 ÚLTIMAS UNIDADES',
    badgeCor: '#c62828',
    badgeIcone: '🔥',
    cta: {
      tipo: 'reservar',
      icone: '📦',
      texto: 'RESERVAR AGORA',
      classe: 'btn-reservar'
    },
    tamanhos: 'Única (42x38 cm)',
    tabela: 'ecobag'
  },

  // ============================================================
  // ⏳ PRODUTOS ESGOTADOS (7) – exibidos depois
  // ============================================================
  {
    slug: 'moletom-bordo',
    nome: 'Moletom Bordô Direito Unisinos',
    preco: 'R$ 155,00',
    descricao: 'Moletom bordô com estampa "DIREITO UNISINOS". Conforto e estilo para os dias frios. Tamanhos P a XXG.',
    imagem: '/imagens/moletom-bordo-direito-unisinos.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 10,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'P, M, G, GG, XG, XXG',
    tabela: 'moletom'
  },
  {
    slug: 'moletom-preto',
    nome: 'Moletom Direito Unisinos – Versão Preto',
    preco: 'R$ 155,00',
    descricao: 'Moletom preto com "Direito Unisinos" frontal e arte exclusiva da deusa Themis nas costas.',
    imagem: '/imagens/moletom-preto-direito-unisinos.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 11,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'P, M, G, GG, XG, XXG',
    tabela: 'moletom'
  },
  {
    slug: 'camiseta-preta',
    nome: 'Camiseta Preta Direito Unisinos',
    preco: 'R$ 65,00',
    descricao: 'Camiseta preta com estampa "DIREITO UNISINOS". Modelo tradicional, 100% algodão. Tamanhos P a XG.',
    imagem: '/imagens/camiseta-preta-direito-unisinos.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 12,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'P, M, G, GG, XG',
    tabela: 'normal'
  },
  {
    slug: 'camiseta-outubro-rosa',
    nome: 'Camiseta Outubro Rosa Direito Unisinos',
    preco: 'R$ 65,00',
    descricao: 'Camiseta rosa com estampa "DIREITO UNISINOS". Modelo tradicional, 100% algodão. Tamanhos P a XG.',
    imagem: '/imagens/camiseta-outubro-rosa-direito-unisinos.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 13,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'P, M, G, GG, XG',
    tabela: 'normal'
  },
  {
    slug: 'camiseta-baby-look',
    nome: 'Camiseta Baby Look Direito Unisinos',
    preco: 'R$ 65,00',
    descricao: 'Camiseta Baby Look com estampa "DIREITO UNISINOS". Modelo feminino, 100% algodão. Tamanhos M a XG.',
    imagem: '/imagens/camiseta-baby-look-direito-unisinos.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 14,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'M, G, GG, XG',
    tabela: 'baby'
  },
  {
    slug: 'camiseta-oversized',
    nome: 'Camiseta Direito Unisinos (Oversized)',
    preco: 'R$ 65,00',
    descricao: 'Modelo oversized preto com estampa "Direito Unisinos" na frente e logotipo Unisinos na manga.',
    imagem: '/imagens/camiseta-oversized-direito-unisinos.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 15,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'P, M, G, GG, XG',
    tabela: 'normal'
  },
  {
    slug: 'kit-cuia',
    nome: 'Kit Cuia de Chimarrão e Bomba Direito Unisinos',
    preco: 'R$ 70,00',
    descricao: 'Kit completo com cuia e bomba de chimarrão totalmente personalizados com a identidade "Direito Unisinos".',
    imagem: '/imagens/kit-cuia-caed.jpg',
    status: 'esgotado',
    disponivel: false,
    destaque: false,
    ordem: 16,
    badge: '⏳ ESGOTADO – VOLTA EM BREVE',
    badgeCor: '#888',
    badgeIcone: '⏳',
    cta: {
      tipo: 'avisar',
      icone: '🔔',
      texto: 'AVISE-ME QUANDO VOLTAR',
      classe: 'btn-aviseme'
    },
    tamanhos: 'Único',
    tabela: null
  }
];

// ============================================================
// HELPERS (opcionais) — úteis para o loja.html
// ============================================================
// Retorna produtos ordenados por 'ordem' crescente
const produtosOrdenados = () => [...PRODUTOS].sort((a, b) => a.ordem - b.ordem);

// Retorna apenas os produtos em destaque (topo da loja)
const produtosDestaque = () => produtosOrdenados().filter(p => p.destaque);

// Retorna apenas os disponíveis (ano-todo + ultimas)
const produtosDisponiveis = () => produtosOrdenados().filter(p => p.disponivel);

// Retorna apenas os esgotados
const produtosEsgotados = () => produtosOrdenados().filter(p => !p.disponivel);
