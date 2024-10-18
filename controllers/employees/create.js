import Employee from "../../models/EmployeeK.js";

const createEmployee = async (req, res) => {
    try {
        const employee = req.body;
        const employeeCreated = await Employee.create(employee);
        return res.status(201).json({ response: employeeCreated });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createEmployees = async (req, res) => {
    try {
        const employees = req.body;
        const employeesCreated = await Employee.insertMany(employees);
        return res.status(201).json({ response: employeesCreated });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { createEmployee, createEmployees }