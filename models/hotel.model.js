const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  location: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: Number, required: false },
  currency: { type: String, required: false },
  hotelName: { type: String, required: false  },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: false },
  price: { type: Number, required: false }
},
{  timestamps: true } 
);



// const imageSchema = new mongoose.Schema({
//   name: String,
//   contentType: String,
//   imageUrl: String, // Store the image URL here ->// we can fetch the image from databse using this 
//   // Add any other fields you need for your image
// });

// const Image = mongoose.model('Image', imageSchema);
// module.exports = Image;

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;

// module.exports = mongoose.model('Hotel', hotelSchema);