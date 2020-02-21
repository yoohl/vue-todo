<template>
  <div>
    <div>
      <ul class="items">
        <li>
          <div
            v-for="(todoItem, index) in item"
            v-bind:key="index"
            v-bind:class="{ complete: todoItem.completed, edit: todoItem.edit }">
            
            <span class="num">{{ index+1 }}</span>
            <input
              type="checkbox"
              :checked="todoItem.completed"
              v-on:click="toggleComplete(todoItem, index);"
            />
            <span class="text">{{ todoItem.text }}</span>
            <span class="edit_input">
              <input 
                v-model="editText"
                type="text" 
              />
            </span>
            <!-- <span 
              class="btn_edit" 
              v-on:click="editTodo(todoItem, index);"
            >편집</span> -->
            <span 
              class="btn_remove" 
              v-on:click="removeTodo(todoItem, index);"
            >삭제</span>
            <span class="due_date"> {{ todoItem.date }} </span>
          </div>
        </li>
      </ul>
    </div>

  </div>
  
</template>

<script>
/* eslint-disable */
export default {
  props: ['propsdata'],
  data() {
    return {
      todayDate: this.$moment(Date.now()).format('YYYYMMDD'),
      editText: ''
    }
  },
  computed: {
    item() {
      if (this.$route.name === 'home') {
        return this.$store.state.todoItems;
      } else if (this.$route.name === 'today') {
        return this.$store.state.todoItems.filter(li => li.date === this.todayDate);
      } else if (this.$route.name === 'week') {
        return this.$store.state.todoItems.filter(li => {
          return li.date > this.todayDate && li.date <= parseInt(this.todayDate)+7
        })
      }
    }
  },
  created() {
    console.log('create',this)
  },
  methods: {
    // editTodo(todoItem, index) {
    //   let editText = this.editText;
    //   this.$store.commit('editOneItem', {todoItem, index, editText}); // commit 을 통한 mutation 발생
    // },
    removeTodo(todoItem, index) {
      //this.$emit("removeItem", todoItem, index);
      this.$store.commit('removeOneItem', {todoItem, index});
    },
    toggleComplete(todoItem, index) {
      // this.$emit("toggleItem", todoItem, index)
      this.$store.commit('toggleOneItem', {todoItem, index});
    },
  }
}
</script>

<style scope>
.items li div{
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    border-radius: 3px;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    padding-right:70px;
}
.items li .num {
  color:#dd4b39;
  padding:10px 0;
  width: 30px;
}
li .text{
  width: 405px;
  padding:0 10px;
}
li .complete {
  text-decoration: line-through;
  color: #ddd;
}
li .edit .text{
  display: none;
}
.edit_input {
  display: none;
}
.edit .edit_input {
  display: block; 
  width: 405px;
  padding: 0 10px;
}
.edit_input input {
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  vertical-align: 2px;
  width: 100%;
  padding: 2px;
  margin: 2px;
}
.btn_edit, .btn_remove {
  color: #ddd;
  font-size: 12px;
  border: 1px solid #ddd;
  cursor: pointer;
  padding: 0 2px;
  margin:0 2px;
}
.due_date {
  position: absolute;
  top:10px;
  right:10px;
  color: #333;
  margin-left: 5px;
  font-size: 11px;
  padding: 1px 0;
  line-height: 21px;
  display: block;
}
.due_date:after { 
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 1px;
  left: 0;
  border-bottom: 1px solid #dd4b39;
}
</style>
