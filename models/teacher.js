const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const mongoose = require("mongoose");


const {ObjectId} = mongoose.Schema;


//third way of writing 
const teacherSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name : String,
    email: String,
    department: String,
    
});

const ProductCart = mongoose.model("ProductCart",ProductCartSchema);

//fourth way of writing
const OrderSchema = new mongoose.Schema(
    {
    products:[ProductCartSchema],
    transaction_id :{},
    amount: {type:Number},
    adress: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref : "User"
      }
    },
    {timestamps:true}
);

const Order = mongoose.model("Order",OrderSchema);

//exporting both together
module.exports ={Order,ProductCart};