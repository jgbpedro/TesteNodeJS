import botController from '../src/controllers/botController';
import messageController from '../src/controllers/messageController';
// Inicializano o arquivo de rotas
const router = require('express').Router();

// Definindo uma msg padrão para API
router.get('/', (req, res) => {
  res.json({
    status: 'API Works',
    message: 'API Works Fine',
  });
});

/* Bots Controllers */
router.route('/bots')
  .get(botController.index)
  .post(botController.new);

router.route('/bots/:id')
  .get(botController.detail)
  .put(botController.update)
  .delete(botController.delete);

/* Message Controllers */
router.route('/messages')
  .get(messageController.index)
  .post(messageController.new);

router.route('/messages?conversationId=:conversationId')
  .get(messageController.index);

router.route('/messages/:id')
  .get(messageController.detail);

// Definindo as rotas
export default router;
