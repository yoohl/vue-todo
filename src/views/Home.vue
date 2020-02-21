<template>
  <div class="home">
    <h3>관리함</h3>
    <TodoList propsdata="all" />
    <TodoInput />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  data() {
    return {
      todoItems : [],
    }
  },
  methods: { 
  },
  created() {
  },
  components: {
    TodoInput,
    TodoList,   
  }
}
</script>
<style>
h3{
  font-size:20px;
  font-weight: normal;
  padding-bottom:10px
}
</style>
