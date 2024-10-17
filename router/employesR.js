import { Router } from "express";
import { allEmployees, nameEmployee, salaryEmployee, rolEmployee } from "../controllers/employees/read.js";

const employesRouter = Router();

employesRouter.get("/all", allEmployees);
employesRouter.get("/name", nameEmployee);
employesRouter.get("/salary", salaryEmployee);
employesRouter.get("/rol", rolEmployee);

export default employesRouter;