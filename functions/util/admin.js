const admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

const firebaseConfig = {
  apiKey: "AIzaSyASTX9pxYCRq4PoBWC-pOBFpmkzhSkcUKQ",
  authDomain: "socialapp-32ed8.firebaseapp.com",
  databaseURL: "https://socialapp-32ed8.firebaseio.com",
  projectId: "socialapp-32ed8",
  storageBucket: "socialapp-32ed8.appspot.com",
  messagingSenderId: "904882535502",
  appId: "1:904882535502:web:9a9493978e7b18e8f7171f",
  measurementId: "G-621QNVH4Q0",
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

module.exports = { admin, db };
