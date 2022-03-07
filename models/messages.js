const mongoose=require('mongoose');
const Messagesschema=mongoose.Schema({
    senderName: {
        type: String,
        required: true,
    },
    senderEmail: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required :true,
    },
});
module.exports=mongoose.model("messages",Messagesschema);