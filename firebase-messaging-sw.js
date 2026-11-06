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
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const d=(e.notification.data&&e.notification.data.FCM_MSG&&e.notification.data.FCM_MSG.data)||e.notification.data||{};
  const url=d.link||'./';
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if('focus' in w){w.navigate(url);return w.focus()}}return clients.openWindow(url)}));
});
