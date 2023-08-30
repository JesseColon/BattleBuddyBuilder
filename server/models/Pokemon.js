const { Schema, model } = require('mongoose');
const Moves = require('./Moves');

const pokeSchema = new Schema({
    pokeID: {
      type: Number,
      required: true,
      trim: true
    },
    moves: [Moves.schema],
    itemID: {
       type: Number,
       required: false
    },
});

const Pokemon = model('Pokemon', pokeSchema);

module.exports = Pokemon;
