var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var dataSchema = new Schema({
    content: String,
    completed: { type: String, default: 'Uncomplete' },
    updated_at: { type: Date, default: Date.now }
});

mongoose.model('data', dataSchema);