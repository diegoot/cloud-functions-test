const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.saveUser = functions.auth.user().onCreate((user) => {
    return admin.database().ref('/log-users').push({event: 'create', email: user.email});
});

exports.deleteUser = functions.auth.user().onDelete((user) => {
    return admin.database().ref('/log-users').push({event: 'delete', email: user.email});
});
