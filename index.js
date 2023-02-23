const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/index.html'));
});


app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

