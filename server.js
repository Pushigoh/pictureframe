var express = require('express');
var glob = require('glob');
var app = express();
var port = 8080;
//var pictureFolder = "/frame/pictures/";
var display;
var time;
var image;
//get display, time, and image
app.get('/', function(req, res){
	display = req.query.display;
	console.log(`display:${display}`);//debug
	time = req.query.time;
	console.log(`time:${time}`);//debug
	image = `pictures/${display}.*`;
	//find the image
	glob(`${image}`, function (er, files){
		files.forEach(function(value){
			image = value;
			console.log(`image:${image}`);//debug
		});
		if (typeof display == 'undefined')
			image = "pictures/0.png";
		if (typeof time == 'undefined')
			image = "20s";
		//index page
		res.render('index', {
			image: image,
			display: display,
			time: time
		});
	});	
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(port);
console.log(`App started on port ${port}`);
