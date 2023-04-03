const mongoose = require('mongoose');


const facultySchema = new mongoose.Schema({
    Id:{
        type: String,
    },
    Name : {
        type: String,
    },
    Contact: {
        type: String,
    },
    Gender: {
        type: String,
    },
    Email: {
        type: String,
    },
    Password: {
        type: String
    },
    Courses: [
        {
            CourseID: {
                type: String
            }
        }
    ]


})

const facultyObj = mongoose.model('faculty',facultySchema)

module.exports = facultyObj;
