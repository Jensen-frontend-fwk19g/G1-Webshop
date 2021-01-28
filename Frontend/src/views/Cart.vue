<template>
  <div>
      <h2>This is your cart</h2>
      <h4>in your cart</h4>
      <CartItem v-for="(book,index) in cart" :key="index" :book="book" />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
export default {
  name: 'Cart',
  components: {
    CartItem
  },
  props: {
    cartItem: Array
  }
}
</script>

<style>

</style>