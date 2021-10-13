const result = dotenv.config()
const express = require('express');


//Iniatilization
const app = express();






//Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
  