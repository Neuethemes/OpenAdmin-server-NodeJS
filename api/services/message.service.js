const Messages = require('../models/messages.model');

exports.getAll = async function() {
  // Try Catch the awaited promise to handle the error
  try {
    let messages = await Messages.find();
    // Return the stats list that was returned by the mongoose promise
    return messages;
  } catch (e) {
    // return a Error message describing the reason
    throw Error('Error while Paginating Stats');
  }
};
