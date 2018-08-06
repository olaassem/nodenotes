// let personString = '{"name": "Ollos", "age": 32}';
//
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


let fs = require('fs');

let originalNote = {
  title: "Some Title",
  body: "Some Body"
}

let originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
