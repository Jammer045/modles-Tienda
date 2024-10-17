import "dotenv/config.js";
import "../../config/dataBase.js";
import Store from "../StoreK.js";

const storeData = [
    {
        name: "Downtown Grocery",
        address: "123 Main St, Cityville, ST 12345",
        email: "contact@downtowngrocery.com",
        phone: "555-1234",
        type: "Grocery",
        revenue: 500000
    },
    {
        name: "Tech Haven",
        address: "456 Gadget Ave, Techtown, ST 67890",
        email: "info@techhaven.com",
        phone: "555-5678",
        type: "Electronics",
        revenue: 1000000
    },
    {
        name: "Fashion Forward",
        address: "789 Trendy Blvd, Stylesville, ST 54321",
        email: "hello@fashionforward.com",
        phone: "555-9876",
        type: "Clothing",
        revenue: 750000
    },
    {
        name: "Book Nook",
        address: "321 Reader's Lane, Litville, ST 13579",
        email: "books@booknook.com",
        phone: "555-2468",
        type: "Bookstore",
        revenue: 300000
    },
    {
        name: "Fitness First",
        address: "654 Muscle Rd, Gymcity, ST 97531",
        email: "pump@fitnessfirst.com",
        phone: "555-1357",
        type: "Gym Equipment",
        revenue: 600000
    }
];

Store.insertMany(storeData)