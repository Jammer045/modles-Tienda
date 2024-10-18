import Employee from "../../models/EmployeeK.js";

const allEmployees = async (req, res) => {
    try {
        const employes = await Employee.find();
        return res.status(200).json(employes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const nameEmployee = async (req, res) => {
    try {
        const names = await Employee.distinct("name");
        return res.status(200).json(names);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const rolEmployee = async (req, res) => {
    try {
        const rol = await Employee.distinct("rol");
        return res.status(200).json(rol);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const salaryEmployee = async (req, res) => {
    try {
        const salarys = await Employee.distinct("salary");
        return res.status(200).json(salarys);    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const employeeByName = async (req, res) => {
    try {
        const employee = await Employee.find({ name: req.params.name });
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const employeeByRol = async (req, res) => {
    try {
        const employee = await Employee.find({ rol: req.params.rol });
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const employeeBylastName = async (req, res) => {
    try {
        const employee = await Employee.find({ lastName: req.params.lastName });
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { allEmployees, nameEmployee, rolEmployee, salaryEmployee, employeeByName, employeeByRol, employeeBylastName };