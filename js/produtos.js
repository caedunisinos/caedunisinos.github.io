// js/produtos.js
const PRODUTOS = [
  {
    slug: 'camiseta-preta',
    nome: 'Camiseta Preta Direito Unisinos',
    preco: 'R$ 65,00',
    descricao: 'Camiseta preta com estampa "DIREITO UNISINOS". Modelo tradicional, 100% algodão. Tamanhos P a XG.',
    imagem: '/imagens/camiseta-preta-direito-unisinos.jpg',
    disponivel: true,
    badge: '🆕 NOVO PEDIDO',
    badgeCor: '#b8860b',
    tamanhos: 'P, M, G, GG, XG',
    tabela: 'normal'
  },
  {
    slug: 'camiseta-outubro-rosa',
    nome: 'Camiseta Outubro Rosa Direito Unisinos',
    preco: 'R$ 65,00',
    descricao: 'Camiseta rosa com estampa "DIREITO UNISINOS". Modelo tradicional, 100% algodão. Tamanhos P a XG.',
    imagem: '/imagens/camiseta-outubro-rosa-direito-unisinos.jpg',
    disponivel: true,
    badge: '🆕 NOVO PEDIDO',
    badgeCor: '#b8860b',
    tamanhos: 'P, M, G, GG, XG',
    tabela: 'normal'
  },
  {
    slug: 'camiseta-baby-look',
    nome: 'Camiseta Baby Look Direito Unisinos',
    preco: 'R$ 65,00',
    descricao: 'Camiseta Baby Look com estampa "DIREITO UNISINOS". Modelo feminino, 100% algodão. Tamanhos M a XG.',
    imagem: '/imagens/camiseta-baby-look-direito-unisinos.jpg',
    disponivel: true,
    badge: '🆕 NOVO PEDIDO',
    badgeCor: '#b8860b',
    tamanhos: 'M, G, GG, XG',
    tabela: 'baby'
  },
  {
    slug: 'camiseta-oversized',
    nome: 'Camiseta Direito Unisinos (Oversized)',
    preco: 'R$ 65,00',
    descricao: 'Modelo oversized preto com estampa "Direito Unisinos" na frente e logotipo Unisinos na manga. Peça de alta qualidade.',
    imagem: '/imagens/camiseta-oversized-direito-unisinos.jpg',
    disponivel: false,
    badge: '⏳ VOLTA EM BREVE',
    badgeCor: '#888',
    tamanhos: 'P, M, G, GG, XG',
    tabela: 'normal'
  },
  {
    slug: 'moletom-preto',
    nome: 'Moletom Direito Unisinos – Versão Preto',
    preco: 'R$ 155,00',
    descricao: 'Moletom preto com "Direito Unisinos" frontal e arte exclusiva da deusa Themis nas costas. Logotipo Unisinos na manga.',
    imagem: '/imagens/moletom-preto-direito-unisinos.jpg',
    disponivel: false,
    badge: '⏳ VOLTA EM BREVE',
    badgeCor: '#888',
    tamanhos: 'P, M, G, GG, XG, XXG',
    tabela: 'moletom'
  },
  {
    slug: 'moletom-bordo',
    nome: 'Moletom Bordô Direito Unisinos',
    preco: 'R$ 155,00',
    descricao: 'Moletom bordô com estampa "DIREITO UNISINOS". Conforto e estilo para os dias frios. Tamanhos P a XXG.',
    imagem: '/imagens/moletom-bordo-direito-unisinos.jpg',
    disponivel: true,
    badge: '🆕 NOVO PEDIDO',
    badgeCor: '#b8860b',
    tamanhos: 'P, M, G, GG, XG, XXG',
    tabela: 'moletom'
  },
  {
    slug: 'ecobag',
    nome: 'Ecobag Direito Unisinos',
    preco: 'R$ 35,00',
    descricao: 'Ecobag sustentável com estampa "DIREITO UNISINOS". Perfeita para o dia a dia acadêmico.',
    imagem: '/imagens/ecobag-direito-unisinos.jpg',
    disponivel: true,
    badge: '🆕 NOVO PEDIDO',
    badgeCor: '#b8860b',
    tamanhos: 'Única (42x38 cm)',
    tabela: 'ecobag'
  },
  {
    slug: 'carteirinha',
    nome: 'Carteirinha Estudantil CAED',
    preco: 'R$ 40,00',
    descricao: 'Carteirinha estudantil com meia-entrada. Válida para todos os alunos. Disponível o ano todo.',
    imagem: '/imagens/carteirinha-estudantil-caed.jpg',
    disponivel: true,
    badge: '✅ DISPONÍVEL O ANO TODO',
    badgeCor: '#2e7d32',
    tamanhos: 'Única',
    tabela: null
  },
  {
    slug: 'kit-cuia',
    nome: 'Kit Cuia de Chimarrão e Bomba Direito Unisinos',
    preco: 'R$ 70,00',
    descricao: 'Kit completo com cuia e bomba de chimarrão totalmente personalizados com a identidade "Direito Unisinos".',
    imagem: '/imagens/kit-cuia-caed.jpg',
    disponivel: false,
    badge: '⏳ VOLTA EM BREVE',
    badgeCor: '#888',
    tamanhos: 'Único',
    tabela: null
  }
];
