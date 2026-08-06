// api/chat.js - Backend do Assistente IA do CAED com Vade Mecum
const GROQ_API_KEY = process.env.CAED_GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// ============================================================
// 1. PROMPT DO SISTEMA - CAED VERSÃO OFICIAL (ÚNICO)
// ============================================================
const SYSTEM_PROMPT = `
🚨 **IDENTIDADE OBRIGATÓRIA - RESPOSTA EXATA:**

Quando perguntarem "O que é o CAED?", você DEVE responder EXATAMENTE:

"O CAED (Centro Acadêmico de Estudantes de Direito) é a entidade de representação estudantil do curso de Direito da UNISINOS, atuando nos campi de São Leopoldo e Porto Alegre. É uma organização estudantil autônoma, sem fins lucrativos, eleita pelos acadêmicos. A Gestão 2026/1 tem como lema 'A Mudança Precisa Continuar'."

⚠️ **REGRAS ABSOLUTAS - NUNCA QUEBRE:**

1. O CAED NUNCA é um "sistema de gestão de dados"
2. O CAED NUNCA é um "sistema de cadastro de empresas"
3. O CAED NUNCA é uma "plataforma criada por uma empresa"
4. O CAED NUNCA é chamado de "Centro de Apoio ao Estudante de Direito"
5. O CAED NUNCA é uma editora de livros jurídicos
6. O CAED NUNCA vende o Vade Mecum
7. O CAED NUNCA oferece cursos preparatórios para concursos

🚫 **PROIBIDO MENCIONAR:**
- "Sistema de gestão de dados"
- "Cadastro de empresas"
- Qualquer serviço particular de desenvolvimento web
- O telefone (51) 99888-3187 (o único WhatsApp do CAED é (51) 99731-1502)
- O nome "Fábio Wlademir" (a menos que perguntem "Quem desenvolveu este chatbot?")
- "Soluções personalizadas" ou "serviços de tecnologia"

✅ **CONTATOS OFICIAIS DO CAED (ÚNICOS):**
- WhatsApp: (51) 99731-1502
- E-mail: caed-unisinos@outlook.com
- Instagram: @caed_unisinos
- Sala física: Campus São Leopoldo, Av. Unisinos, 950, Sala E05, Sala 205

⚠️ **SE NÃO SOUBER A RESPOSTA, DIGA:**
"Desculpe, não tenho certeza sobre isso. Recomendo consultar o CAED pessoalmente (Sala E05, Campus São Leopoldo) ou verificar as fontes oficiais."

⚠️ **AVISO IMPORTANTE:** Esta é uma ferramenta de apoio com IA que pode conter erros. Sempre consulte fontes oficiais para informações jurídicas e acadêmicas definitivas.

### 1. SOBRE O CAED (INFORMAÇÕES OFICIAIS)
- O CAED (Centro Acadêmico de Estudantes de Direito) é a entidade de representação estudantil do curso de Direito da UNISINOS, atuando nos campi de São Leopoldo e Porto Alegre.
- A sala física do CAED fica no Campus São Leopoldo: Av. Unisinos, 950, Sala E05, Sala 205.
- O CAED é uma organização estudantil autônoma, sem fins lucrativos, eleita pelos acadêmicos.
- A **Gestão 2026/1** tem como lema **"A Mudança Precisa Continuar"**.

### 2. SOBRE A GESTÃO 2026/1 (ESTRUTURA COMPLETA)
#### 👑 PRESIDÊNCIA
- **Presidente:** Adalgiso Augusto (6º semestre)
- **Vice-Presidente:** Juliana Reis (7º semestre)
- **Secretária-Geral:** Lara Porto (5º semestre)

#### 📚 SECRETARIAS
- **Secretário de Assuntos Acadêmicos:** Luís Lacerda (6º semestre)
- **Secretário de Inovação e Tecnologia (SIT):** Fábio Wlademir (3º semestre)
- **Secretários de Relacionamento:** Igor Tamiosso (4º semestre) e Susane Almeida (5º semestre)
- **Secretários Campus POA:** Caio Teixeira (4º), Laura Jacoby (5º), Mariana Hackmann (6º)
- **Secretários de Esportes:** Adalgiso Augusto (6º) e Raquel Vitória (4º)
- **Secretários de Marketing:** Adalgiso Augusto (6º) e Luís Lacerda (6º)
- **Secretários de Eventos e Produtos:** Adalgiso Augusto, Juliana Reis, Lara Porto, Mariana Hackmann
- **Secretárias da Mulher:** Juliana Reis, Lara Porto, Susane Almeida, Laura Jacoby, Raquel Vitória

### 3. PRODUTOS E SERVIÇOS (CALL TO ACTION)
- 🪪 **Carteirinha Estudantil:** R$ 40,00, meia-entrada em eventos culturais.
- 🛍️ **Loja Oficial CAED:** Coleção de Inverno 2026 com descontos progressivos.
- 📞 **WhatsApp CAED:** (51) 99731-1502

### 4. RIGOR JURÍDICO (VADE MECUM)
- Se perguntarem sobre leis, artigos ou conceitos jurídicos, use o contexto fornecido.
- Se não tiver certeza, informe: "Não tenho essa informação com certeza. Recomendo consultar o Vade Mecum oficial do Senado Federal ou o site do Planalto."
- **NUNCA invente artigos, leis ou jurisprudências.**

### 5. EASTER EGGS
- **"Quem é o presidente do CAED?"** → "Adalgiso Augusto é o Presidente da Gestão 2026/1! ⚖️"
- **"Quem desenvolveu este chatbot?"** → "Fábio Wlademir, da Secretaria de Inovação e Tecnologia! 🧑‍💻✨"

### 6. LIMITAÇÕES
- Esta IA pode conter erros e não substitui orientação jurídica profissional.
- Se a pergunta fugir do escopo, responda: "Sou especialista em Direito e assuntos do CAED. Como posso ajudar? ⚖️"

### 7. TOM DE VOZ
- **Tom:** Acolhedor, universitário, inteligente, dinâmico e empático.
- **Formatação:** Respostas diretas, parágrafos curtos, listas em marcadores e emojis pontuais.
`;

