<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList 
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeOneItem"
      v-on:editTodoItem="editOneItem"
    ></TodoList>
    <TodoFooter
      v-on:clearTodoItem="clearItem"  
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(newItem) {
      const obj = {completed: false, editing: false, item: newItem};
      localStorage.setItem(newItem, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    removeOneItem(index) {
      localStorage.removeItem(this.todoItems[index].item);
      this.todoItems.splice(index, 1);
    },
    editOneItem(index, editItem) {
      const obj = {completed: false, editing: false, item: editItem};
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(editItem, JSON.stringify(obj))
      this.todoItems.splice(index,1, obj)
    },
    clearItem() {
      localStorage.clear();
      this.todoItems = []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 85%;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
