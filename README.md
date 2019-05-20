Server.js
route - cartItems.js
package.json -- npm init
cartData.js -- array

    AFTER­HOURS EXPRESS LAB 1

(Note: This is Full-Time Express Lab Part 1 without the Angular front-end. The Angular front-end is added in Express Exercise 1.)

Task: Build a REST API with an Express server. Create a module that contains routes for your front-end to communicate with. Test the endpoints with Postman.

What does the application do?

    1. The REST API provides access to an array of shopping cart items.
    2. The API will now have routes for GET, POST, PUT, and DELETE which will allow our front-end to communicate with our server. Each route will be handling the following
    functionality:
        a. GET /cart‑items: returns a JSON array of all items
        b. POST /cart‑items: for now, log the body to the console. (later, this will add a new item to the list)
        c. PUT /cart‑items/_ID_: for now, log the _ID_ URL param and the body to the console. (later, this will replace an item in the list)
        d. DELETE /cart‑items/_ID_: for now, log the _ID_ URL param to the console. (later, this will delete an item from the list.)

Build Specifications:

    1. Use Express to create your server.
    2. Require the module that will contain the routes you have created.
    3. Start your server out with a hard-coded array of cart items, each including id, product, price, and quantity.
    4. Test your endpoints using Postman.

Bonus:
    1. Modify your POST endpoint to add an item to the array.
    2. Modify your DELETE endpoint to remove an item from the array, based on the ID.
    3. Modify your PUT endpoint to replace an item in the array, based on the ID.