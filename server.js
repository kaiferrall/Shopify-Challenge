const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

//Allow cross domains
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

//Connect to MLab database
mongoose
  .connect(
    "mongodb+srv://kai:kai@cluster0.psthl.mongodb.net/Kai?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Gallery Schema
const Schema = mongoose.Schema;
const GallerySchema = new Schema({
  name: {
    type: String
  },
  images: {
    type: Array
  }
});
const Gallery = mongoose.model("galleries", GallerySchema);
//api routes ---------------------------
app.post("/save_gallery", (req, res) => {
  Gallery.findOne({ name: req.body.name }).then(gallery => {
    if (gallery) {
      res.status(400).json({ error: "Name already exists" });
    } else {
      const newGallery = new Gallery({
        name: req.body.name,
        images: req.body.images
      });
      newGallery.save().then(newGaller => {
        res.status(200).json({ created: "Created Gallery" });
      });
    }
  });
});

app.get("/view_gallery/:name", (req, res) => {
  Gallery.findOne({ name: req.params.name }).then(gallery => {
    if (gallery) {
      res.status(200).json({ name: req.params.name, images: gallery.images });
    } else {
      res.status(404).json({ notFound: "No gallery" });
    }
  });
});

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App listening on port " + port);
});
