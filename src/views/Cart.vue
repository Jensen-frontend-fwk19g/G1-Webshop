<template>
  <div>
      <h2>Your basket</h2>
      <CartItem v-for="book in cart" :key="book.id" :cart="cart" />
  </div>
</template>

<script>
import CartItem from './../components/cartpage/CartItem';
export default {
  props: {
    cart: Array
  },
  components: {
    CartItem
  }
}
</script>

<style>

</style>