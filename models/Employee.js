const mongoose = require('mongoose')



const EmployeeSchema = new mongoose.Schema({
    Name:String,
    email:String,
    password:String
})

const EmployeeModel =mongoose.model("employees",EmployeeSchema)

module.exports = EmployeeModel