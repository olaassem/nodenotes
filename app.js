console.log('Starting app.js!');

//require and call node modules

//tell node to fetch all the contents of the fs module and store in fs variable
const fs = require('fs');
const os = require('os');
//requiring files
const notes = require('./notes.js');
//requiring 3rd party modules
const _ = require('lodash');
const yargs = require('yargs');

let argv = yargs.argv;
let command = process.argv[2];


console.log(`Command: ${command}`);
console.log(`Process: ${process.argv}`);
console.log('Yargs', argv);

if (command === 'add'){
  //console.log('Adding new note.');
  notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
  // console.log('Listing all notes.');
  notes.allNotes();
}else if(command === 'read'){
  // console.log('Reading note.');
  notes.readNote(argv.title);
}else if(command === 'remove'){
  // console.log('Removing note.');
  notes.removeNote(argv.title);
}else{
  console.log('Command not recognised.');
}

// console.log(_.isString(true));
// console.log(_.isString('Ola'));

// let filteredArray = _.uniq(['mike',1,'ola',1,2,3,4]);
// console.log(filteredArray);



// let result = notes.addNote();
// console.log(result);
//
// let sum = notes.add(100,1);
// console.log(sum);



// let user = os.userInfo();
// // console.log(user);
// let greeting = `Hello, ${user.username}!!!!! You are ${notes.age}.`;
//
//
// fs.appendFile('greetings.txt', greeting, function(err){
//   if(err){
//     console.log('Unable to write to file');
//   }
//   console.log(greeting);
// });
