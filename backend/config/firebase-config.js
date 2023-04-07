const admin = require("firebase-admin");

const serviceAccount = require("./accountServiceKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;