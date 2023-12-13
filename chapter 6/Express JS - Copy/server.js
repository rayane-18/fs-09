const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.get("/", (req, res)) => {
  res.render("index", {user: rayane ,img:"https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"}
  }
app.listen("3000", () => {
  console.log("server is running");
});
