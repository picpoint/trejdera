const express = require('express');
const app = express();
const port = process.env.port || 4000;
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`---server start on port ${port}---`);
});