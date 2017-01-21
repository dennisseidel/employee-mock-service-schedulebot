const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
const app = express();


app.use(bodyParser.json());

// Operation to query employee data
app.get('/employees', (req, res) => {
  console.log(res);
});

// Operation to create employees
app.post('/employees', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});