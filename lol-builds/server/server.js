const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();

const port = process.env.PORT || 2233

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, '/../client/')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

// app.use("/api", require('./routes'));

app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, '/../client', 'index.html'))
})

app.listen(port, (err) => {
    if (err) {
        console.log('Error occurred : ', err);
    }
    console.log('Server is listening to port : ', port);
});
