// Lodash
const _ = require("lodash");
// only change code below this line
// users nested array with four objects starts here
const users = [
  { id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];
// users nested array with four objects ends here

// getUsers function - list of users starts here

function getUsers() {
  var output = "";
  users.forEach((key) => {
    output = `${key.id} - ${key.firstName} ${key.lastName} is ${key.age}, ${key.gender}`;
    console.log(output);
    return output;
  });
}

// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUserById(id) {
  try {
    var user = _.find(users, { id: id });
    var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    console.log("Cannot read property 'id'"); // Change this line

    return "Cannot read property 'id'"; // Change this line
  }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUserById(1); // Change this line
findUserById(2); // Change this line
findUserById(3); // Change this line
findUserById(6); // Change this line
module.exports = findUserById;
