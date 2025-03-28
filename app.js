const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello this is the beginning of the project!, now we are going to deploy it to Heroku');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});