const Note = require("../Schema/note");

const fetchNotes = async(req,res)=>{
    const notes = await Note.find()
    res.json({notes:notes})
}


const fetechNote = async (req,res)=>{
    const noteid = req.params.id;
    const note = await Note.findById(noteid);
    res.json({note:note})
}

const createNote = async(req,res)=>{
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.create({
        title : title,
        body : body,
    });
    console.log("note sended")
    res.json({note:note})
}

const updateNote = async(req,res)=>{
    const noteid = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    await Note.findByIdAndUpdate(noteid,{
        title:title,
        body:body,
    });  

    const note = await Note.findById(noteid);
    res.json({note:note})
}

const deleteNote = async(req,res)=>{
    const noteid = req.params.id;
    await Note.deleteOne({_id:noteid});

    
    res.json({success:"record is deleted"});
}

module.exports = {
    fetchNotes:fetchNotes,
    fetechNote:fetechNote,
    createNote:createNote,
    updateNote:updateNote,
    deleteNote:deleteNote
}