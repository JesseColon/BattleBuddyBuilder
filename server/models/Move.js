const { Schema, model } = require('mongoose');

const moveSchema = new Schema({
    moveID: {
      type: Number,
      required: true,
      trim: true
    },
});

const Move = model('Move', moveSchema);

module.exports = Move;
