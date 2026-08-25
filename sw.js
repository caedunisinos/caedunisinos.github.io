// sw.js - Versão para limpar o cache e se autodestruir
self.addEventListener('install', function(e) {
  // Remove todos os caches antigos
  caches.keys().then(function(names) {
    for (let name of names) {
      caches.delete(name);
    }
  });
  // Força a ativação imediata
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  // Reivindica o controle de todas as abas
  clients.claim();
  // Remove a si mesmo (se desregistra)
  self.registration.unregister();
});
