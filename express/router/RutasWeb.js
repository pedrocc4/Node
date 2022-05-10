const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        titulo: "mi titulo dynamic"
    })
});

router.get("/comida", (req, res) => {
    res.render("comida", {
        titulo: "Pizza casatarradellas"
    })
});

module.exports = router;