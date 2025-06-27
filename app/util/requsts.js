export async function createTodo(url, newTodo) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    if(!res.ok) {
        throw new Error("Could not post data")
    }

    const data = await res.json()

    return data
}

export async function getTodos(url) {
    const res = await fetch(url, {
        next: {
            revalidate: 0
        }
    });

    if(!res.ok) {
        throw new Error("Could not fetch todos");
    }

    const todos = await res.json()
    return todos
}

export async function getTodo(url, id) {
    const newUrl = `${url}/${id}`
    const res = await fetch(newUrl, {
        next: {
            revalidate: 0
        }
    });

    if(!res.ok) {
        throw new Error("Could not fetch todo");
    }

    const todo = await res.json();
    return todo

};

export default async function deleteTodo(url, id) {
    const newUrl = `${url}/${id}`;
    const res = await fetch(newUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }); 

    if (!res.ok) {
        throw new Error("Could not delete resource")
    }

    const data = await res.json()
}