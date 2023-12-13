const router = require(express).router();

router.get("/user", (req, res) => {
  res.send({ username: "rayane", email: "rayane@gmail.com" });
});
modules.exports = router;
