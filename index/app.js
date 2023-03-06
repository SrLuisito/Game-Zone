const express = require('express');
const app = express();

app.use(express.static('VistaDeLaPagina'));
app.use(express.static('estilos'));

app.get('/', (req, res) => {
  res.send('abrir servidor');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});




