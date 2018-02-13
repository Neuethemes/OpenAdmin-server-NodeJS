const UserService = require('../services/user.service');

// Async Controller function to get the User List

exports.authenticate = async function(req, res, next) {

  console.log(req.body);

  try {

    let user = await UserService.authenticate(req.body.email, req.body.password);

    // Return the users list with the appropriate HTTP Status Code and Message.

    return res.status(200).json({status: 200, data: user, message: "Authenticate successfully"});

  } catch(e) {

    //Return an Error Response Message with Code and the Error Message.

    return res.status(400).json({status: 400, message: e.message});

  }

};


exports.getUsers = async function(req, res, next) {

  // Check the existence of the query parameters, If the exists doesn't exists assign a default value
  let page = req.query.page ? req.query.page : 1;
  let limit = req.query.limit ? req.query.limit : 10;

  try {

    let users = await UserService.getUsers({}, page, limit);

    // Return the users list with the appropriate HTTP Status Code and Message.

    return res.status(200).json({status: 200, data: users, message: "Successfully Users Received"});

  } catch(e) {

    //Return an Error Response Message with Code and the Error Message.

    return res.status(400).json({status: 400, message: e.message});

  }
};

exports.createUser = async function(req, res, next) {

  // Req.Body contains the form submit values.

  let user = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  console.log(user);

  try {

    // Calling the Service function with the new object from the Request Body

    let createdUser = await UserService.createUser(user);
    return res.status(201).json({status: 201, data: createdUser, message: "Successfully Created User"})
  }catch(e){

    //Return an Error Response Message with Code and the Error Message.

    return res.status(400).json({status: 400, message: "User Creation was Unsuccessfully"})
  }
};

exports.updateUser = async function(req, res, next) {

  // Id is necessary for the update

  if (!req.body._id){
    return res.status(400).json({status: 400, message: "Id must be present"})
  }

  let id = req.body._id;

  let user = {
    id,
    firstName: req.body.firstName || null,
    lastName: req.body.lastName || null,
    avatar: req.body.avatar || null
  };

  console.log(user);

  try {
    let updatedUser = await UserService.updateUser(user);
    return res.status(200).json({status: 200, data: updatedUser, message: "Successfully Updated User"})
  } catch(e) {
    return res.status(400).json({status: 400, message: e.message})
  }
};

exports.removeUser = async function(req, res, next) {

  let id = req.params.id;

  try {
    let deleted = await UserService.deleteUser(id);
    return res.status(204).json({status:204, message: "Successfully User Deleted"})
  } catch(e) {
    return res.status(400).json({status: 400, message: e.message})
  }

};