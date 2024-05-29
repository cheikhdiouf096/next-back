const express = require("express");
const Hotel = require("../models/hotel.model");
const router = express.Router();
const {getHotels, getHotel, createHotel, updateHotel, deleteHotel} = require('../controllers/hotel.controller');


router.get('/', getHotels);
router.get("/:id", getHotel);

router.post("/", createHotel);

// update a Hotel
router.put("/:id", updateHotel);

// delete a Hotel
router.delete("/:id", deleteHotel);


module.exports = router; 