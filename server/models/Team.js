const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    pokemon: [Pokemon.schema],
});

const Team = model('Team', teamSchema);

module.exports = Team;
