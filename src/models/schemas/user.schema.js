const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true},
    active: { type: Boolean}
},

{
    timestamps: true,
},
// {
//     collection: "my_users"
// }
);


module.exports = userSchema;