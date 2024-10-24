const express = require("express");
const router = express.Router();

//index
router.get("/posts", (req, res) => {
    res.send("GET for posts");
});

//Show
router.get("/posts/:id", (req, res) => {
    res.send("GET for post id");
});

//post
router.get("/pposts", (req, res) => {
   res.send("POST for posts");
});

//Delete
router.get("/pposts", (req, res) => {
   res.send("POST for posts"); 
});

module.exports = router;