const express = require('express');

const app = express();
app.use(express.json());

const cartItems = require("./cartItems");

//Convert params and body into useable JSON


app.use("/", cartItems);

const port = 2000;

//run the server!
app.listen(port, () => console.log(`listening on port: ${port}`));
