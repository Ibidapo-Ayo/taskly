import { Todo } from "@/types/types"

export const generateDate = () => {
    const date = new Date()
    const options = { month: "short", day: "numeric" }
    const formattedDate = date.toLocaleDateString("en-US", options).replace(",", "")
    return formattedDate
}

export const calculateCompletedTaskPercentage = (data: Todo[]) => {
    const totalTasks = data.length;
    const completedTasks = data.filter((todo) => todo.completed)
    const result = (completedTasks.length * 100) / (totalTasks * 100)
    return result
}