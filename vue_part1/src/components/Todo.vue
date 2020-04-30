<template>
  <div class="container todo">
    <div class="todo__filters">
      <button @click="changeFilter('all')" class="todo__filter" :class="{ 'todo__filter--active': filter === 'all' }">
        All ({{ allConut }})
      </button>
      <button @click="changeFilter('todo')" class="todo__filter" :class="{ 'todo__filter--active': filter === 'todo' }">
        Todo ({{ todoCount }})
      </button>
      <button @click="changeFilter('done')" class="todo__filter" :class="{ 'todo__filter--active': filter === 'done' }">
        Done ({{ doneCount }})
      </button>
    </div>
    <div class="todo__global-actions">
      <!-- <div v-if="showAllCompltebtn" @click="updateAllComplete" class="todo__global-action todo__global-action--check">
        <md-button class="md-icon-button">
          <md-icon>done_all</md-icon>
        </md-button>
        <span>전체 완료하기</span>
      </div> -->
      <div v-if="showAllRemoveBtn" @click="deleteAllCompleted" class="todo__global-action todo__global-action--delete">
        <md-button class="md-icon-button">
          <md-icon> delete_forever</md-icon>
        </md-button>
        <span>완료목록 삭제하기</span>
      </div>
    </div>
    <todo-input />
    <div class="todo__items">
      <todo-item v-for="todo in filterTodo" :key="todo.id" :todo="todo" />
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
    allConut() {
      return this.$store.getters.getTodos.length;
    },
    todoCount() {
      return this.$store.getters.getTodos.filter(todo => !todo.completed).length;
    },
    doneCount() {
      return this.allConut - this.todoCount;
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
