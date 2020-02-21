import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};
console.log(storage.fetch());

export default new Vuex.Store({
  state: {
    headerText: 'TodoList!',
    todoItems: storage.fetch(),
  },
  // state값을 접근하는 속성이자 computed() 처럼 미리 연산된 값을 접근하는 속성
  getters: {
    completedNum(state) {
      let num = 0;
      const ddd = state.todoItems;
      ddd.forEach((item) => {
        if (item.completed === false) {
          num++;
        }
      })
      return num;
    },
  },
  // 값을 변경하는 동기적 로직 처리 (commit)
  mutations: {
    addOneItem(state, payload) {
      const obj = { completed: false, edit: false, text: payload.newTodoItem, date: payload.time };
      localStorage.setItem(payload.newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    // editOneItem(state, payload) {
    //   payload.todoItem.edit = !payload.todoItem.edit;
    //   payload.todoItem.text = payload.editText;
    //   localStorage.setItem(payload.todoItem.text, JSON.stringify(payload.todoItem));
    // },
    removeOneItem(state, payload) {
      state.todoItems.splice(payload.index, 1);
      localStorage.removeItem(payload.todoItem.text);
    },
    toggleOneItem(state, payload) {
      payload.todoItem.completed = !payload.todoItem.completed;
      // localStorage.removeItem(payload.todoItem.text);
      localStorage.setItem(payload.todoItem.text, JSON.stringify(payload.todoItem));
    },
  },
  // 비동기 로직 처리 (dispatch)
  actions: {
    
  },
});
