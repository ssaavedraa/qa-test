<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
const emit = defineEmits<(e: 'add-task', text: string) => void>();
function submitTask() {
  if (input.value.trim()) {
    emit('add-task', input.value.trim());
    input.value = '';
  }
}
</script>

<template>
  <form @submit.prevent="submitTask">
    <input v-model="input" type="text" placeholder="Add a new task" />
    <button type="submit">Add</button>
  </form>
</template>

<style src="./TaskInput.style.css" scoped></style> 