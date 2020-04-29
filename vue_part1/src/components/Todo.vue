<template>
  <div class="container todo">
    <input
      class="todo__input"
      type="text"
      placeholder="Todo를 입력해주세요. "
      v-model="content"
      @keypress="handleKeyPress"
    />
    <div class="todo__contents">
      <p class="todo__content" v-for="todo in todos" :key="todo.id" v-bind:class="{ done: todo.completed }">
        <span class="todo__text" @click="handleUpdate(todo.id)">{{ todo.content }}</span>
        <md-button class="md-icon-button" @click="handleDelete(todo.id)">
          <md-icon>clear</md-icon>
        </md-button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'todo',
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
    ...mapActions(['bindTodosRef', 'createTodo', 'deleteTodo', 'updateTodo']),
    handleKeyPress: function ($event) {
      if ($event.key === 'Enter') {
        if (this.content.length === 0) {
          return alert('텍스트를 입력해주세요. ');
        }
        this.createTodo(this.content);
        this.content = '';
      }
    },
    handleDelete: function (id) {
      this.deleteTodo(id);
    },
    handleUpdate: function (id) {
      this.updateTodo(id);
    },
  },
  created() {
    this.bindTodosRef();
  },
};
</script>
