<script setup lang="ts">
import TaskInput from './features/TaskInput/TaskInput.vue'
import { useTasks } from './features/TaskList/hooks/useTasks'
import TaskList from './features/TaskList/TaskList.vue'

const { tasks, addTask, removeTask } = useTasks()
</script>

<template>
  <main class="container">
    <h1>To-Do List</h1>
    <TaskInput @add-task="addTask" />
    <TaskList :tasks="tasks" @delete-task="removeTask" />
  </main>
</template>

<style src="./App.style.css" scoped></style>
