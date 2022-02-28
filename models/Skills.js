const mongoose=require('mongoose');
const SkillsSchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    level:{
        type: Number,
        required :true,
    }

})
module.exports=mongoose.model('Skills',SkillsSchema);