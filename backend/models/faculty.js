const mongoose = require('mongoose');


const facultySchema = new mongoose.Schema({

    Name : {
        type: String,
    },
    Phone: {
        type: Number,
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
