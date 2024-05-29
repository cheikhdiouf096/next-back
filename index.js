// const express =  require('express');
// const mongoose = require('mongoose');
// const cors = require("cors");
// const Hotel = require('./models/hotel.model.js');
// const hotelRoute= require('./routes/hotel.routes.js');
// const userRouter = require('./routes/user.routes.js');
// const imagesRoutes = require('./routes/imagesRoutes.js');

// // import userRouter from "./routes/user.routes.js";
// // import authRouter from "./routes/auth.route.js";

// const app = express();

// app.use(cors());

// //api card
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({extended: false}))

// //routes 
// app.use("/api/hotels", hotelRoute);


// app.use("api/hotels", imagesRoutes);










// mongoose.connect('mongodb+srv://DIOUF096:lqcdu5565o59YxG@backenddb.fk4wlii.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
//   .then(() => {
//     console.log("Database Connected!");

//     app.listen(8080, () =>{
//         console.log('server in running on port 8080');
//     })
// })
//   .catch(() =>{
//     console.log("connection failed !");
// });




















// "use client";
// const express = require('express');
// const cors = require("cors");
// const app = express();
// const port = 3030;


// app.use(cors());


// app.get('/api/home', (req, res) => {
//   res.json({
//     Card: [
//       {
//         id: 1,
//         icon: 'faEnvelopeOpen',
//         number: 125,
//         partie: 'Formulaires',
//         text: 'Je ne sais pas quoi mettre',
//         background: "#A88ADD",
//       },
//       {
//         id: 2,
//         icon: 'faP',
//         number: 40,
//         partie: 'Messages',
//         text: 'Je ne sais pas quoi mettre',
//         background: "#0CC2AA",
//       },
//       {
//         id: 3,
//         icon: 'faUserFriends',
//         number: 600,
//         partie: 'Utilisateurs',
//         text: 'Je ne sais pas quoi mettre',
//         background: "#FCC100",
//       },
//       {
//         id: 4,
//         icon: 'faEnvelopeOpen',
//         number: 25,
//         partie: 'E-mails',
//         text: 'Je ne sais pas quoi mettre',
//         background: "#F90000",
//       },
//       {
//         id: 5,
//         icon: 'faP',
//         number: 40,
//         partie: 'Hôtels',
//         text: 'Je ne sais pas quoi mettre',
//         background: "#9C27B0",
//       },
//       {
//         id: 6,
//         icon: 'faUserFriends',
//         number: 20,
//         partie: 'Entités',
//         text: 'Je ne sais pas quoi mettre',
//         background: "#1565C0",
//       }
//     ],
//   });
// });


// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
 






// const hotelRoute = require("./routes/hotel.route.js");

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));


// // routes
// app.use("/api/pages/hotels", hotelRoute); 




// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });


// mongoose
//   .connect(  
//     "mongodb+srv://cheikh096:lqcdu5565@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(8080, () => {
//       console.log("Server is running on port 8080");
//     });
//   })
//   .catch(() => {
//     console.log("Connection failed!");
//   });