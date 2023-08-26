// const fs =require("fs");
// fs.writeFileSync('note.txt',"deep")
// fs.appendFileSync("note.txt"," chhatbar")
// fs.readFileSync("note.txt")

// const add =require('./utils');
// const sum =add(2,3)
// console.log(sum)
const yargs = require('yargs');
const notes = require('./notes');
const chalk = require('chalk');
const validator = require('validator');
// const note = getNotes()
// console.log(note)
// console.log(validator.isEmail("email@example.com"))
// console.log(chalk.blue.bgWhite("sucessfully created"))
// const command = process.argv[2]
// if (command === "add") {
//     console.log("adding notes")
// } else if (command === "remove") { console.log("removing notes") }

yargs.command({
    command: 'add',
    describe: "add notes",
    builder: {
         title:{
            describe: "add notes",
            demandOption:true,
            type: 'string',
         },
         shortTitle:{
            describe:"add short title",
            demandOption:true,
            type: 'string',
         }   
    },
    // handler: (argv) => console.log("adding notes...",argv.title,argv.shortTitle)
    handler: (argv)=>{
        notes.addNotes(argv.title,argv.shortTitle)
    }

})
yargs.command({

    command: 'remove',
    describe: "remove notes",
    // handler: () => console.log("removing notes...")
    builder:{
        title:{
            describe:"remove notes",
            demandOption:true,
            type: 'string',         

          }
    },    
handler:(argv)=>{
    notes.removenNotes(argv.title)
}
})
yargs.command({

    command: 'list',
    describe: "listing notes",
    handler: () => notes.listNotes() 

})
yargs.command({

    command: 'read',
    describe: "read notes",
    builder:{
        title:{
            describe:"read notes",
            demandOption:true,
            type: 'string', 
        }
    },
    handler: (argv) => notes.readNotes(argv.title)
})
// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse();