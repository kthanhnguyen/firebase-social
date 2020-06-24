const admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };
