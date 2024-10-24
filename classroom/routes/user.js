const express = require("express");
const router = express.Router();

//index - users
router.get("/posts", (req, res) => {
    res.send("GET for users");
});

//Show
router.get("/posts/:id", (req, res) => {
    res.send("GET for user id");
});

//post
router.get("/pposts", (req, res) => {
   res.send("POST for users");
});

//Delete
router.get("/pposts", (req, res) => {
   res.send("POST for user id"); 
});

module.exports = router;