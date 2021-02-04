/*import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      cart: [],
    }, 
    mutations: {
      add(state, item) {
        state.cart.push({
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
      state.cart.find(item => item.id == id).quantity++;
    },
  },
    actions: {
      addToCart(context, item) {
        let checkItem = context.state.cart.filter(check => check.id === item.id)

        if (checkItem.length > 0) {
            context.commit('updateItem', checkItem[0].id)
        } else {
            context.commit('add', item)
        }
      }
  },
  /*getters: {
    cartLengthNr(state) {

    let total = 0;
      state.cart.forEach(item => {
          total += item.quantity;
      });
      return total;

    }
  }*/
