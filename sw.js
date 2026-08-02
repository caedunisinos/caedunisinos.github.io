// ==========================================================
//  SERVICE WORKER PARA INJETAR CONTADOR GLOBAL
//  Arquivo: /sw.js
//  Localização: Raiz do site (ex: caedunisinos.com.br/sw.js)
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
  
  // Verifica se é uma requisição para página HTML
  const isHtml = event.request.headers.get('accept')?.includes('text/html') ||
                 url.pathname.endsWith('.html') ||
                 url.pathname === '/' ||
                 url.pathname === '' ||
                 !url.pathname.includes('.');

  if (!isHtml) {
    event.respondWith(fetch(event.request));
    return;
  }

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
        const scriptTag = `<script src="${CONTADOR_SCRIPT}" defer></script>`;
        
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
