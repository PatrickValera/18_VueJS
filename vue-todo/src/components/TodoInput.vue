<script>
export default {
  data() {
    return {
      todo: "",
    };
  },

  methods: {
    addTodo() {
      this.$emit('addTodo', this.todo);
      this.todo = "";
    },
  },
};
</script>

<template>
  <div class="input-container">
    <input v-model="todo" type="text" placeholder="Enter Todo" />
    <input @click="addTodo()" type="submit" value="submit" />
  </div>
</template>

<style scoped>
.input-container{
  display: flex;
  justify-content: center;
}
</style>
