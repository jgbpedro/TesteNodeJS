const fs = require('fs');
const path = require('path');
const multer = require('multer');
const imagesController = require('../controllers/imageController');

module.exports = (app) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      // const uploadsDir = path.join(__dirname, '..', 'public', 'uploads', `${Date.now()}`)
      const uploadsDir = path.join(__dirname, '..', 'public', 'uploads');

      if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

      cb(null, uploadsDir);
    },
    filename(req, file, cb) {
      // cb(null, file.originalname)
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
  });

  const upload = multer({ storage });

  // Route for upload, id_relationship represents an establishement_id or
  // ad_id and type define if is an ads image or an establishment image.
  app.route('/images-old/upload/:id_relationship/:type')
    .post(upload.any('data'), imagesController.create);
};
