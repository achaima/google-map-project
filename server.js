const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log('app is running on port', PORT);
});
app.use(express.static('node-modules'));
app.use(express.static('front-end'));
