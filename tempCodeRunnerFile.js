// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('myWebsite');

// Create a new document in the collection.
db.getCollection('projects').insertOne({
    "name": "MOBLIMA",
    "description": "School project on Object Oriented Programming to develop an application. MOBLIMA is a centralised application for booking of movie tickets, listing of movies and sale reporting for different Cineplexes.",
    "date": "Nov 2022"
});
