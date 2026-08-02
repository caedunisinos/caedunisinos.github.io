// ==========================================================
//  CONTADOR GLOBAL - Código que será injetado em todas as páginas
//  Arquivo: /js/contador-loader.js
//  Site: https://caedunisinos.com.br
// ==========================================================

(function() {
  // Verifica se o contador já foi inserido nesta página
  if (document.querySelector('.visitor-counter-global')) {
    return; // Já existe, não insere novamente
  }

  // Função que cria e insere o contador no rodapé
  function inserirContador() {
    // Cria o elemento do contador
    const contadorDiv = document.createElement('div');
    contadorDiv.className = 'visitor-counter visitor-counter-global';
    contadorDiv.setAttribute('title', 'Total de visualizações do site');
    contadorDiv.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    `;
    
    // Conteúdo do contador - AGORA COM O DOMÍNIO DO CAED!
    contadorDiv.innerHTML = `
      <i class="fas fa-eye" style="color: #8B0000;"></i>
      <span>Visitas ao portal:</span>
      <img src="https://hits.dwyl.com/caedunisinos/caedunisinos.github.io.svg" 
           alt="Contador de Acessos" 
           style="display: inline-block; vertical-align: middle;">
    `;

    // Procura onde inserir o contador no rodapé
    const footer = document.querySelector('footer');
    if (footer) {
      // Tenta encontrar uma div footer-bottom ou similar
      const footerBottom = footer.querySelector('.footer-bottom');
      if (footerBottom) {
        footerBottom.appendChild(contadorDiv);
      } else {
        // Se não encontrar, insere no final do footer
        footer.appendChild(contadorDiv);
      }
    } else {
      // Fallback: insere no final da página
      document.body.appendChild(contadorDiv);
    }
  }

  // Aguarda o DOM carregar para inserir o contador
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inserirContador);
  } else {
    inserirContador();
  }
})();
