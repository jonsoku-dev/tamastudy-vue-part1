<template>
  <div>
    <input
      type="text"
      placeholder="Todo를 입력해주세요. "
      v-model="content"
      @keypress="handleKeyPress"
    />
    <div>
      <p v-for="todo in todos" :key="todo.id">
        <span
          @click="handleUpdate(todo.id)"
          v-bind:class="{ done: todo.completed }"
          >{{ todo.content }}</span
        ><button @click="handleDelete(todo.id)">x</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "todo",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  methods: {
    ...mapActions(["createTodo", "deleteTodo", "updateTodo"]),
    handleKeyPress: function($event) {
      if ($event.key === "Enter") {
        this.createTodo(this.content);
        this.content = "";
      }
    },
    handleDelete: function(id) {
      this.deleteTodo(id);
    },
    handleUpdate: function(id) {
      this.updateTodo(id);
    },
  },
};
</script>

<style scoped>
.done {
  color: red;
  text-decoration: line-through;
}
</style>
