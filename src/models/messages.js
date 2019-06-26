import mongoose from 'mongoose';
// Definindo as propriedades
const messageSchema = mongoose.Schema({
  conversationId: {
    type: String,
    default: new mongoose.mongo.ObjectID(),
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  from: {
    type: String,
    required: false,
    default: null,
  },
  to: {
    type: String,
    required: false,
    default: null,
  },
  text: {
    type: String,
    required: true,
  },
});

// Export Category model
const Message = module.exports = mongoose.model('messages', messageSchema);
module.exports.get = function (callback, limit) {
  Message.find(callback).limit(limit);
};
