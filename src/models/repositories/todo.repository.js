const Todo = require ("../todo.model");

const getToDos = async (userId) => {
    const todos = await Todo.find({
        userId: userId
    }).select("title completed")
    return todos;
}

const findToDo = async(todoId, userId) => {
    return await Todo.find({
        _id: todoId,
        userId: userId
    }).select("title completed -_id")
}

const createToDo = async (title, userId) => {
    const newToDo =  new Todo({
        title: title,
        userId: userId
    });

    await newToDo.save();
}

const deleteToDo = async (todoId, userId) => {
    return await Todo.deleteOne({_id: todoId, userId: userId})
}

const updateToDo = async (todoId, userId, payload) => {
    const todo = await Todo.findOne({
        _id:todoId,
        userId: userId
    })
    if(todo){
        Object.entries(payload).forEach(([key, value]) => {
            todo[key] = value;
        })
        await todo.save();
    }
    return todo;
}

    // {
    //     "title": "nuevo",
    //     "completed": false
    // }

  //[[completed, false],[title, "nuevo"]]

//todo.title = "nuevo"

//todo[title]  = "nuevo"


module.exports = {
    getToDos,
    findToDo,
    createToDo,
    deleteToDo,
    updateToDo
}