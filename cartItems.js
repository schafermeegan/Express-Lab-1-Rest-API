//Import expresss module
const express = require("express");
//Add Router for cart items
//This lets us to split out API Route
//into seperate modules
const cartItems = express.Router();
const cartData = require('./cartData');

// respond with "Hello Class!" at URI: /cartItems

//.get you're always asking to get data back

cartItems.get('/', (req, res) => {
   
    res.send(cartData);
});

cartItems.post("/cartItems", (req, res) => {
    // console.log(req.body);
    res.send(cartData);
});
// accept PUT request at URI: /cartItems
cartItems.put("/cartItems/:id", (req, res) => {
    
    res.send("Updating a food for a specific id: " + req.params.id);
});
// accept DELETE request at URI: /cartItems
cartItems.delete("/cartItems/:id", (req, res) => {
   
    res.send("Deleting a food for a specific id: " + req.params.id);
});


module.exports = cartItems;
    
    // students.get("/cartItems/me", (req, res) => {
    //     console.log(req.body);
    //     res.send("Getting my foods...");
    // });
    //If a request was made to "/users/10", the code below would log the number 10 to the console.
    // array.get("/cart-items/:id", (req, res) => {
    //     console.log(req.params.id); // <-- params for the URL
    //     res.send("Got for a specific id: " + req.params.id);
    // });
    // accept POST request at URI: /cart-items
  