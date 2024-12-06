const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
// Définition du modèle User directement dans server.js
const userSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);