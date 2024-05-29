// const multer = require('multer');



// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//       callback(null, ("./uploads") );  // ->("./uploads")  this is the destination where files will save in the HArdDisk Storage 
//     },
//     filename: (req, file, callback) => {
//       callback(null, file.originalname);
//     },
//   });

// //   const upload = multer({ storage :storage }); OR
//   const upload = multer({ storage });

//   module.exports = upload;
  



  const multer = require('multer');

const MIMETYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');