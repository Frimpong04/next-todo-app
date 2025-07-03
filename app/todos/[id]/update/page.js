import UpdateForm from "@/app/components/form";
import classes from "./page.module.css";

async function getTodo(url) {
    const res = await fetch(url, {
        next: {
            revalidate: 0
        }
    })

    if(!res.ok) {
        throw new Error("Could not fetch resource");
    }

    const todo = await res.json()
    return todo;
}

export function generateMetaData({ params }) {
    return {
        title: params.title,
        description: params.decription
    }
}
export default async function UpdateTodo({ params }) {

    console.log(params.id);
    const url = `http://localhost:8800/todos/${params.id}`;
    const todo = await getTodo(url);
    console.log(todo);

    return (
        <div className={classes.update_container}>
            <h2>Update todo Page</h2>
            <UpdateForm todo={todo}/>
        </div>
    )
}