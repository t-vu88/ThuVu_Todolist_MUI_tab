
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';

function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const gridRef = useRef();

  const deleteTodo = ()=> {
    const itemToRemove = gridRef.current.getSelectedNodes()[0].id
    if (gridRef.current.getSelectedNodes ().length >0){

    setTodos(todos.filter((todo,index) => index != itemToRemove))
    }
    else{
      alert("Select row first");
    }
  };
  const columns = [
    { headerName: "Date", field: "date", sortable:true, filter:true, floatingFilter:true },
    { headerName: "Description", field: "description", sortable:true, filter:true, floatingFilter:true  },
    { headerName: "Priority", field: "priority", sortable:true, filter : true, floatingFilter:true,
      cellStyle: params => params.value ==="high" ? {color:"red"} : {color:"black"}
    }
  ]

  return (
    <div className="App">
      <div className ="input-container">
        <TextField
          label="Description"
          variant = "standard"
          name = "description" value = {todo.description}
          onChange={inputChanged}
        />
        <TextField
          label="Date"
          variant = "standard"
          name = "date" value = {todo.date}
          onChange={inputChanged}
        />
        <TextField
          label="Priority"
          variant = "standard"
          name = "priority" value = {todo.priority}
          onChange={inputChanged}
        />
        <Button onClick={addTodo} variant ="contained">Add</Button>
        <Button onClick ={deleteTodo} variant = "contained">Delete</Button>
      </div>
      <div className="ag-theme-material" style={{ width: "80%", height: "700px", margin: "auto" }}>
        <AgGridReact
          ref ={gridRef}
          onGridReady={params => gridRef.current = params.api}
          rowSelection='single'
          columnDefs={columns}
          rowData={todos}
          animateRows = {true}
        >
        </AgGridReact>

      </div>
    </div>
  )
}

export default Todolist;