import mongoose from "mongoose"

let url= process.env.URI_MONGO

console.log(url);

mongoose.connect(url)
  .then(() => console.log("Te conectaste correctamente a la base de datos"))
  .catch(error => console.log(error))