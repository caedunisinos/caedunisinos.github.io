// ==========================================================
//  SERVICE WORKER PARA INJETAR CONTADOR GLOBAL
//  Arquivo: /sw.js
//  Site: https://caedunisinos.com.br
// ==========================================================

const CACHE_NAME = 'caed-cache-v1';
const CONTADOR_SCRIPT = '/js/contador-loader.js';

self.addEventListener('install', function(event) {
  // Pula a espera e ativa imediatamente
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Toma controle de todas as páginas imediatamente
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Ignora requisições que não são HTML
  const url = new URL(event.request.url);
  
  // ===== CONDIÇÃO CORRIGIDA PARA CAPTURAR TODAS AS PÁGINAS =====
  // Considera como HTML:
  // - URLs sem extensão (ex: /noticias, /contato)
  // - URLs que terminam com .html (ex: /noticias/projeto-aluno-destaque.html)
  // - Página inicial (/) ou vazia
  const isHtml = !url.pathname.includes('.') || // URLs sem extensão
                 url.pathname.endsWith('.html') || // URLs com .html
                 url.pathname === '/' || // Página inicial
                 url.pathname === ''; // Página inicial

  // Se NÃO for HTML, busca o arquivo normalmente e sai
  if (!isHtml) {
    event.respondWith(fetch(event.request));
    return;
  }

  // ===== PROCESSAMENTO DE PÁGINAS HTML =====
  event.respondWith(
    fetch(event.request).then(function(response) {
      // Só processa respostas HTML bem-sucedidas
      if (!response.ok) {
        return response;
      }

      // Clona a resposta para poder ler o texto
      const responseClone = response.clone();
      
      return responseClone.text().then(function(html) {
        // Verifica se o contador já está presente
        if (html.includes('visitor-counter-global')) {
          return response;
        }

        // Cria o script tag para ser inserido
        // USANDO CAMINHO ABSOLUTO (COM / NO INÍCIO) PARA FUNCIONAR EM SUBPASTAS
        const scriptTag = `<script src="/js/contador-loader.js" defer></script>`;
        
        // Insere o script ANTES do </body>
        let novoHTML = html.replace('</body>', scriptTag + '\n</body>');
        
        // Se não encontrar </body>, insere no final
        if (novoHTML === html) {
          novoHTML = html + scriptTag;
        }

        // Retorna a nova resposta com o código injetado
        return new Response(novoHTML, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      });
    }).catch(function(error) {
      console.error('Erro ao carregar página:', error);
      return fetch(event.request);
    })
  );
});
