//const app = express();
const express = require("express");
const app = express();
const port = port();

//const HTTP_PORT = 8888;




app.use(express.static('./', {
    setHeaders: function(res) {
        res.set("Content-Security-Policy", "default-src 'self'")
    }
}));

app.get('/', (req, res) => {
    //res.render({ message: "OK"});
    res.render('index.html');
})

app.listen(port, () => {
    console.log('Listening on port ${port}')
});