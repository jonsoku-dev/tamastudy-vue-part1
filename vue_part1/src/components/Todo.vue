<template>
  <div class="container todo">
    <todo-input />
    <div class="todo__items">
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default {
  name: 'todo',
  components: {
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      content: '',
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  methods: {
    ...mapActions(['bindTodosRef']),
  },
  created() {
    this.bindTodosRef();
  },
};
</script>
