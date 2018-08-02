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
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(newItem) {
      var obj = {completed: false, editing: false, item: newItem};
      localStorage.setItem(newItem, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    removeOneItem: function(index) {
      localStorage.removeItem(this.todoItems[index].item);
      this.todoItems.splice(index, 1);
    },
    editOneItem: function(index, editItem) {
      var obj = {completed: false, editing: false, item: editItem};
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(editItem, JSON.stringify(obj))
      this.todoItems.splice(index,1, obj)
    },
    clearItem: function() {
      localStorage.clear();
      this.todoItems = []
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
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
