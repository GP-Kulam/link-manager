const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

//third way of writing 
const teachers = new mongoose.Schema({
    name : String,
    Subject: String,
    SubjectCode: String
});

const teachers = mongoose.model("teachers",teachersSchema);

//fourth way of writing
const link = new mongoose.Schema(
    {
    teacher:[teachers],
    link: {type:String},
    date: Date,
    user: {
        type: ObjectId,
        ref : "User"
      }
    },
    {timestamps:true}
);

const link = mongoose.model("link",linkSchema);

//exporting both together
module.exports ={teachers,link};