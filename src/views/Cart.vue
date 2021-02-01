<template>
  <div>
    <h2>This is your basket</h2>
    <CartItem v-for="book in cart" :key='book.id' :book="book" />
  </div>
</template>

<script>
import CartItem from '../components/cartpage/CartItem'
export default {
  props: {
    cartItems: Array
  },
  components: {
    CartItem
  },
  data() {
    return {
        cart:[
          {
              "id": 9,
              "Title": "Gone with the Wind",
              "Price": 400,
              "Type": "Hard cover"
          },
          {
              "id": 1,
              "Title": "Harry Potter",
              "Price": 250,
              "Type": "Pocket"
          },
          {
              "id": 6,
              "Title": "Lord of the Rings",
              "Price": 350,
              "Type": "Hard cover"
          }
      ]
    }
  }
}
</script>

<style>

h2 {
  color: #30251f
}

</style>