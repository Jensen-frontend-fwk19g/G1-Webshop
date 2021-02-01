import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      cartItems: [],
    }, 
    mutations: {
      add(state, item) {
        state.cartItems.push({
          id: item.id,
          Title: item.Title,
          Description: item.Description,
          Price: item.Price,
          Type: item.Type,
          Img: item.Img,
          sale: item.sale,
          quantity: 1
      })
  
    },
    updateItem(state, id) {
      state.cartItems.find(item => item.id == id).quantity++;
    },
  },
    actions: {
    addToCart(context, item) {
      let checkItem = context.state.cartItems.filter(check => check.id === item.id)

      if (checkItem.length > 0) {
          context.commit('updateItem', checkItem[0].id)
      } else {
          context.commit('add', item)
      }
    }
  }
})