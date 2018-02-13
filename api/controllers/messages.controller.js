const MessagesService = require('../services/message.service');

// Async Controller function to get the User List

exports.getAll = async function(req, res, next) {
  try {
    let messages = await MessagesService.getAll();
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: messages, message: "Successfully Messages Received"});
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};