<template>
  <div>
      <h2>This is cart</h2>
       <CartItems v-for="item in cartItems" :key='item.id' :item="item" />
  </div>
</template>

<script>
import CartItems from './../components/cart/CartItems'
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
