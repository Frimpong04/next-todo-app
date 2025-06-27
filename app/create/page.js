"use client"

import { useState } from 'react';

// styles
import classes from './page.module.css';
import { useRouter } from 'next/navigation';

async function createTodo (todo) {
    const res = await fetch("http://localhost:8800/todos", {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })

    const data = await res.json()
    return data
}

export default function CreateTodo() {
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
   const [date, setDate] = useState("");
   const [priority, setPriority] = useState("");

   const router = useRouter()
  
    
   async function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            title: title,
            description: desc,
            priority: priority,
            date: date
        }
        console.log(newTodo);

       createTodo(newTodo);

        setTitle("");
        setDesc("");
        setPriority("");
        setDate("");

        router.push("/todos")
        
   }
    return (
        <main className={classes.form_container}>
           <form onSubmit={handleSubmit}>
                <h2>Create a new Todo Item</h2>
                <label>
                    <span>Title</span>
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    <span>Description</span>
                    <textarea 
                        name="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </label>

                <label>
                    <span>Priority</span>
                    <select 
                        name="priority" 
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="">Select a priority level</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>

                <label>
                    <span>Due date</span>
                    <input 
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <button>Add Todo</button>
           </form>
        </main>
    )
}