<template>
  <div>
    <div class="todo__nav">
      <router-link class tag="button" to="/">
        <span class="material-icons">home</span>
      </router-link>
    </div>
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
  </div>
</template>

<script>
export default {
  props: {
    filter: String,
  },
  computed: {
    allConut() {
      return this.$store.getters.getTodos.length;
    },
    todoCount() {
      return this.$store.getters.getTodos.filter(todo => !todo.completed).length;
    },
    doneCount() {
      return this.allConut - this.todoCount;
    },
  },
  methods: {
    changeFilter(filter) {
      this.$emit('change-filter', filter);
    },
  },
};
</script>
