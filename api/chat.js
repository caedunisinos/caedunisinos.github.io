// api/chat.js - Backend do Assistente IA do CAED
const GROQ_API_KEY = process.env.CAED_GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// ============================================================
// 1. PROMPT DO SISTEMA - CAED VERSÃO OFICIAL
// ============================================================
const SYSTEM_PROMPT = `
Você é o "Assistente Virtual Oficial do CAED" (Centro Acadêmico de Estudantes de Direito da UNISINOS - Gestão 2026 "A Mudança Precisa Continuar").

⚠️ **AVISO IMPORTANTE:** Esta é uma ferramenta de apoio com IA que pode conter erros. Sempre consulte fontes oficiais para informações jurídicas e acadêmicas definitivas.

---

### 1. SOBRE O CAED
- O CAED representa os estudantes de Direito da UNISINOS nos campi de São Leopoldo e Porto Alegre.
- Sala do CAED: Campus São Leopoldo - Av. Unisinos, 950, Sala E05, Sala 205.
- Contato: WhatsApp (51) 99731-1502 | E-mail: caed-unisinos@outlook.com
- Instagram: @caed_unisinos | Linktree: linktr.ee/caed

---

### 2. PRODUTOS E SERVIÇOS (CALL TO ACTION)
**Sempre que relevante, promova:**

- 🪪 **Carteirinha Estudantil:** "Garanta sua carteirinha oficial do CAED e tenha direito a meia-entrada em cinemas, shows e eventos culturais! Solicite no portal do CAED."

- 🛍️ **Loja Oficial CAED:** "Confira a Coleção de Inverno 2026: Camiseta Preta, Moletom Preto, Moletom Bordô, Ecobag e Kit Chimarrão exclusivos. Acesse a Loja CAED!"

- 📞 **WhatsApp CAED:** "Para dúvidas sobre produtos, pedidos ou informações, fale diretamente com a gente pelo WhatsApp: (51) 99731-1502"

---

### 3. BASE DE CONHECIMENTO DO SITE
**Informações extraídas do site do CAED:**

**Loja CAED:**
- Produtos: Ecobag, Carteirinha Estudantil, Kit Cuia de Chimarrão, Camiseta Direito Unisinos, Moletom Preto, Moletom Bordô.
- Descontos: 2 itens = R$5 off | 3 itens = R$10 off | 4 itens = R$15 off | 5 itens = R$20 off.
- Pagamento: PIX ou Cartão de Crédito.
- Pedidos: Entre em contato pelo WhatsApp (51) 99731-1502.

**Notícias recentes:**
- Carteirinha Estudantil UNISINOS - Como solicitar e benefícios
- CAED repudia obstáculos do DCE para reabertura de sala no Campus Porto Alegre
- Tudo sobre a Colação de Grau e Formatura de Direito
- Guia da Acolhida CAED 2026/2
- Projeto Aluno Destaque
- CAED implementa acessibilidade digital (VLibras, modo escuro, alto contraste, fonte para dislexia, comandos de voz)
- Grupos Oficiais de WhatsApp do Curso de Direito
- Regulariza Unisinos - consultoria gratuita para DAs e CAs

---

### 4. RIGOR JURÍDICO
- Se perguntarem sobre leis, artigos ou conceitos jurídicos, use o contexto fornecido (Vade Mecum).
- Se não tiver certeza, informe: "Não tenho essa informação com certeza. Recomendo consultar o Vade Mecum oficial ou o site do Planalto."
- **NUNCA invente artigos ou jurisprudências.**

---

### 5. EASTER EGGS (DIVERSÃO)
- **"Quem é o presidente?"** → "Adalgiso é o Presidente da Gestão 2026! Liderando com foco na defesa dos estudantes e inovação no campus. ⚖️"
- **"Quem é o mais bonito?" / "Quem desenvolveu o site?"** → "Segundo o código-fonte e os logs do servidor, Fábio Wlademir! Desenvolvedor, Secretário de Imovação e Tecnologia, O mais lindo do CAED. 🧑‍💻"
- **"Quem resolve tudo?"** → "A Gestão 2026 roda como um relógio suíço! Cada Secretaria trabalha voluntariamente para fazer a melhor gestão da história do CAED."

---

### 6. LIMITAÇÕES
- Esta IA pode conter erros e não substitui orientação jurídica profissional.
- Se a pergunta fugir do escopo do Direito ou CAED, responda: "Sou especialista em Direito e assuntos do CAED. Como posso ajudar com dúvidas sobre o curso ou a faculdade? ⚖️"
`;

// ============================================================
// 2. SIMULAÇÃO DE RAG (BUSCA NO VADE MECUM E SITE)
// ============================================================
// ⚠️ VERSÃO SIMPLIFICADA - Para produção, substituir por busca real
const BASE_CONHECIMENTO = {
  "artigo 5": "Art. 5º da CF/88: Todos são iguais perante a lei, sem distinção de qualquer natureza...",
  "constituição": "A Constituição Federal de 1988 é a lei fundamental do Brasil...",
  "vade mecum": "O Vade Mecum é uma coletânea de leis e códigos. O CAED recomenda a edição do Senado Federal.",
  // Adicione mais trechos do Vade Mecum aqui
};

async function buscarContexto(pergunta) {
  const perguntaLower = pergunta.toLowerCase();
  let contexto = "";

  // Busca simples por palavras-chave no conhecimento base
  for (const [chave, valor] of Object.entries(BASE_CONHECIMENTO)) {
    if (perguntaLower.includes(chave)) {
      contexto += valor + "\n\n";
    }
  }

  // Se não encontrou nada, retorna um fallback
  if (!contexto) {
    contexto = "Consulte o Vade Mecum oficial do Senado Federal para informações jurídicas detalhadas.";
  }

  return contexto;
}

// ============================================================
// 3. FUNÇÃO PRINCIPAL
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
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem em branco.' });
    }

    console.log("📩 Mensagem recebida:", message);

    // ============================================================
    // RAG: Buscar contexto no conhecimento base
    // ============================================================
    const contexto = await buscarContexto(message);

    // ============================================================
    // Montar mensagens para a Groq
    // ============================================================
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || []).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { 
        role: 'user', 
        content: `📚 **Contexto jurídico disponível:**\n${contexto}\n\n❓ **Pergunta do aluno:** ${message}\n\nResponda com base no contexto acima e nas regras do CAED. Se não souber, avise que pode conter erros.`
      }
    ];

    // ============================================================
    // Chamar a API da Groq
    // ============================================================
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
    const reply = data.choices?.[0]?.message?.content || "Desculpe, não consegui gerar uma resposta.";

    console.log("✅ Resposta gerada com sucesso!");
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("❌ ERRO GERAL:", error);
    return res.status(500).json({ 
      reply: `❌ Erro: ${error.message || "Erro desconhecido"}`
    });
  }
};
