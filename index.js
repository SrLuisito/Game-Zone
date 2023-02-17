const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'view')));
app.use('/css', express.static(path.join(__dirname, 'style')));
app.use('/js', express.static(path.join(__dirname, 'javascript')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

    