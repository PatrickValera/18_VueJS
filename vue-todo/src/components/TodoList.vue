// SCRIPT =========================================
<script setup>
import Todo from "@/components/Todo.vue";
import TodoInput from "@/components/TodoInput.vue";
import Header from "@/components/Header.vue";
</script>

<script>
export default {
  data() {
    return {
      todos: {
        1: { id: 1, name: "sweep" },
        2: { id: 2, name: "clean" },
      },
      todo: "",
      count: 3,
    };
  },

  methods: {
    handleAdd(todo) {
      this.todos[this.count] = {
        id: this.count,
        name: todo,
      };
      this.count++;
      console.log(this.todos);
      this.todo = "";
    },
    handleDelete(id) {
      console.log(this.todos[id]);
      delete this.todos[id];
      console.log(this.todos);
    },
    handleToggle(id) {
      this.todos[id].done = !this.todos[id].done;
    },
    handleUpdate(newTodo,id){
      this.todos[id].name=newTodo
    }
  },

  mounted() {
    // console.log(this.todos);
    // data can be mutated as well
  },
};
</script>

// TEMPLATES =========================================
<template>
  <Header />
  <TodoInput @addTodo="handleAdd" />
  <ul class="todos-container">
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :name="todo.name"
      :id="todo.id"
      :done="todo.done"
      @delete="handleDelete"
      @toggle="handleToggle"
      @updateTodo="handleUpdate"
    />
  </ul>
</template>

// STYLES =========================================
<style scoped>
.todos-container {
  /* border: 1px solid green; */
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
}
</style>
