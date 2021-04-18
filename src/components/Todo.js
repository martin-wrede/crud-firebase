import React from 'react';
import firebase from '../util/firebase';
import '../App.css';


export default function Todo({todo}){

    const deleteTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id); // todo.id kommt von todolist id
        todoRef.remove();

    }
    
    const completeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id); // todo.id kommt von todolist id
        todoRef.update({
            complete: !todo.complete,
        });
    };

    return( 
        <div>
            <i>date:</i>   {todo.dateTime}
            <h1  className={todo.complete ?   "complete" :""}>{todo.title}</h1>
            DESCRIPTION: <br />
            <h2>{todo.description}</h2>
            <button onClick={deleteTodo} >Delete</button>
            <button  onClick={completeTodo} >Complete</button>
         
        </div>
    )
}