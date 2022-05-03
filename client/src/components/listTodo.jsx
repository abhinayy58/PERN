import {useState, useEffect, Fragment} from 'react'
import EditTodo from './editTodo';
const ListTodo = () => {
  


    const [todos, setTodos] = useState([]);

    //delete todo function
  
    const deleteTodo = async id => {
      try {
        const deleteTodo = await fetch(`/todo/${id}`, {
          method: "DELETE"
        });
  
        setTodos(todos.filter(todo => todo.todos_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };
  
    const getTodos = async () => {
      try {
        const response = await fetch("/todo");
        const jsonData = await response.json();
  
        setTodos(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      getTodos();
    }, []);
  
    console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
            <tr key={todo.todos_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todos_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;




// {list.map(item => (
//     <p key={item.todos_id}>{item.description}</p>))}