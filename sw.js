const CACHE_NAME = 'botiquin-jonfa-v1';

// Instalar y quedar en segundo plano
self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// Escuchar eventos de la App
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'ALERTA_MEDICINA') {
    self.registration.showNotification('🚨 ALERTA DE BOTIQUÍN', {
      body: `¡Atención Jonfa! Toca tomar: ${event.data.med}`,
      icon: 'https://cdn-icons-png.flaticon.com/512/822/822143.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'med-alert',
      requireInteraction: true // La notificación no se quita hasta que la toques
    });
  }
});