// import mongoose
const mongoose = require('mongoose')

// specify Shcema
const Schema = mongoose.Schema;


// Define the Schema

const PhoneSchema = new Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number
       
    },
    photo_url: {
        type:String,
        default:'https://static.s-sfr.fr/media/catalogue/article/mobile/vnuem9x7/iPhone14Pro_VioletProfond_Front-Side_400x540px.png'
    }
});

// Specify the Model

const Phone = mongoose.model("Phone",PhoneSchema);

module.exports=Phone;
