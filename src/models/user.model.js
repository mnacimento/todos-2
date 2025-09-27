const mongoose = require("mongoose");
const userSchema = require("./schemas/user.schema");

const User = mongoose.model("User", userSchema);

module.exports = User;





















// const users = [
//   {
//     id: 1,
//     name: "Mauro",
//     username: "mnacimento",
//     password: "$2b$10$IaoymDCD.9hZn5uh1WtU4OkKQwZfSY1LGhN68gY7PC4/3GknWwUqW",
//     active: true
//   },
//     {
//     id: 2,
//     name: "Emilia",
//     username: "enacimento",
//     password: "$2b$10$kBH3kt.Mkq24TYLNq1JGEuU4H5duGyPjtYwjFv8LezUvQmXn5eUT6",
//     active: false
//   },
//     {
//     id: 3,
//     name: "Martina",
//     username: "mvega",
//     password: "$2b$10$c8NGTB.tUBreCTav/Yj/kezJK.YO5JDnM7wFyBZwWkVXlDtv7EsYa",
//     active: true
//   },
// ];

// const getUsers = () => users;

// const saveUser = async (name, username, password) => {
//     const lastUser = users[users.length - 1];
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = {
//         name: name,
//         username: username,
//         password: hashedPassword,
//         active: true,
//     };
//     if (lastUser) {
//         newUser.id = lastUser.id + 1;
//     } else {
//         newUser.id = 1;
//     }
//     users.push(newUser);

//     console.log(newUser);
    
//     return newUser.id;
// }




// module.exports = {
//     saveUser,
//     findUserByUserName,
//     isValidPassword
// };
