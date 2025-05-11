const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars'); // Import express-handlebars, must install it
const app = express();
const port = 3000;

app.use(express.static('src/resource/public')); // Serve static files from the public directory, can directly access the files in the public directory
//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', engine({defaultLayout : false})); // Set default layout to false => means Handelbar will not look for default layout file
app.set('view engine', 'handlebars');
app.set('views', 'src/resource/views');
app.get('/', (req, res) => {
    res.render('home');
});
//127.0.0.1 - localhost
app.get('/about', (req, res) => {
    res.send('Testing git repository');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});