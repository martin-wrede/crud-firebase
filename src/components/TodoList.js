import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import Todo from './Todo'; 


export default function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(()=>{
    const todoRef = firebase.database().ref("Todo");

    todoRef.on("value", (snapshot)=> {
      const todos = snapshot.val();
      const todoList = []; 
      for(let id in todos) {
        
      //  todoList.push({todos[id]})  // funktioniert auch so ...wegen 'delete' musss man die id hier das erweitern
        todoList.push({id, ...todos[id]})
      }
      setTodoList(todoList);
      console.log(todoList)
    } )


  },[])

  return (
    <div>
      <div>
        {todoList ? todoList.map((todo, index) =>
        <Todo todo={todo}  key={index} />
        )   :  "" }
        </div>
    </div>
  )
}