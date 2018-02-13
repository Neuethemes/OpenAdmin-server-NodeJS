const { mongoose } = require('../../config');

let MessagesSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  date: String,
  header: String,
  content: String
});

const Messages = mongoose.model('Messages', MessagesSchema);

module.exports = Messages;