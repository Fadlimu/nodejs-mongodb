var mongoose = require('mongoose'),
    data = mongoose.model('data');

module.exports = {
    all: function(req, res){
        data.find({}, function(err, crud){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('Data Loaded')
            res.render('crud', { crud: crud });
        });
    },
    viewOne: function(req, res){
        data.find({ _id: req.params.id }, function(err, result){
            res.render('edit', { result: result[0] })
        });
    },
    create: function(req, res){
        var dataContent = req.body.content;
        data.create({ content: dataContent }, function(err, result){
            if(err) res.render('error', { error: 'Error creating your data :('})
            res.redirect('/crud');
        });
    },
    destroy: function(req, res){
        var id = req.params.id;

        data.findByIdAndRemove(id, function(err, result){
            if(err) res.render('error', { error: 'Error deleting your data :('});
            res.redirect('/crud');
        });
    },
    edit: function(req, res){
        data.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, result){
            res.redirect('/crud');
        });
    },
    completed: function(req, res){
        data.findOneAndUpdate({ _id: req.params.id }, {completed: "Complete"}, function(err, result){
            res.redirect('/crud');
        });
    },

};