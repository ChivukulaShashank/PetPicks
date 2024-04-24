const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://Shashank:vhu2A1VONA3F7SPN@cluster0.cti68yj.mongodb.net/Cluster0")
    .then(() => {
        console.log('Mongoose connected successfully');
    })
    .catch((error) => {
        console.error('Failed to connect mongoose:', error);
    });

module.exports = mongoose;
