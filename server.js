const express = require ('express');    
const app = express ();   //objct of our app
app.use(express.json());


let shoppingList = [

    {id:1,
        item:"jean",
        size:20,},


        {id:2,
            item:"top",
            size:20,},
]

app.get("/list",(req,res)=>{
    res.json (shoppingList);
});


// how i add stuff here
//want to grap data sent
//add data to the list 


app.post ("/list", (req,res)=>{

const newlist = req.body;
shoppingList.push(newlist);
res.json (shoppingList);


});

app.delete ("/list/:id", (req, res) =>{

    const id = req.params.id;
    for (let i = 0; i < shoppingList.length; i++){        
        if (shoppingList[i].id == id ) {
shoppingList.splice (i, 1)
        }
    }
    res.json (shoppingList);
    
    })
    
    




app.listen(3001, () => {
    console.log('Server listening at port 3001');   //port for my server to be running on 

});




// Activity - Practice Set


// Trainees are required to create a basic File Manager and a REST API for managing a shopping list. They are required to build a 
// Node.js application that serves as both a basic File Manager and a REST API for managing a shopping list. This project will leverage Node.js' file system capabilities to store shopping list data in JSON format and expose CRUD operations via HTTP endpoints.
// Requirements:
// File Manager:
// Create a new directory.
// Create a JSON file within the directory.
// Read and parse the JSON file.
// Update the JSON file with new data.
// Shopping List API:
// Implement CRUD operations (GET, POST, PUT/PATCH, DELETE) using the built-in http module.
// Manage endpoints for /shopping-list to handle shopping list items.
// Handle JSON data exchange for storing and retrieving shopping list items.
// Implement basic error handling and validation.
// Testing:
// Thoroughly test the combined application to ensure all features (file management and API endpoints) function correctly.
// Use tools like Postman to test API endpoints for CRUD operations on the shopping list.