let express = require("express");
let app = express();
const path = require("path");

//Mongo Database ***
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/usersSchema');
let UserSchema = new mongoose.Schema({
	title: {type: String, require: true},
	resp: {type: String, require: true},
	desc: {type: String, require: true},
	severity: {type: String, require: true},
	status: {type: String, default: 'Open', require: true}
	
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");



//Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Static Folder
app.use(express.static(__dirname + '/public/dist'));





// Routes ***


app.all("*", (req,res,next) => {
	res.sendfile(path.resolve("./public/dist/index.html"))
})


// Server Listening @ 3000
app.listen(3000, ()=> console.log("Server running at 3000;"))