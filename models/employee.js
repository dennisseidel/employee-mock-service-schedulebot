const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
  surname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    lowercase: true,
  },
  expertise: {
    type: Array,
    required: true,
  },
  nonAvailablility: {
    type: Object,
  },
});

module.exports = { Employee };
