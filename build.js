// build.js
const fs = require('fs');
const path = require('path');

// Lê o arquivo produtos.js e extrai o array PRODUTOS
const produtosContent = fs.readFileSync('./js/produtos.js', 'utf8');
// Extrai a parte do array (usando uma regex simples)
const match = produtosContent.match(/const PRODUTOS = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('Não foi possível encontrar PRODUTOS em js/produtos.js');
  process.exit(1);
}
const produtos = eval(match[1]); // cuidado: eval é seguro aqui pois o arquivo é confiável

// Template base (use o mesmo HTML do template acima, substituindo as partes dinâmicas)
const template = (produto) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${produto.nome} – Loja CAED</title>
  <meta name="description" content="${produto.descricao}">
  <link rel="canonical" href="https://caedunisinos.com.br/produtos/${produto.slug}.html">
  <meta property="og:title" content="${produto.nome}">
  <meta property="og:description" content="${produto.descricao}">
  <meta property="og:image" content="${produto.imagem}">
  <meta property="og:url" content="https://caedunisinos.com.br/produtos/${produto.slug}.html">
  <meta property="og:type" content="product">
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- Schema.org será injetado via JS (ou pode ser estático aqui) -->
  
  <link rel="stylesheet" href="/css/loja.css">
  <style>
    /* ... estilos ... */
  </style>
</head>
<body>
  <!-- ===== NAVEGAÇÃO ===== -->
  <header id="nav"> ... </header>
  
  <!-- ===== BREADCRUMB ===== -->
  <nav class="breadcrumb">
    <div class="breadcrumb-inner">
      <a href="/loja.html">Loja CAED</a>
      <span>›</span>
      <span>${produto.nome}</span>
    </div>
  </nav>

  <main>
    <div class="container" style="padding:2rem 1.5rem;">
      <div class="produto-header" id="produtoHeader">
        <div class="produto-imagem">
          <img src="${produto.imagem}" alt="${produto.nome}">
        </div>
        <div class="produto-info">
          <span class="badge-status" style="background:${produto.badgeCor};">${produto.badge}</span>
          <h1>${produto.nome}</h1>
          <div class="produto-preco">${produto.preco}</div>
          <p class="produto-desc">${produto.descricao}</p>
          <div id="produtoBotoes">
            ${produto.disponivel 
              ? `<a href="https://wa.me/5551997311502?text=Olá+CAED!+Quero+reservar+o+produto+${encodeURIComponent(produto.nome)}+(${produto.preco}).+Qual+o+tamanho+disponível?" target="_blank" class="btn-reservar">📦 RESERVAR AGORA</a>`
              : `<span style="background:#888;color:#fff;padding:.8rem 2rem;border-radius:4px;font-family:'Montserrat',sans-serif;font-size:.8rem;display:inline-block;">⏳ INDISPONÍVEL – Volta em breve</span>`
            }
          </div>
          <div class="compartilhar">
            <a href="#" onclick="share('facebook')">📘 Facebook</a>
            <a href="#" onclick="share('twitter')">🐦 Twitter</a>
            <a href="#" onclick="share('whatsapp')">💬 WhatsApp</a>
            <a href="#" onclick="share('linkedin')">🔗 LinkedIn</a>
            <a href="#" onclick="copyLink()">📋 Copiar Link</a>
          </div>
        </div>
      </div>
      
      <!-- Tabela de tamanhos -->
      <div id="tabelaTamanhos" class="tabela-tamanhos">
        ${gerarTabela(produto.tabela)}
      </div>
      
      <a href="/loja.html" class="btn-voltar">← Voltar para a Loja CAED</a>
    </div>
  </main>
  
  <!-- ===== FOOTER ===== -->
  <footer> ... </footer>

  <script>
    function share(rede) { /* ... */ }
    function copyLink() { /* ... */ }
  </script>
  
  <!-- VLibras -->
</body>
</html>
`;

function gerarTabela(tabela) {
  if (tabela === 'normal') {
    return `
      <h3>📏 Guia de Tamanhos – Camiseta Normal</h3>
      <table>
        <tr><th>Tamanho</th><th>P</th><th>M</th><th>G</th><th>GG</th><th>XG</th></tr>
        <tr><td>Largura (cm)</td><td>46</td><td>48</td><td>50</td><td>54</td><td>57</td></tr>
        <tr><td>Comprimento (cm)</td><td>65</td><td>66</td><td>68</td><td>70</td><td>72</td></tr>
      </table>
    `;
  } else if (tabela === 'baby') {
    return `
      <h3>📏 Guia de Tamanhos – Baby Look</h3>
      <table>
        <tr><th>Tamanho</th><th>M</th><th>G</th><th>GG</th><th>XG</th></tr>
        <tr><td>Largura (cm)</td><td>35</td><td>40</td><td>43</td><td>46</td></tr>
        <tr><td>Comprimento (cm)</td><td>54</td><td>59</td><td>63</td><td>68</td></tr>
      </table>
    `;
  } else if (tabela === 'moletom') {
    return `
      <h3>📏 Guia de Tamanhos – Moletom</h3>
      <table>
        <tr><th>Tamanho</th><th>P</th><th>M</th><th>G</th><th>GG</th><th>XG</th><th>XXG</th></tr>
        <tr><td>Largura (cm)</td><td>58</td><td>63</td><td>66</td><td>70</td><td>73</td><td>76</td></tr>
        <tr><td>Comprimento (cm)</td><td>50</td><td>54</td><td>56</td><td>58</td><td>60</td><td>62</td></tr>
      </table>
    `;
  } else if (tabela === 'ecobag') {
    return `<p style="color:var(--cream-dk);">Medida única: 42 x 38 cm (altura x largura)</p>`;
  } else {
    return `<p style="color:var(--cream-dk);">Medidas: Única</p>`;
  }
}

// Cria a pasta produtos/ se não existir
if (!fs.existsSync('./produtos')) {
  fs.mkdirSync('./produtos');
}

// Gera um arquivo para cada produto
produtos.forEach(produto => {
  const html = template(produto);
  const filePath = path.join('./produtos', `${produto.slug}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✅ Página gerada: ${filePath}`);
});

console.log('🎉 Todas as páginas foram geradas!');
