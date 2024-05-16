const fs = require("fs");
const path = require("path");

// Set up initial server 
const port = 8000;
const express = require('express');
const app = express();

// Dynamically connect server to web routes;
const path_router = path.join(__dirname, "routes");
fs.readdirSync(path_router).forEach((file) => {
    if (file.endsWith('web-routes.js')) { 
        const router_module = require(path.join(path_router, file));
        app.use(router_module.router);
    }
    else if (file.endsWith('api-routes.js')) {
        const router_module = require(path.join(path_router, file));
        app.get(router_module.router);
    }
});

//init server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
