import { createStore } from 'vuex'

export default createStore({
  state: {
    fruits: [
      {name: 'Apple', amount: 0},
      {name: 'Banana', amount: 0},
      {name: 'Pineapple', amount: 0},
      {name: 'Watermelon', amount:0},
    ]
  },
  mutations: {
    increase(state, index){
      state.fruits[index].amount ++
    },
    reboot(state){
      state.fruits.forEach(element => {
          element.amount = 0
      })
 }
  },
  actions: {
  },
  modules: {
  }
})
