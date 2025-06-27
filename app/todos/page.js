import Link from "next/link";

// styles
import classes from "./page.module.css";
import DeleteButton from "../components/button";


export default async function Todos() {
    // const items = getTodos("http://localhost:8800/todos");
    const res =  await fetch("http://localhost:8800/todos", {
        next: {
            revalidate: 0
        }
    });
    const todoItems = await res.json()

    console.log(todoItems)
  
    return (
        <main className={classes.main}>
            <h2>All Tasks Page</h2>
            <div className={classes.todo_items}>
                {todoItems.map(todo => {
                    let priorityClass = classes.priority;
                    if(todo.priority === "low") {
                        priorityClass = `${classes.priority} ${classes.low}`
                    }
                    if(todo.priority === "medium") {
                        priorityClass = `${classes.priority} ${classes.medium}`
                    }
                    if(todo.priority === "high") {
                        priorityClass = `${classes.priority} ${classes.high}`
                    }
                    return (
                    <div key={todo.id} className={classes.todo_item}>
                        <h3>{todo.title}</h3>
                        <div className={classes.date_priority}>
                            <p>{todo.date}</p>
                            <p className={priorityClass}>{todo.priority} priority</p>
                        </div>
                        <div className={classes.btn_container}>
                            <Link href={`/todos/${todo.id}`}>View Details</Link>
                            <DeleteButton id={todo.id}/>
                        </div>
                        
                    </div>
                )})}
            </div>
        </main>
    )
}