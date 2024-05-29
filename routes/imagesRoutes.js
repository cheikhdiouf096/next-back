
//routeImage

const express = require("express");
const { createImage, updImage } = require("../controllers/imageController");
const { upload } = require("../uploads/upload");




const router = express.Router();


router.post("/postImage", upload.single("image"), createImage);
router.get("/updImage", updImage);


module.exports = router;


