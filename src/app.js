const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");
const viewsDirectory = path.join(__dirname, "../template/views");
app.set("views", viewsDirectory);

const partialsDirectory = path.join(__dirname, "../template/partials");
hbs.registerPartials(partialsDirectory);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    desc: "This is the home page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Omar Hifnawy",
    age: "21",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us",
    desc: "Feel free to contact us through the form below.",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
