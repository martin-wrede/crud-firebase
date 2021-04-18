import React, { useState } from 'react';
import firebase from '../util/firebase';

export default function Form() {
    const [title, setTitle] = useState('');
    const handleOnChange = (e) => {  
        setTitle(e.target.value);
    };
    /////////////////////////////////////////////////////
    const [description, setDescription] = useState('');
    const handleOnChange2 = (e) => {  
        setDescription(e.target.value);
    };
    let dateTime = new Date();
    let b = dateTime.getHours();
    let c = dateTime.getMinutes();
    let d = dateTime.getSeconds();
    dateTime  = dateTime.toJSON().slice(0, 10).split`-`.join`-` + "_"  + b + ":" +c + ":" + d;
    ////////////////////////////////////////////////////////

    const createTodo = () => {
        const todoRef= firebase.database().ref("Todo");
        const todo = {
            title,
            description,
            dateTime,
            complete: false,
        };

        todoRef.push(todo);
    };

    return(
        <div>
            <div>
            <input  type="text"   onChange={handleOnChange} value={title} 
            placeholder="Title"/>
          
            </div>
            <div>
             <input  type="text"   onChange={handleOnChange2} value={description} 
             placeholder="Description" />
            
            </div>
            <div>
            <button  onClick={createTodo}>save</button>
            </div>
         </div>

    )
}
