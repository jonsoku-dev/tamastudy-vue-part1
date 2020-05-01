<template>
  <div>
    <div class="todo__filters">
      <button @click="changeFilter('all')" class="todo__filter" :class="{ 'todo__filter--active': filter === 'all' }">
        All ({{ allCount }})
      </button>
      <button @click="changeFilter('todo')" class="todo__filter" :class="{ 'todo__filter--active': filter === 'todo' }">
        Todo ({{ todoCount }})
      </button>
      <button @click="changeFilter('done')" class="todo__filter" :class="{ 'todo__filter--active': filter === 'done' }">
        Done ({{ doneCount }})
      </button>
    </div>
    <div class="todo__global-actions">
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
import { mapGetters, mapActions } from 'vuex';
export default {
  props: {
    filter: String,
  },
  computed: {
    ...mapGetters(['getTodos']),
    allCount() {
      return this.getTodos.length;
    },
    todoCount() {
      return this.getTodos.filter((todo) => !todo.completed).length;
    },
    doneCount() {
      return this.allCount - this.todoCount;
    },
    showAllCompltebtn() {
      return this.todoCount > 0;
    },
    showAllRemoveBtn() {
      return this.doneCount > 0;
    },
  },
  methods: {
    ...mapActions(['deleteAllCompleted']),
    changeFilter(filter) {
      this.$emit('change-filter', filter);
    },
  },
};
</script>
