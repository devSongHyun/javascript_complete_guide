const express = require('express');
const bodyParser = require('body-parser');

const locationsRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-allow-Origin', '*');
  res.setHeader('Access-Control-allow-Method', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-allow-Headers', 'Content-Type');
  next();
});

app.use(locationsRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'Unknown user';
//   res.render('index', {
//     user: userName,
//   });
// });

app.listen(3000);
