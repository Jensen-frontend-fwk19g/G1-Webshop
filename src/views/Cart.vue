<template>
  <div>
      <h2>This is cart</h2>
       <CartItems v-for="book in cartItems" :key='book.id' :book="book" />
  </div>
</template>

<script>
import CartItems from './../components/cartpage/CartItem'
export default {
  name: "Cart",
  components: {
  CartItems
  },
computed: {
    cartItems() {
      return this.$store.state.cartItems;
    }
 }
}

</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
}

h2 {
  color: #30251f;
}
</style>