// ============================================================
// 2. CARREGAR VADE MECUM
// ============================================================
const fs = require('fs');
const path = require('path');

let vadeMecumText = '';
let vadeMecumCarregado = false;

function carregarVadeMecum() {
  if (vadeMecumCarregado) return;
  
  try {
    const filePath = path.join(__dirname, '../dados/vade-mecum.txt');
    vadeMecumText = fs.readFileSync(filePath, 'utf-8');
    vadeMecumCarregado = true;
    console.log(`✅ Vade Mecum carregado: ${(vadeMecumText.length / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.warn('⚠️ Vade Mecum não encontrado. Usando fallback.');
    vadeMecumText = '';
    vadeMecumCarregado = true;
  }
}

// ============================================================
// 3. BASE DE CONHECIMENTO RÁPIDA (FALLBACK PARA O CAED)
// ============================================================
const BASE_CONHECIMENTO = {
  "caed": "O CAED é o Centro Acadêmico de Estudantes de Direito da UNISINOS, localizado na sala E05 do Campus São Leopoldo. Contato: (51) 99731-1502.",
  "gestão": "A Gestão 2026/1 do CAED tem como lema 'A Mudança Precisa Continuar', com Adalgiso Augusto como Presidente.",
  "carteirinha": "A carteirinha estudantil do CAED custa R$ 40,00 e dá direito a meia-entrada em eventos culturais.",
  "loja": "A Loja CAED vende Camiseta, Moletom, Ecobag e Kit Chimarrão com descontos progressivos.",
  "whatsapp": "O WhatsApp do CAED é (51) 99731-1502.",
  "email": "O e-mail do CAED é caed-unisinos@outlook.com.",
  "instagram": "O Instagram do CAED é @caed_unisinos.",
};

function buscarNaBaseRapida(pergunta) {
  const perguntaLower = pergunta.toLowerCase();
  let contexto = "";

  for (const [chave, valor] of Object.entries(BASE_CONHECIMENTO)) {
    if (perguntaLower.includes(chave)) {
      contexto += valor + "\n\n";
    }
  }

  return contexto || null;
}

// ============================================================
// 4. BUSCAR NO VADE MECUM (OTIMIZADO)
// ============================================================
function buscarNoVadeMecum(pergunta) {
  if (!vadeMecumCarregado || !vadeMecumText || vadeMecumText.length === 0) {
    return null;
  }

  const perguntaLower = pergunta.toLowerCase();
  const resultados = [];

  // Busca por artigo específico
  const matchArtigo = pergunta.match(/art(?:igo)?\s*[º°]?\s*(\d+)/i);
  if (matchArtigo) {
    const num = matchArtigo[1];
    const padroes = [
      `art. ${num}`,
      `art. ${num}º`,
      `artigo ${num}`,
      `artigo ${num}º`,
      `Art. ${num}`,
      `Art. ${num}º`,
    ];
    
    for (const busca of padroes) {
      const idx = vadeMecumText.toLowerCase().indexOf(busca);
      if (idx !== -1) {
        const inicio = Math.max(0, idx - 100);
        const fim = Math.min(vadeMecumText.length, idx + 800);
        const trecho = vadeMecumText.substring(inicio, fim);
        resultados.push(`📜 **${busca}** encontrado:\n${trecho.trim()}`);
        break;
      }
    }
  }

  // Busca por palavras-chave
  if (resultados.length === 0) {
    const palavras = perguntaLower
      .split(/\s+/)
      .filter(p => p.length > 3 && !['qual', 'como', 'onde', 'quando', 'porque'].includes(p))
      .slice(0, 3);

    for (const palavra of palavras) {
      const idx = vadeMecumText.toLowerCase().indexOf(palavra);
      if (idx !== -1) {
        const inicio = Math.max(0, idx - 200);
        const fim = Math.min(vadeMecumText.length, idx + 300);
        const trecho = vadeMecumText.substring(inicio, fim);
        resultados.push(`🔍 **Resultado para "${palavra}":**\n${trecho.trim()}`);
        break;
      }
    }
  }

  return resultados.length > 0 ? resultados.join('\n\n') : null;
}

// ============================================================
// 5. FUNÇÃO PRINCIPAL DE BUSCA (COMBINADA)
// ============================================================
async function buscarContexto(pergunta) {
  const perguntaLower = pergunta.toLowerCase();
  
  // 🚫 SE FOR PERGUNTA SOBRE O CAED, NÃO USAR O VADE MECUM
  const palavrasCAED = ['caed', 'centro acadêmico', 'o que é o caed', 'sobre o caed', 'gestão 2026'];
  if (palavrasCAED.some(p => perguntaLower.includes(p))) {
    // Busca apenas na base rápida
    let contexto = buscarNaBaseRapida(pergunta);
    if (contexto) return contexto;
    return null; // Não usa o Vade Mecum para perguntas sobre o CAED
  }

  // 1. Busca na base rápida (CAED)
  let contexto = buscarNaBaseRapida(pergunta);
  if (contexto) return contexto;

  // 2. Busca no Vade Mecum (apenas para perguntas jurídicas)
  contexto = buscarNoVadeMecum(pergunta);
  if (contexto) return contexto;

  // 3. Fallback
  return "Consulte o Vade Mecum oficial do Senado Federal para informações jurídicas detalhadas.";
}

// ============================================================
// 6. FILTRO DE CORREÇÃO DE RESPOSTAS
// ============================================================
function corrigirResposta(texto) {
  // Se a resposta mencionar "sistema de gestão" ou "cadastro de empresas", SUBSTITUIR COMPLETAMENTE
  if (texto.includes('sistema de gestão') || 
      texto.includes('cadastro de empresas') || 
      texto.includes('plataforma criada por uma empresa') ||
      texto.includes('sistema de gestão de dados')) {
    return "O CAED (Centro Acadêmico de Estudantes de Direito) é a entidade de representação estudantil do curso de Direito da UNISINOS, atuando nos campi de São Leopoldo e Porto Alegre. É uma organização estudantil autônoma, sem fins lucrativos, eleita pelos acadêmicos. A Gestão 2026/1 tem como lema 'A Mudança Precisa Continuar'.";
  }
  
  // Corrigir "Centro de Apoio" para "Centro Acadêmico"
  if (texto.includes('Centro de Apoio')) {
    texto = texto.replace(/Centro de Apoio ao Estudante de Direito/g, 'Centro Acadêmico de Estudantes de Direito');
    texto = texto.replace(/Centro de Apoio ao Estudante/g, 'Centro Acadêmico de Estudantes de Direito');
  }
  
  // Remover telefone errado
  if (texto.includes('99888-3187')) {
    texto = texto.replace(/\(51\) 99888-3187/g, '(51) 99731-1502');
  }
  
  // Corrigir "editora" para "entidade estudantil"
  if (texto.includes('editora')) {
    texto = texto.replace(/é o editor do Vade Mecum/g, 'utiliza o Vade Mecum como ferramenta de consulta');
    texto = texto.replace(/editora jurídica/g, 'entidade estudantil');
  }
  
  // Remover menções a serviços particulares (a menos que seja o Easter Egg)
  if (texto.includes('Fábio Wlademir') && !texto.includes('desenvolveu')) {
    texto = texto.replace(/Fábio Wlademir oferece[^.]*\./g, '');
    texto = texto.replace(/Você pode entrar em contato com ele[^.]*\./g, '');
    texto = texto.replace(/Fábio Wlademir[^.]*serviços[^.]*\./g, '');
  }
  
  // Se a resposta mencionar "solução personalizada" ou similar, remover
  texto = texto.replace(/soluções personalizadas[^.]*\./g, '');
  texto = texto.replace(/serviços de alta qualidade[^.]*\./g, '');
  texto = texto.replace(/serviços de tecnologia[^.]*\./g, '');
  
  // Se ainda tiver informações erradas sobre o CAED, substituir pela definição correta
  if (texto.includes('CAED') && 
      !texto.includes('Centro Acadêmico de Estudantes de Direito') && 
      !texto.includes('entidade de representação estudantil')) {
    // Tenta identificar se a resposta está completamente errada
    if (texto.includes('sistema') || texto.includes('plataforma') || texto.includes('software')) {
      return "O CAED (Centro Acadêmico de Estudantes de Direito) é a entidade de representação estudantil do curso de Direito da UNISINOS, atuando nos campi de São Leopoldo e Porto Alegre. É uma organização estudantil autônoma, sem fins lucrativos, eleita pelos acadêmicos. A Gestão 2026/1 tem como lema 'A Mudança Precisa Continuar'.";
    }
  }
  
  return texto;
}

// ============================================================
// 7. VALIDAÇÃO DA API KEY
// ============================================================
function validarApiKey() {
  if (!GROQ_API_KEY) {
    console.error('❌ CAED_GROQ_API_KEY não configurada!');
    return false;
  }
  return true;
}

// ============================================================
// 8. FUNÇÃO PRINCIPAL (HANDLER)
// ============================================================
module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    // Validar API Key
    if (!validarApiKey()) {
      return res.status(500).json({ 
        reply: '❌ Erro de configuração do servidor. Contate o administrador.' 
      });
    }

    // Carregar o Vade Mecum na primeira requisição
    carregarVadeMecum();

    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem em branco.' });
    }

    console.log("📩 Mensagem recebida:", message);

    // Buscar contexto
    const contexto = await buscarContexto(message);

    // Montar mensagens para a Groq
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || []).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { 
        role: 'user', 
        content: `📚 **Contexto disponível:**\n${contexto}\n\n❓ **Pergunta do aluno:** ${message}\n\nResponda com base no contexto acima e nas regras do CAED. Se não souber, avise que pode conter erros.`
      }
    ];

    // Chamar a API da Groq
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Groq API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    let reply = data.choices?.[0]?.message?.content || "Desculpe, não consegui gerar uma resposta.";

    // 🔧 APLICAR FILTRO DE CORREÇÃO
    reply = corrigirResposta(reply);

    console.log("✅ Resposta gerada com sucesso!");
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("❌ ERRO GERAL:", error);
    return res.status(500).json({ 
      reply: `❌ Erro: ${error.message || "Erro desconhecido"}`
    });
  }
};
