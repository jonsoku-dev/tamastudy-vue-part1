<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo';
export default {
  name: 'App',
  components: {
    Todo,
  },
};
</script>

<style>
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 768px;
    margin: 0 auto;
    height: inherit;
  }
}
</style>
