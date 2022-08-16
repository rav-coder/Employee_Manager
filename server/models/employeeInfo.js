import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name: String,
    ID: Number,
    department: String,
    employmentStatus: String,
    email: String,
    accomodations: [String],
    selectedFile: String,
    //selectedFile: Buffer,
    dateAdded: {
        type: Date,
        default: new Date()
    }

})

const EmployeeInfo = mongoose.model('empoyeeInfo', employeeSchema)

export default EmployeeInfo;