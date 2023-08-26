const fs = require('fs');
const getNotes = () => {
    return "here is a note";
}

const addNotes = (title, body) => {

    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)
    debugger
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            shortTitle: body,
        })
        saveNotes(notes);
        console.log(title, body);
    } else {
        console.log("title already exists", title)

    }
}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("data.json", dataJson);

}

const removenNotes = (title) => {
    console.log("hello", title);

    const notes = loadNotes();
    const remove = notes.filter((note) => {note.title !== title} )

    saveNotes(remove);
    notes.length>remove.length?console.log("removed notes"):console.log("note not found")

}

const listNotes=()=>{
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(element.title)
    });

}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const data = dataBuffer.toString();
        return JSON.parse(data);

    } catch {
        return []
    }

}
const readNotes=(title)=>{
    const notes=loadNotes();
    const ifAvailable=notes.find((note)=>{
       return note.title===title
    })
    if(ifAvailable){
        console.log(ifAvailable.title)
        console.log(ifAvailable.shortTitle)
    }
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removenNotes: removenNotes,
    listNotes: listNotes,
    readNotes: readNotes,
};