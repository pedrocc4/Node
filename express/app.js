const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));

// Rutas web
app.use('/api', require('./router/RutasWeb'));

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});