import EmployeeInfo from "../models/employeeInfo.js";


export const getEmployees = async (req, res) => {
    try{
        const employees = await EmployeeInfo.find();

        //console.log(employees)

        res.status(200).json(employees)
    } catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getEmployeesBySearch = async (req, res) => {

    const { searchQuery, accoms} = req.query

    try {
        const name = new RegExp(searchQuery, 'i');

        const employees = await EmployeeInfo.find({ $or: [ { name}, { accomodations: { $in: accoms.split(',')} }]})

        res.json({ data : employees})

    } catch (error) {
        res.status(404).json({ message : error.message})
    }
}

export const createEmployee = async (req, res) => {
    const empInfo = req.body;

    const newEmployee = new EmployeeInfo(empInfo)

    try {
        newEmployee.save();

        res.status(201).json(newEmployee)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}