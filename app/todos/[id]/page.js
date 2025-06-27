import Link from "next/link";

// styles
import classes from "./page.module.css";


export default async function todoDetail({ params }) {

    const {id} =  params

    const res = await fetch(`http://localhost:8800/todos/${id}`);
    const todoItem = await res.json();
    console.log(todoItem)

    return (
        <main className={classes.detail_container}>
           
            <h2>{todoItem.title}</h2>
            <div className={classes.detail_items}>
                <p>{todoItem.title}</p>
                <p>Task description: {todoItem.description}</p>
                <p> Due Date: {todoItem.date}</p>
                <p>Priority Level: {todoItem.priority}</p>
            </div>  
        </main>
    )
}