console.log('Starting notes.js!');

// module.exports.addNote = () => {
//   console.log('add note');
//   return 'New Note!';
// };
//
// module.exports.add = (a,b) =>{
//   console.log('adding!');
//   return a + b;
// }

const fs = require('fs');


let addNote = (title, body) => {
  // console.log("Adding note: ", title, body);
  let notes = [];
  let note = {
    title,
    body
  };

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let allNotes = () => {
  console.log('Getting all notes!');
}

let readNote = (title) => {
  console.log('Reading note: ', title);
}

let removeNote = (title) => {
  console.log('Removing note: ', title );
}

module.exports = {
  addNote,
  allNotes,
  readNote,
  removeNote
};
