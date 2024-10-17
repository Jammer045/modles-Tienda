import "dotenv/config.js";
import "../../config/dataBase.js";
import Employee from "../EmployeeK.js";

const employeeData = [
    {
        name: "John",
        lastName: "Doe",
        email: "john.doe@company.com",
        tel: "555-1234",
        rol: "Manager",
        salary: 75000
    },
    {
        name: "Jane",
        lastName: "Smith",
        email: "jane.smith@company.com",
        tel: "555-5678",
        rol: "Developer",
        salary: 65000
    },
    {
        name: "Michael",
        lastName: "Johnson",
        email: "michael.johnson@company.com",
        tel: "555-9012",
        rol: "Designer",
        salary: 60000
    },
    {
        name: "Emily",
        lastName: "Brown",
        email: "emily.brown@company.com",
        tel: "555-3456",
        rol: "HR Specialist",
        salary: 55000
    },
    {
        name: "David",
        lastName: "Wilson",
        email: "david.wilson@company.com",
        tel: "555-7890",
        rol: "Sales Representative",
        salary: 50000
    },
    {
        name: "Sarah",
        lastName: "Taylor",
        email: "sarah.taylor@company.com",
        tel: "555-2345",
        rol: "Marketing Specialist",
        salary: 58000
    },
    {
        name: "Robert",
        lastName: "Anderson",
        email: "robert.anderson@company.com",
        tel: "555-6789",
        rol: "Project Manager",
        salary: 72000
    },
    {
        name: "Lisa",
        lastName: "Martinez",
        email: "lisa.martinez@company.com",
        tel: "555-0123",
        rol: "Customer Service Rep",
        salary: 48000
    },
    {
        name: "William",
        lastName: "Thomas",
        email: "william.thomas@company.com",
        tel: "555-4567",
        rol: "Systems Analyst",
        salary: 67000
    },
    {
        name: "Jennifer",
        lastName: "Garcia",
        email: "jennifer.garcia@company.com",
        tel: "555-8901",
        rol: "Quality Assurance",
        salary: 62000
    },
    {
        name: "Daniel",
        lastName: "Lee",
        email: "daniel.lee@company.com",
        tel: "555-2345",
        rol: "Software Engineer",
        salary: 70000
    },
    {
        name: "Patricia",
        lastName: "White",
        email: "patricia.white@company.com",
        tel: "555-6789",
        rol: "Financial Analyst",
        salary: 63000
    },
    {
        name: "Matthew",
        lastName: "Harris",
        email: "matthew.harris@company.com",
        tel: "555-0123",
        rol: "Operations Manager",
        salary: 68000
    },
    {
        name: "Linda",
        lastName: "Clark",
        email: "linda.clark@company.com",
        tel: "555-4567",
        rol: "Administrative Assistant",
        salary: 45000
    },
    {
        name: "Andrew",
        lastName: "Lewis",
        email: "andrew.lewis@company.com",
        tel: "555-8901",
        rol: "Data Scientist",
        salary: 72000
    },
    {
        name: "Elizabeth",
        lastName: "Robinson",
        email: "elizabeth.robinson@company.com",
        tel: "555-2345",
        rol: "Product Manager",
        salary: 76000
    },
    {
        name: "Christopher",
        lastName: "Walker",
        email: "christopher.walker@company.com",
        tel: "555-6789",
        rol: "IT Support Specialist",
        salary: 52000
    },
    {
        name: "Barbara",
        lastName: "Hall",
        email: "barbara.hall@company.com",
        tel: "555-0123",
        rol: "Content Writer",
        salary: 55000
    },
    {
        name: "Joseph",
        lastName: "Young",
        email: "joseph.young@company.com",
        tel: "555-4567",
        rol: "Sales Manager",
        salary: 71000
    },
    {
        name: "Margaret",
        lastName: "Allen",
        email: "margaret.allen@company.com",
        tel: "555-8901",
        rol: "Human Resources Manager",
        salary: 69000
    }
];

Employee.insertMany(employeeData);