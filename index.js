const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Employee } = require('./models/employee');

const port = process.env.PORT || 3001;
const app = express();


app.use(bodyParser.json());

// Operation to query employee data
app.get('/employees', (req, res) => {
  console.log(res);
});

// Operation to create employees
app.post('/employees', (req, res) => {
  const employee = new Employee(req.body);
  employee.save().then((doc) => {
    res.send(doc);
  }).catch((err) => {
    res.status(401).send(err);
  });
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
