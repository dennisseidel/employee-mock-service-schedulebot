const mongoose = require('mongoose');

let mongoUri = 'mongodb://dennis:changeit@localhost:27018/Employees';
mongoose.Promise = global.Promise;

if (process.env.VCAP_SERVICES) {
  const vcapServices = JSON.parse(process.env.VCAP_SERVICES);
  mongoUri = vcapServices['compose-for-mongodb'][0].credentials.uri;
}

mongoose.connect(mongoUri);

module.exports = {
  mongoose,
};
