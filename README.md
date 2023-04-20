# Firebase
    * link .: https://bancodedadoscomjavascript.club.hotmart.com/lesson/k7QxvxNrey/criar-produto
    * Criar o projeto online
    * Configurações do projeto
    * baixar a chave depois de criar a conta
    * Admin SDK do Firebase copiar
# Conexão a copiar do nodeJS    
    const admin = require("firebase-admin");

    const serviceAccount = require("./firebase.json"); //aqui e url da chave baixada

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });
