import { ref } from 'vue'

export interface Task {
  id: number
  text: string
}

const tasks = ref<Task[]>([])

export function useTasks() {
  function addTask(text: string) {
    tasks.value.push({ id: tasks.value.length, text })
  }
  function removeTask(id: number) {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }
  return { tasks, addTask, removeTask }
}