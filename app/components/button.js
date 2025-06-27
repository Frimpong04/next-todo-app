"use client"

import { useRouter } from "next/navigation";
// styles
import classes from "./button.module.css";


async function deleteTask(id) {
    const url="http://localhost:8800/todos"
    const deleteUrl = `${url}/${id}`
    const res = await fetch(deleteUrl, {
        method:"DELETE"})

    const data = await res.json();
    return data;
}

export default function DeleteButton({id}) {
    const router = useRouter()
    function handleDelete(id) {
        deleteTask(id);
        router.refresh();
    }
    return (
        <div className={classes.btn_container}>
            <button type="button" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}