const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('https://669b18bd276e45187d349ec4.mockapi.io/teste_endpoint/:endpoint', (req, res) => {
  res.send('Hello from the example endpoint!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
