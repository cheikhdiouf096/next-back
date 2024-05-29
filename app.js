



















































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





const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());


//mongodb connection
const mongoUrl =
  "mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority";


mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));


//importing schema
require("./imageDetails");
const Images = mongoose.model("ImageDetails");


app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});


app.listen(5000, () => {
  console.log("Server Started");
});


//////////////////////////////////////////////////////////////


const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});


const upload = multer({ storage: storage });


app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;


  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});


app.get("/get-image", async (req, res) => {
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});



