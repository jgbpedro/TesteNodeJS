import Bot from '../models/bots';

exports.index = (req, res) => {
  Bot.find()
    .sort({ name: 'asc' })
    .exec((err, bots) => {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      }
      res.json(bots);
    });
};

exports.new = (req, res) => {
  const bot = new Bot();
  bot.name = req.body.name;

  bot.save((err) => {
    if (err) res.json(err);
    res.json({
      status: 'sucess',
      message: 'New bot created!',
      data: bot,
    });
  });
};

exports.detail = (req, res) => {
  Bot.findById(req.params.id)
    .exec((err, bot) => {
      if (err) res.json(err);
      res.json(bot);
    });
};

exports.update = (req, res) => {
  Bot.findById(req.params.id)
    .exec((err, bot) => {
      if (err) res.json(err);
      bot.name = req.body.name;

      bot.save((error) => {
        if (error) res.json(error);
        res.json({
          status: 'success',
          message: 'Bot info updated!',
          data: bot,
        });
      });
    });
};

exports.delete = (req, res) => {
  Bot.deleteOne({ _id: req.params.id }, () => {});
  res.json({
    status: 'success',
    message: 'Bot deleted!',
  });
};
