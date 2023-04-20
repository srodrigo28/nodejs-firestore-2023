
const admin = require("firebase-admin");

const serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

const doc = db.collection('categories').doc()
doc
    .set({
    category: 'Category criada via código'
    })
    .then( snap => {
      console.log(snap)  
    })