// SCRIPT =========================================
<script>
export default {
  props: {
    name: String,
    id: Number,
    done: Boolean,
  },
  data() {
    return {
      editEnabled: false,
      newTodo: this.name,
      classVisible:""
    };
  },

  methods: {
    deleteTodo() {
      this.$emit("delete", this.id);
    },
    updateTodo() {
      this.$emit("updateTodo", this.newTodo, this.id);
      this.editEnabled=false
    },
    toggle() {
      this.$emit("toggle", this.id);
    },
  },

  created(){
    this.classVisible='card-show'
  }
};
</script>

// TEMPLATES =========================================
<template>
  <li :class="[done && 'todo-done', 'todo-container']">
    <div :class="['card',classVisible]">
      <div class="card-text">
        <span v-if="editEnabled">
          <input v-model="newTodo" type="text" />
        </span>
        <span v-else @click="toggle">
          {{ name }}
        </span>
      </div>

      <div class="card-actions">
        <button @click="deleteTodo">X</button>
        <button
          v-if="!editEnabled"
          @click="this.editEnabled = !this.editEnabled"
        >
          Edit
        </button>
        <button v-else @click="updateTodo">
          Save
        </button>
      </div>
    </div>
  </li>
</template>

// STYLES =========================================
<style scoped>
.todo-done {
  text-decoration: line-through;
}
.todo-container {
  padding: 1rem;
  width: 33.32%;
  min-height: 200px;
}
.card {
  transition:all 1s ease-in-out;
  opacity: 0;
  text-align: center;
  padding: 1rem;
  border: 1px solid #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card-text {
  flex-grow: 1;
}
.card-actions {
  color:white;
}
.card-show {
  opacity: 1;
}
</style>
