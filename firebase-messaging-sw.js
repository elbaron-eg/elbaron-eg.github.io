self.addEventListener('notificationclick',e=>{
  e.stopImmediatePropagation();
  e.notification.close();
  const d=(e.notification.data&&e.notification.data.FCM_MSG&&e.notification.data.FCM_MSG.data)||e.notification.data||{};
  const U=new URL(d.link||'./',self.registration.scope);if(d.aid&&!U.searchParams.get('a')&&/^a[0-9a-z]+$/i.test(d.aid))U.searchParams.set('a',d.aid);const url=U.href;
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{
    for(const w of ws){if(w.url.startsWith(self.registration.scope)&&'focus' in w){w.postMessage({type:'open',link:url});return w.focus()}}
    return clients.openWindow(url);
  }));
});
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey:"AIzaSyC2x-OfMyHRR7xfLotgj6EhFaImn1_5_IQ",
  authDomain:"knooz-25db0.firebaseapp.com",
  projectId:"knooz-25db0",
  storageBucket:"knooz-25db0.firebasestorage.app",
  messagingSenderId:"751397035106",
  appId:"1:751397035106:web:f020fa2da1291b1b76853b"
});
firebase.messaging();
