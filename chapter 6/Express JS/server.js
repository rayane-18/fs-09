const express = require("express");
const app = express();
app.use(express.json());

app.listen("3000", () => {
  console.log("server is running");
});
/*routes to create :
1)send some user data
2)send some products data
3)alluser data send some user data
app.get("/", (req, res) => {
  res.send({ user: "rayane" });
  res.end();
});
app.get("/products", (req, res) => {
  res.send({ productId: "1", productname: "phone", quantity: "10" });
  res.end();
});
app.get("/allusers", (req, res) => {
  res.send({ user: "rayane", isOnlineStatus: "true" });
  res.end();
});
 */
