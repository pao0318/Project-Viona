// Required modules
const Formidable = require("formidable");
var cloudinary = require("cloudinary").v2;
const fs = require("fs");
const express = require("express");
const path = require('path');
require("dotenv").config();

// Cloudinary configuration settings
// This will be fetched from the .env file in the root directory
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const port = process.env.PORT || 8080;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

//Create a server
app.get("/", (req, res) => {
  const indexdata = fs.readFileSync("frontend/index.html");
  res.send(indexdata.toString());
});
app.get("/pd.html", (req, res) => {
  const indexdata = fs.readFileSync("frontend/templates/pd.html");
  res.send(indexdata.toString());
});
app.get("/pd1.html", (req, res) => {
  const indexdata = fs.readFileSync("frontend/templates/pd1.html");
  res.send(indexdata.toString());
});
app.get("/pd2.html", (req, res) => {
  const indexdata = fs.readFileSync("frontend/templates/pd2.html");
  res.send(indexdata.toString());
});

app.post("/upload", (req, res) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
    }
    cloudinary.uploader.upload(files.upload.filepath, function (error, result) {
      console.log(result);
      if (result!=undefined) {
        const urlpass=result.url;
        res.render("pdresult", {imagelink: urlpass});
      }

      if (error){
res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
      } 
    });
  });
});
app.get('*', function(req, res){
  res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
});
// Port number
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
