import { Router } from "express";
import Employee from "../models/EmployeeK.js";

const employesRouter = Router();

employesRouter.get("/all", async (req, res) => {
    try {
        const employes = await Employee.find();
        return res.status(200).json(employes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

employesRouter.get("/name", async (req, res) => {
    try {
        const names = await Employee.distinct("name");
        return res.status(200).json(names);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

employesRouter.get("/salary", async (req, res) => {
    try {
        const salarys = await Employee.distinct("salary");
        return res.status(200).json(salarys);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

employesRouter.get("/rol", async (req, res) => {
    try {
        const rols = await Employee.distinct("rol");
        return res.status(200).json(rols);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default employesRouter;