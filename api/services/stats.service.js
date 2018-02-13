const Stats = require('../models/stats.model');

exports.getMonitoring = async function() {
  // Try Catch the awaited promise to handle the error
  try {
    let monitoring = await Stats.findOne({type: 'monitoring'});
    // Return the stats list that was returned by the mongoose promise
    return monitoring;
  } catch (e) {
    // return a Error message describing the reason
    throw Error('Error while Paginating Stats');
  }
};

exports.getSales = async function() {
  // Try Catch the awaited promise to handle the error
  try {
    let sales = await Stats.findOne({type: 'sales'});
    // Return the stats list that was returned by the mongoose promise
    return sales;
  } catch (e) {
    // return a Error message describing the reason
    throw Error('Error while Paginating Stats');
  }
};

exports.getSummary = async function() {
  // Try Catch the awaited promise to handle the error
  try {
    let summary = await Stats.findOne({type: 'summary'});
    // Return the stats list that was returned by the mongoose promise
    return summary;
  } catch (e) {
    // return a Error message describing the reason
    throw Error('Error while Paginating Stats');
  }
};

exports.getCharts = async function() {
  // Try Catch the awaited promise to handle the error
  try {
    let charts = await Stats.findOne({type: 'charts'});
    // Return the stats list that was returned by the mongoose promise
    return charts;
  } catch (e) {
    // return a Error message describing the reason
    throw Error('Error while Paginating Stats');
  }
};

exports.updateStats = async function() {
  // Creating a new Mongoose Object by using the new keyword
  let newStats = new Stats({
    type: 'sales',
    data: [
      { title: "745", excerpt: "Total orders trough Marketplaces", type: "warning", val: 25 },
      { title: "6,764", excerpt: "Total Affiliate Sales", type: "primary", val: 65 },
      { title: "12,876", excerpt: "Subscribtion Sales", type: "success", val: 85 },
    ]
  });

  try {
    // Saving the User
    let savedStats = await newStats.save();
    return savedStats;
  } catch(e) {
    // return an Error message describing the reason
    throw Error("Error while Creating Stats");
  }
};

