



















































// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json())

// const connect = mongoose.connect("mongodb+srv://cheikh096:lqcdu5565o59YxG@cluster0.eubqiug.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0",
// { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !')
// );




// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
//   });


//   app.post('/api/data', (req, res, next) => {
//     console.log(req.body);
//     res.status(201).json();
//     message: 'objet crée'
//   }) 



// app.post('/api/data', (req, res, next) => {
//     delete req.body._id;
//     const hotel = new Hotel({
//       ...req.body
//     });
//     hotel.save()
//       .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//       .catch(error => res.status(400).json({ error }));
//   });


//   app.get('/api/data/:id', (req, res, next) => {
//     Hotel.findOne({ _id: req.params.id })
//       .then(hotel => res.status(200).json(hotel))
//       .catch(error => res.status(404).json({ error }));
//   });

//   app.get('/api/data', (req, res, next) => {
//     const data = [
//         {
//           id: 1,
//         //   imgSrc: img1,
//           hotelName: "Hotel Terrou-Bi",
//           location: "Boulevard Martin Luther King Dakar, 11500",
//           price: "25000 XOF par nuit",
//         },
//         {
//           id: 2,
//         //   imgSrc: img2,
//           hotelName: "King Fahd Palace",
//           location: "Rte des Almadies, Dakar",
//           price: "20000 XOF par nuit",
//         },
//         {
//           id: 3,
//         //   imgSrc: img3,
//           hotelName: "Radisson Blu Hotel",
//           location: "Rte de la Corniche O, Dakar 16868",
//           price: "22000 XOF par nuit",
//         },
//         {
//           id: 4,
//         //   imgSrc: img4,
//           hotelName: "Pullman Dakar Teranga",
//           location: "Place de l`Independance, 10 Rue PL 29, Dakar",
//           price: "30000 XOF par nuit",
//         },
//         {
//           id: 5,
//         //   imgSrc: img5,
//           hotelName: "Hôtel Lac Rose",
//           location: "Lac Rose, Dakar",
//           price: "25000 XOF par nuit",
//         },
//         {
//           id: 6,
//         //   imgSrc: img6,
//           hotelName: "Hôtel Saly",
//           location: "Mbour, Sénégal",
//           grade: "CULTURAL RELAX",
//           price: "20000 XOF par nuit",
//         },
//         {
//           id: 7,
//         //   imgSrc: img7,
//           hotelName: "Hôtel Saly",
//           location: "Mbour, Sénégal",
//           grade: "CULTURAL RELAX",
//           price: "20000 XOF par nuit",
//         },
//         {
//           id: 8,
//         //   imgSrc: img8,
//           hotelName: "Hôtel Saly",
//           location: "Mbour, Sénégal",
//           grade: "CULTURAL RELAX",
//           price: "20000 XOF par nuit",
//         },
//       ];
//     res.status(200).json(stuff);
//   });

// module.exports = app;





// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());


// //mongodb connection
// const mongoUrl =
//   "mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority";


// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));


// //importing schema
// require("./imageDetails");
// const Images = mongoose.model("ImageDetails");


// app.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });


// app.listen(5000, () => {
//   console.log("Server Started");
// });


// //////////////////////////////////////////////////////////////


// const multer = require("multer");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../src/images/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });


// const upload = multer({ storage: storage });


// app.post("/upload-image", upload.single("image"), async (req, res) => {
//   console.log(req.body);
//   const imageName = req.file.filename;


//   try {
//     await Images.create({ image: imageName });
//     res.json({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });


// app.get("/get-image", async (req, res) => {
//   try {
//     Images.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });





// const Hotel = require('../models/hotel');

