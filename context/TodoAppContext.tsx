import { data } from "@/data/todo"
import { Todo } from "@/types/types"
import { createContext, useState } from "react"

type TasklyProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TasklyContext = createContext<TasklyProps | null>(null)

const TasklyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id))

    return (
        <TasklyContext.Provider value={{ todos, setTodos }}>{children}</TasklyContext.Provider>
    )
}

export default TasklyContextProvider