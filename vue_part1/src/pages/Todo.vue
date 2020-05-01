<template>
  <div class="todo container">
    <todo-header :filter="filter" @change-filter="changeFilter" />
    <todo-input />
    <div class="todo__items">
      <todo-item v-for="todo in filterTodo" :key="todo.id" :todo="todo" />
    </div>

    <div class="todo__global-actions">
      <!-- <div v-if="showAllCompltebtn" @click="updateAllComplete" class="todo__global-action todo__global-action--check">
        <md-button class="md-icon-button">
          <md-icon>done_all</md-icon>
        </md-button>
        <span>전체 완료하기</span>
      </div>-->
      <div v-if="showAllRemoveBtn" @click="deleteAllCompleted" class="todo__global-action todo__global-action--delete">
        <md-button class="md-icon-button">
          <md-icon>delete_forever</md-icon>
        </md-button>
        <span>완료목록 삭제하기</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TodoHeader from '../components/TodoHeader';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

export default {
  name: 'todo',
  components: {
    TodoHeader,
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      filter: 'all',
    };
  },
  computed: {
    filterTodo() {
      const todos = this.$store.getters.getTodos;
      switch (this.filter) {
        case 'all':
          return todos;
        case 'todo':
          return todos.filter(todo => !todo.completed);
        case 'done':
          return todos.filter(todo => todo.completed);
        default:
          return todos;
      }
    },
    showAllCompltebtn() {
      return this.todoCount > 0;
    },
    showAllRemoveBtn() {
      return this.doneCount > 0;
    },
  },
  methods: {
    ...mapActions(['bindTodosRef', 'updateAllComplete', 'deleteAllCompleted']),
    changeFilter(filter) {
      this.filter = filter;
    },
  },
  created() {
    this.bindTodosRef();
  },
};
</script>
