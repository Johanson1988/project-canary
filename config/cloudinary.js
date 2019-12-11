const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');


require('dotenv').config();

cloudinary.config({
  cloud_name: 'dubdb3j5z',
  api_key: '618994649328117',
  api_secret: process.env.CLOUDINARY_API_SECRET
  });

  const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'canary',
  allowedFormats: ['jpg', 'png']
});

const parser = multer({ storage: storage });

module.exports = parser;