// // exports.createHotel = async (req, res) => {
// //   try {
// //         const {nom, adress, email, telephone, devise, prix, imageUrl} = req.body;
// //         const hotel = new Hotel({nom, adress, email, telephone, devise, prix, imageUrl})
// //         await  hotel.save()
// //         res.status(201).json(hotel)
// //   } catch (error) {
// //     res.status(400).json({message: error.message})
// //   }
// exports.createHotel = (req, res, next) => {
//   const objetHotel = {
//     nom: req.body.nom,
//     adresse: req.body.adresse,
//     email: req.body.email,
//     numero: req.body.numero,
//     prix: req.body.prix,
//     devise: req.body.devise,
//     image: req.body.image,
//   };

//   delete objetHotel._id;
//   delete objetHotel._userId;

//   const hotel = new Hotel({
//     ...objetHotel,
//     // userId: req.auth.userId,
//     image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
//   });

//   hotel
//     .save()
//     .then(() => {
//       res.status(201).json({
//         message: "Hotel saved successfully!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

//   // const hotel = new Hotel({
//   //   nom: req.body.nom,
//   //   adress: req.body.adress,
//   //   email: req.body.email,
//   //   telephone: req.body.telephone,
//   //   devise: req.body.devise,
//   //   prix: req.body.prix
//   // // });
//   // hotel.save().then(
//   //   () => {
//   //     res.status(201).json({
//   //       message: 'Post saved successfully!'
//   //     });
//   //   }
//   // ).catch(
//   //   (error) => {
//   //     res.status(400).json({
//   //       error: error
//   //     });
//   //   }
//   // );

// // exports.getOneHotel = (req, res, next) => {
// //   Hotel.findOne({
// //     _id: req.params.id
// //   }).then(
// //     (hotel) => {
// //       res.status(200).json(hotel);
// //     }
// //   ).catch(
// //     (error) => {
// //       res.status(404).json({
// //         error: error
// //       });
// //     }
// //   );
// // };

// // exports.modifyHotel = (req, res, next) => {
// //   const hotel = new Hotel({
// //     _id: req.params.id,
// //     title: req.body.title,
// //     description: req.body.description,
// //     imageUrl: req.body.imageUrl,
// //     price: req.body.price,
// //     userId: req.body.userId
// //   });
// //   Hotel.updateOne({_id: req.params.id}, hotel).then(
// //     () => {
// //       res.status(201).json({
// //         message: 'Thing updated successfully!'
// //       });
// //     }
// //   ).catch(
// //     (error) => {
// //       res.status(400).json({
// //         error: error
// //       });
// //     }
// //   );
// // };

// // exports.deleteHotel = (req, res, next) => {
// //   Hotel.deleteOne({_id: req.params.id}).then(
// //     () => {
// //       res.status(200).json({
// //         message: 'Deleted!'
// //       });
// //     }
// //   ).catch(
// //     (error) => {
// //       res.status(400).json({
// //         error: error
// //       });
// //     }
// //   );
// // };

// exports.getAllHotel = async (req, res) => {
//   try{
//     const hotels = await Hotel.find();
//     res.json(hotels)
//   }catch(error){
//     res.status(500).json({message: error.message})
//   }
//   // Hotel.find().then(
//   //   (hotel) => {
//   //     res.status(200).json(hotel);
//   //   }
//   // ).catch(
//   //   (error) => {
//   //     res.status(400).json({
//   //       error: error
//   //     });
//   //   }
//   // );
// };

// in controllers/stuff.js

const Thing = require("../models/thing");

exports.createThing = (req, res, next) => {
  const thing = {
    nom: req.body.nom,
    adresse: req.body.adresse,
    prix: req.body.prix,
    devise: req.body.devise,
    telephone: req.body.telephone,
    imageUrl: req.body.imageUrl,
    email: req.body.email,
  };
  const hotel = new Thing({
    ...thing,
    // userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });

  hotel
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    nom: req.body.nom,
    adresse: req.body.adresse,
    prix: req.body.prix,
    devise: req.body.devise,
    telephone: req.body.telephone,
    image: req.body.image,
  });
  Thing.updateOne({ _id: req.params.id }, thing)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllStuff = (req, res, next) => {
  Thing.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};