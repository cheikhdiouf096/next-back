const Image = require("../models/image.model")
const expressHandler = require("express-async-handler")




const createImage = expressHandler(async (req, res) => {
    try {
      if(!req.file){
        return res.status(500).json({error: "No file found"})
      }
      const imageFile = Image({
        filename: req.file.filename,
        filepath: req.file.filepath,
      });
 
      const savedImage = await imageFile.save();
     
      res.status(200).json({ savedImage });
    } catch (error) {
      res.json({ status: error });
    }
  })
   
  const updImage = async (req, res) => {
    try {
      Image.find({}).then((data) => {
        res.send({ status: "ok", data: data });
      });
    } catch (error) {
      res.json({ status: error });
    }
  };


module.exports = {
    createImage,
    updImage
};



