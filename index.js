/* eslint-env node*/
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const { mongoose } = require('./db/mongoose');
const { Employee } = require('./models/employee');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

// Operation to push new employee termine
app.patch('/employees/:id/termin', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Employee.findByIdAndUpdate(id, { $addToSet: { nonAvailablility: body } }, { new: true })
  .then((employee) => {
    if (!employee) {
      return res.status(404).send();
    }
    return res.send({ employee });
  }).catch((error) => {
    console.log('Error:', error);
    res.status(400).send();
  });
});

// Operation to query employee data
app.get('/employees/:id', (req, res) => {
  Employee.findById(req.params.id).then(
    (employee) => {
      res.send({ employee });
    });
  // res.send(req.query.id);
  // Employee.find().then(todos);
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
