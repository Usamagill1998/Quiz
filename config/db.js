// const mongoURI = require("./keys").mongoURI
const mongoose =require("mongoose") 
 
const connectDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://usmavaival:usamavaival@cluster0.o5chg.mongodb.net/TalhaMotors?retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false, 
			useUnifiedTopology: true
		});
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	} 
};
mongoose.Promise = global.Promise
module.exports = connectDB;
