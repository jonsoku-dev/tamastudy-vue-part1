<template>
  <div class="container todo">
    <todo-filter v-on:change-filter="changeFilter" :filter="filter" />
    <todo-input />
    <div class="todo__items">
      <todo-item v-for="todo in filterTodo" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoFilter from '../components/TodoFilter';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

export default {
  name: 'todo',
  components: {
    TodoFilter,
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      filter: 'all',
    };
  },
  computed: {
    ...mapGetters(['userData']),
    filterTodo() {
      const todos = this.$store.getters.getTodos;
      switch (this.filter) {
        case 'all':
          return todos;
        case 'todo':
          return todos.filter((todo) => !todo.completed);
        case 'done':
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
    },
  },
  methods: {
    ...mapActions(['bindTodosRef', 'updateAllComplete']),
    changeFilter(filter) {
      this.filter = filter;
    },
  },
  created() {
    if (!this.userData.isLoggedIn) {
      this.$router.push('/');
    }
    this.bindTodosRef();
  },
};
</script>
