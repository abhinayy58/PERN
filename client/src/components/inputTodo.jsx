
import React, { Fragment, useState } from 'react'

const InputTodo = () => {

const [description, setdescription] = useState("")

const changeHandler = (event) =>{

    setdescription(event.target.value)
}
const submitHandler = async(e) => {
    e.preventDefault();
    try {
        
        const body = {description}

        const response = await fetch('/todo', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })

       window.location = '/'



    } catch (error) {
        console.log(error.message)
    }
}
  return (
      <Fragment>
    <h1 className='text-center mt-5'>PERN TODO LIST</h1>
    <form className='d-flex' onSubmit={submitHandler}>
   <input type="text" className='form-control'  value={description} onChange={changeHandler} />
   <button className='btn btn-success'>Add</button>
    </form>
    </Fragment>
  )
}

export default InputTodo;