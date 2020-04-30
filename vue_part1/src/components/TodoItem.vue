<template>
  <div class="todo__item">
    <md-button v-if="!!!todo.completed" class="md-icon-button" @click="handleUpdateComplete(todo)">
      <md-icon>check_circle_outline</md-icon>
    </md-button>
    <md-button v-else class="md-icon-button" @click="handleUpdateComplete(todo)">
      <md-icon>check_circle</md-icon>
    </md-button>

    <div v-if="editMode" class="todo__edit">
      <input
        type="text"
        ref="contentInput"
        :value="editedContent"
        @input="editedContent = $event.target.value"
        @keypress.enter="handleUpdateContent(todo)"
        @keydown.esc="offEditMode"
      />
    </div>

    <div v-else class="todo__content" @click="onEditMode">
      <span class="todo__text">{{ todo.content }}</span>
      <md-button class="md-icon-button" @click="handleDelete(todo)">
        <md-icon>clear</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      editMode: false,
      editedContent: '',
    };
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateContent', 'updateComplete']),
    onEditMode: function () {
      this.editMode = true;
      this.editedContent = this.todo.content;
      this.$nextTick(() => {
        this.$refs.contentInput.focus();
      });
    },
    offEditMode: function () {
      this.editMode = false;
    },
    handleDelete: function () {
      this.deleteTodo(this.todo);
    },
    handleUpdateContent: function () {
      this.updateContent({
        ...this.todo,
        id: this.todo.id,
        content: this.editedContent,
      });
      this.editMode = false;
    },
    handleUpdateComplete: function () {
      this.updateComplete(this.todo);
    },
  },
};
// v-bind:class="{ done: todo.completed }"
</script>
