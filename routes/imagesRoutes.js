
//routeImage

const express = require("express");
const { createImage, updImage } = require("../controllers/imageController");
const { upload } = require("../uploads/upload");




const router = express.Router();


router.post("/hotels", upload.single("image"), createImage);
router.get("/hotels", updImage);


module.exports = router;


