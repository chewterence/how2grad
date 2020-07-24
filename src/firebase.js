import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyAq2VkgOys7IRFvmfAI0U2PYHydfTgPggI',
  authDomain: 'how2grad.firebaseapp.com',
  databaseURL: 'https://how2grad.firebaseio.com',
  projectId: 'how2grad',
  storageBucket: 'how2grad.appspot.com',
  messagingSenderId: '99538454955',
  appId: '1:99538454955:web:548284ff5b7dda5069aaee',
  measurementId: 'G-FC92VPDBQ7'
})

export const db = app.database()
export const namesRef = db.ref('names')
