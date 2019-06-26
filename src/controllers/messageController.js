import Message from '../models/messages';

exports.index = (req, res) => {

  const params = (new URL(`https://${req.url}`)).searchParams;
  const query = params.get('conversationId') ? { conversationId: params.get('conversationId') } : {};

  Message.find(query)
    .exec((err, messages) => {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      }
      res.json(messages);
    });
};

exports.new = (req, res) => {
  const msg = new Message();

  if (req.body.text) {
    msg.text = req.body.text;
  }

  if (req.body.conversationId) {
    msg.conversationId = req.body.conversationId;
  }

  if (req.body.from) {
    msg.from = req.body.from;
  }

  if (req.body.to) {
    msg.to = req.body.to;
  }

  msg.save((err) => {
    if (err) res.json(err);
    res.json({
      status: 'sucess',
      message: 'New message created!',
      data: msg,
    });
  });
};

exports.detail = (req, res) => {
  Message.findById(req.params.id)
    .exec((err, message) => {
      if (err) res.json(err);
      res.json(message);
    });
};
