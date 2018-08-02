<template>
  <section>
    <ul>
      <li 
        class="shadow" 
        v-bind:class="{editShow: todoItem.editing}"
        v-for="(todoItem, index) in propsdata" 
        :key="todoItem.item">
        <i class="checkBtn fas fa-check" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)">
        </i>

        <span class="editInput">
          <input type="text" 
            v-model="editItem"
            v-on:keyup.enter="editTodo(todoItem, index)"
          >
          <span class="" v-on:click="editTodo(todoItem, index)">
            <i class="editBtn far fa-edit"></i>
          </span>
        </span>

        <span 
          class="item"
          v-bind:class="{textCompleted: todoItem.completed}" >
          {{ todoItem.item }}
        </span>

        <span class="btnWrap">
          <span class="editBtn" v-on:click="toggleEdit(todoItem, index)">
            <i class="editBtn fas fa-edit"></i>
          </span>
          <span class="removeBtn" v-on:click="removeTodo(index)">
            <i class="removeBtn fas fa-trash-alt"></i>
          </span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['propsdata'],
  data: function() {
    return {
      editItem: '' // 동적 데이터로 넣으려면 에러..
    }
  },
  methods: {
    editTodo: function(todoItem, index) {
      this.toggleEdit(todoItem, index);
      this.$emit('editTodoItem', index, this.editItem)
    },
    toggleEdit: function(todoItem, index) {
      todoItem.editing = !todoItem.editing;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    removeTodo: function(index) {
      this.$emit('removeTodoItem', index)
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.btnWrap{
  margin-left: auto;
}
.editBtn {
  color: #999;
}
.removeBtn {
  color: #999;
}
.editInput{display:none}
.editShow .editInput{display:block}
.editShow .item,
.editShow .btnWrap{display:none;}
</style>
