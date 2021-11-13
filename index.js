// Required modules
const Formidable = require("formidable");
var cloudinary = require("cloudinary").v2;
const fs = require("fs");
const express = require("express");
const path = require("path");
// mod.cjs
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
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
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//setintervalfunction
setInterval(function func() {
  const phonearray = ["+918455075678", "+919337134629", "+917978060742"];
  const message =
    "TOP UP ON TRENDS: Get Rs.700 OFF on purchase of Rs.1000, only at the RouteMobile Sale. HURRY! Time to get your wardrobe totally on-trend.";
  for (let i = 0; i < phonearray.length; i++) {
    const phone = phonearray[i];
    const url = `https://rapidapi.rmlconnect.net:9443/bulksms/bulksms?username=rapid-TlXE7157910000&password=6188c2110fcc5f00129106d7&type=0&dlr=Z&destination=${phone}&source=RMLPRD&message=${message}`;
    try {
      fetch(url, { method: "get" });
    } catch (err) {
      console.log("error smsapi " + err);
    }
  }
}, 84000000);

//index page render
app.get("/", (req, res) => {
  //carousel change
  const obj = {
    latestprod0imagelink: "images/sale3.jpg",
    prod0head: "",
    prod0details: "",
    prod0color: "black",
    latestprod1imagelink: "images/sale1.jpg",
    prod1head: "",
    prod1details: "",
    prod1color: "black",
    latestprod2imagelink: "images/sale2.jpg",
    prod2head: "",
    prod2details: "",
    prod2color: "white",
  };
  res.render("index", obj);
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

//upload for lipstick pd.html
app.post("/upload", (req, res) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
    }
    cloudinary.uploader.upload(files.upload.filepath, function (error, result) {
      console.log(result);
      if (result != undefined) {
        const urlpass = result.url;
        //render
        res.render("pdresult", { imagelink: urlpass });
      }

      if (error) {
        res.status(404).send(`<h1>Sorry!! Somee error occured</h1>`);
      }
    });
  });
});

//upload for sticker pd1.html
app.post("/upload1", (req, res) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
    }
    cloudinary.uploader.upload(files.upload.filepath, function (error, result) {
      console.log(result);
      if (result != undefined) {
        const urlpass = result.url;
        //render
        res.render("pd1result", { imagelink: urlpass });
      }

      if (error) {
        res.status(404).send(`<h1>Sorry!! Somee error occured</h1>`);
      }
    });
  });
});

//upload for foundation pd2.html
app.post("/upload2", (req, res) => {
  const form = new Formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
    }
    cloudinary.uploader.upload(files.upload.filepath, function (error, result) {
      console.log(result);
      if (result != undefined) {
        const urlpass = result.url;
        //render
        res.render("pd2result", { imagelink: urlpass });
      }

      if (error) {
        res.status(404).send(`<h1>Sorry!! Somee error occured</h1>`);
      }
    });
  });
});

app.get("*", function (req, res) {
  res.status(404).send(`<h1>Sorry!! Requested page not found</h1>`);
});
// Port number
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
