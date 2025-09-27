// const mongoose = require("mongoose");

// const connectMongoDB = async () => {
//     const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
//     const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
//     await mongoose.connect(`${MONGODB_CONNECTION_STRING}/${MONGODB_DATABASE_NAME}`,
//         {
//             serverSelectionTimeoutMS:3000,
//         }
//     );
//     console.log("Conexion a mongo db establecida correctamente");
// }

// module.exports = connectMongoDB;


// const mongoose = require("mongoose");

// const connectMongoDB = async () => {
//     const MONGODB_CONNECTION_STRING ="mongodb+srv://bnacimento:7wuRcTRAXIVkjQXN@fullstack.6pgoogx.mongodb.net/?retryWrites=true&w=majority&appName=fullstack" ;
//     const MONGODB_DATABASE_NAME = "";
//     await mongoose.connect(`${MONGODB_CONNECTION_STRING}`,
//         {
//             serverSelectionTimeoutMS:3000,
//             dbName: MONGODB_DATABASE_NAME
//         }
//     );
//     console.log("Conexion a mongo db establecida correctamente");
// }

// (async () => {
//     await connectMongoDB();
// })()

// module.exports = connectMongoDB;


const mongoose = require("mongoose");

const connectMongoDB = async () => {
    const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
    const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    await mongoose.connect(`${MONGODB_CONNECTION_STRING}`,
        {
            serverSelectionTimeoutMS:3000,
            dbName: MONGODB_DATABASE_NAME
        }
    );
    console.log("Conexion a mongo db establecida correctamente");
}


module.exports = connectMongoDB;