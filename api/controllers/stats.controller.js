const StatsService = require('../services/stats.service');

// Async Controller function to get the User List

exports.getMonitoring = async function(req, res, next) {
  try {
    let monitoring = await StatsService.getMonitoring();
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: monitoring, message: "Successfully Monitoring Received"});
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getSales = async function(req, res, next) {
  try {
    let sales = await StatsService.getSales();
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: sales.data, message: "Successfully Monitoring Received"});
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getSummary = async function(req, res, next) {
  try {
    let summary = await StatsService.getSummary();
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: summary.data[0], message: "Successfully Summary Received"});
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getCharts = async function(req, res, next) {
  try {
    let charts = await StatsService.getCharts();
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: charts.data[0], message: "Successfully Charts Received"});
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.updateStats = async function(req, res, next) {
  try {
    StatsService.updateStats();
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: '', message: "Successfully"});
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};