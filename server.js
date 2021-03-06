var express = require('express'),
	app = express(),
	bodyparser = require('body-parser'),
	multer  = require('multer'),
	upload = multer({ dest: 'uploads/' }),
	size,
	port = 8080;

// APP CONFIGURE 
app.set('view engine','ejs');
app.use(express.static('css'));
app.use(bodyparser.urlencoded({extended: true}));

// MAIN PAGE
app.get('/',function(req,res){
	res.render('index');
});
// GET SIZE ROUTE
app.get('/size',function(req,res){
	res.send({"size" : size})
});
// UPLOAD FILE ROUTE
app.post('/new', upload.single('myfile'), function (req, res, next) {
 	size = req.file.size;
 	res.redirect('/size');
})

app.listen(port,process.env.IP,function(){
	console.log("Server has connected with port:",port)
});