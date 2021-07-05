const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, function() {
  console.log(`Server running on ${port}`);
});

const dbPath = path.join(__dirname, 'db.json');
const adapter = new FileAsync(dbPath);

low(adapter).then(function() {
  console.log(`db loaded: ${dbPath}`);

  // app.get('/demo', function(req, res) {
  //   const demo = db.get('demo').value();
  //   res.status(200).send(demo);
  // });
});
