const express = require('express')
const app = express();
const cors = require('cors')
const pool = require('./DB/db')

app.use(express.json())
app.use(cors())

//connection checking
app.get('/', (req,res) =>  {
    res.json("Successfully Connect")
})

// creating a todos
app.post('/todo', async(req,res) =>  {
    try {
        const {description} = req.body;

        const creatingTodos = await pool.query('insert into todo(description) values ($1) returning *', [description])

        res.json(creatingTodos.rows[0])

    } catch (error) {
        res.json("error")
        console.log(error)
    }
})

// getting all todos
app.get('/todo', async(req,res) =>  {
    try {
        
        const allTodos =await pool.query('select * from todo')

        res.json(allTodos.rows)

    } catch (error) {
        console.log(error)
    }
})

// get a single todos
app.get('/todo/:id', async(req,res) =>  {
   try {
       const { id } = req.params
        const todos = await pool.query('select description from todo where todos_id = ($1)',[id])
        res.json(todos.rows[0])
   } catch (error) {
       console.log(error)
   }
})

// updating a todos
app.put('/todo/:id', async(req,res) =>  {
    try {
    const {id} = req.params
    const {description} = req.body
    
    const  updateTodo = await pool.query('update todo set description = $1 where todos_id = $2',[description,id])

    res.json("Todos was updated")
    
    
   } catch (error) {
       console.log(error)
   }
}) 

// deleting a todos
app.delete('/todo/:id', async(req,res) =>  {
    try {
        const {id} = req.params

        const deleteTodos = await pool.query('delete from todo where todos_id =$1',[id])
        res.json("todos was deleted succesfully")
   } catch (error) {
       console.log(error)
   }
})











app.listen(3500, () => {
    console.log("Server is listening at port 3500")
})