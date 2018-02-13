const { mongoose } = require('../../config');

let StatsSchema = new mongoose.Schema({
  type: String,
  data: Array
});

const Stats = mongoose.model('Stats', StatsSchema);

module.exports = Stats;