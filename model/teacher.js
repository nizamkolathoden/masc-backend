const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:[{
        type: ObjectId,
        ref: 'course'
    }]
    
            
    
})

module.exports  = mongoose.model('teacher',teacherSchema);