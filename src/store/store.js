import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
		return arr;
	}
}

export const store = new Vuex.Store({
	state: {
		todoItems: storage.fetch()
	},
	mutations: {
		addOneItem(state, newItem) {
      const obj = {completed: false, editing: false, item: newItem};
      localStorage.setItem(newItem, JSON.stringify(obj));
      state.todoItems.push(obj)
		},
    removeOneItem(state, index) {
			localStorage.removeItem(state.todoItems[index].item);
      state.todoItems.splice(index, 1);
		},
		editOneItem(state, payload) {
			const obj = {completed: false, editing: false, item: payload.editItem};
      localStorage.removeItem(state.todoItems[payload.index].item);
      localStorage.setItem(payload.editItem, JSON.stringify(obj))
      state.todoItems.splice(payload.index, 1, obj)
		},
    toggleItem(state, payload) {
      state.todoItems[payload.index][payload.toggleName] = !state.todoItems[payload.index][payload.toggleName];
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
		clearTodoItem(state) {
			localStorage.clear();
			state.todoItems = []
    }
	}
});
