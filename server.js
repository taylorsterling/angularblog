 //Install express server
 const express = require('express');
 const path = require('path');
 const app = express();
 // Serve only the static files form the dist directory
 app.use(express.static(__dirname + '/dist/angularblog'));
 app.get('/*', function(req,res) {
 res.sendFile(path.join(__dirname+'/dist/angularblog/index.html'));
 });
 // Start the app by listening on the default Heroku port
 app.listen(process.env.PORT || 8080);

 var db = require('../../db.js');
var Schema = db.Schema;

var userSchema = new Schema({
  	username: { type: String, required: true, unique: true },
  	email: { type: String, required: true, unique: true },
  	password: { type: String, required: true },
  	admin: { type: Boolean, default: false},
  	created_at: Date,
  	updated_at: Date
});

// on every save, add the date
userSchema.pre('save', function(next) {
  	// get the current date
  	var currentDate = new Date();

  	// change the updated_at field to current date
  	this.updated_at = currentDate;

  	// if created_at doesn't exist, add to that field
  	if (!this.created_at)
    	this.created_at = currentDate;

  	next();
});

var User = db.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;