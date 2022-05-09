const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {
        titulo: "mi titulo dynamic"
    })
});

//TODO imlementar las demas rutas

app.use((req, res, next) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});