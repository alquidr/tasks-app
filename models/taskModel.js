const mongoose = require('mongoose');

//Definition of a task properties types.
let Task = mongoose.model('Task', {
    tittle: {
        type: String,
        required: true,
        trim: true
    },

    state: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: null,
        required: true
    },
});

module.exports = { Task };