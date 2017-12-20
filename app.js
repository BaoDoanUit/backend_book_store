// import libs
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// controllers
var bookController = require("./controller/book");

// define middleware
app.use(bodyParser.urlencoded({ extended: false }))

// define routing 
app.route('/books')
  .get(bookController.getAll)
  .post(bookController.create)
  .put()
  .delete();

app.route('/books/:id')
  .get(bookController.getOne)
  .post()
  .put(bookController.update)
  .delete(bookController.delete);

var port = process.env.PORT || 3333; 
app.listen(port, function() {
  console.log("Server is running on port: " + port)
})
