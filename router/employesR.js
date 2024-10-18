import e, { Router } from "express";
import { allEmployees, nameEmployee, salaryEmployee, rolEmployee, employeeByName, employeeByRol, employeeBylastName } from "../controllers/employees/read.js";

const employesRouter = Router();

employesRouter.get("/all", allEmployees);
employesRouter.get("/name", nameEmployee);
employesRouter.get("/salary", salaryEmployee);
employesRouter.get("/rol", rolEmployee);
employesRouter.get("/name/:name", employeeByName);
employesRouter.get("/rol/:rol", employeeByRol);
employesRouter.get("/lastName/:lastName", employeeBylastName);

export default employesRouter;