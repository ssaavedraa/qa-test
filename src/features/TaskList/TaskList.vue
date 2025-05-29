<script setup lang="ts">
const props = defineProps<{ tasks: { id: number; text: string }[] }>()
const emit = defineEmits<(e: 'delete-task', id: number) => void>()
</script>

<template>
  <ul class="task-list">
    <li v-for="task in tasks" :key="task.id" class="task-item">
      <span>{{ task.text }}</span>
      <button @click="emit('delete-task', task.id)">Delete</button>
    </li>
  </ul>
</template>

<style src="./TaskList.style.css" scoped></style>