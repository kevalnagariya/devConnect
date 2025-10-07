const mongoose = require("mongoose");

const connectDB = async () => {
    await  mongoose.connect(
        "mongodb+srv://kevalnagariya27_db_user:jn3sq16pFEsPopgg@devconnect.8bs0way.mongodb.net/devConnect"
 );
}

module.exports = connectDB;

