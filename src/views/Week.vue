<template>
  <div class="about">
    <h3>다음 7일</h3>
    <TodoList propsdata="week" />
    <TodoInput />

  </div>
</template>

<script>
// @ is an alias to /src
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'today',
  components: {
    TodoInput,
    TodoList,
  },
  method: {

  },
};
</script>
<style>
h3{
  font-size:20px;
  font-weight: normal;
  padding-bottom:10px
}
</style>
