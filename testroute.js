const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello this is test route");
});

module.exports = router;
