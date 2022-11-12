const db = require('./models');

const controller = {};

//middlerware functions that will be stored in the controller object
controller.getToDo = (req, res, next) => {
    console.log('You made it to your get middleware!')
    const string = 'SELECT * FROM public.todo';
    
    db.query(string)
    .then(todos => {
        console.log("Our todos:", todos.rows)
        res.locals.todos = todos.rows;
        return next();
    })
    .catch(err => {
        console.log("You didn't receive your querry from the database")
        next(err)
    });
    
}

module.exports = controller;