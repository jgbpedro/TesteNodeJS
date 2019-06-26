import mongoose from 'mongoose';
// Definindo as propriedades
const botSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Export Bot model
const Bot = module.exports = mongoose.model('bots', botSchema);
module.exports.get = function (callback, limit) {
  Bot.find(callback).limit(limit);
};
