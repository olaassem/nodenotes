console.log('starting app!');

//require and call node modules

//tell node to fetch all the contents of the fs module and store in fs variable
const fs = require('fs');
const os = require('os');


let user = os.userInfo();
console.log(user);
let greeting = `Hello, ${user.username}!!!!!`;


fs.appendFile('greetings.txt', greeting, function(err){
  if(err){
    console.log('Unable to write to file');
  }
  console.log(greeting);
});
