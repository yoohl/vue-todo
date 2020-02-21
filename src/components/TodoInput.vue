<template>
  <div>
    <a @click="handleWrite" class="action" v-if="!isWrite">
      <span class="icon icon_add">+</span>
      작업 추가
    </a>

    <div class="add_box" v-if="isWrite">
      <input
        class="input_text"
        type="text"
        placeholder="할 일을 입력하세요"
        v-model="newTodoItem"
        v-on:keyup.enter="addTodo"
      />
      <div class="btn_calendar">
        <datepicker 
          v-model="date" 
          name="duedate"
          :value="date"
          :format="customFormatter"
          placeholder="일정" 
          input-class="ip_calendar"
        ></datepicker>
      </div>
      <button class="btn_add" v-on:click="addTodo">작업추가</button>
      <a @click="handleWrite" class="btn_cancel">취소</a>
    </div>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  data: function() {
    return {
      newTodoItem: '',
      date: new Date(),
      isWrite : false,
    }
  },
  computed: {

  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        let newTodoItem = this.newTodoItem;
        let time = this.$moment(this.date).format('YYYYMMDD');
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit('addOneItem', {newTodoItem, time});
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    },
    customFormatter(date) {
      return this.$moment(date).format('MM/DD');
    },
    handleWrite: function() {
      console.log('sdf');
      this.isWrite = !this.isWrite;
    }
  },
  components: {     
  	Datepicker
  }
}
</script>

<style >
.add_box {
  position: relative;
  vertical-align: top;
  margin:20px 0
}
.add_box .input_text {
  border:1px solid #f3f3f3;
  box-sizing: border-box;
  width: 100%;
  padding: 11px 120px 10px 10px;
}
.add_box button {
  border:0;
  vertical-align: top;
}
.btn_calendar{
  position: absolute;
  top:2px;
  right:2px;
  cursor: pointer !important;
  width: 110px;
  height:33px;
}
.ip_calendar{
  border:0;
  box-sizing: border-box;
  width: 100%;
  cursor:pointer;
  border-left:1px solid #f3f3f3;
  padding: 10px 0 10px 10px;
}
.btn_add{
  display: block;
  float: left;
  font-weight: bold;
  font-size: 13px !important;
  line-height: 17px;
  text-decoration: none;
  padding: 6px 12px 7px 12px;
  position: relative;
  text-shadow: 0 1px 0 #fff;
  white-space: nowrap;
  background: linear-gradient(linear,0 40%,0 70%,from(#f3f3f3),to(#f1f1f1));
  border-radius: 3px !important;
  text-decoration: none !important;
  text-align: center;
  background-color: #db4c3f;
  color: #fff;
  text-shadow: none;
  margin-top:5px;
}
.btn_cancel{
  float: left;
  color: #555;
  font-size: 13px;
  padding: 6px;
  text-decoration: none;
  margin: 5px 0 0 5px;
}
a.action{
  cursor: pointer;
  padding: 1px;
  text-decoration: none;
  color: #808080;
  font-size: 14px;
  line-height:44px;
  }
a.action .icon_add {
    color: #dd4b39;
}
</style>
