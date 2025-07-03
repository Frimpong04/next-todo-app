"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

// styles
import classes from "./form.module.css";

async function updateTodo(url, data) {
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if(!res.ok) {
        throw new Error("Could not update todo")
    }

    return res.json();
}

export const metadata = {
    titlte: "update todo",
    description: "An update form to change or update todo items"
}

export default function UpdateForm({ todo }) {

   const [title, setTitle] = useState(todo.title);
   const [desc, setDesc] = useState(todo.description);
   const [date, setDate] = useState(todo.date);
   const [priority, setPriority] = useState(todo.priority);

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

        updateTodo(`http://localhost:8800/todos/${todo.id}`, newTodo);

        setTitle("");
        setDesc("");
        setPriority("");
        setDate("");

        router.push("/todos")
        
   }

    return (
        <main className={classes.form_container}>
            <form onSubmit={handleSubmit}>
                <h2>Update { todo.title }</h2>
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
                <button>update Todo</button>
           </form>
        </main>
        
    )
}