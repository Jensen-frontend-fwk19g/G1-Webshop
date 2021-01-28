<template>
  <section>
      <h1>This is bookstore</h1>
      <Books @allBooks="allBooks"/>
      <Cart :cartItem='cart' />
      <aside class="orderCart">
        <img src="./../assets/bag.png" alt="bag" />
        <aside class="cartItems">
          <p></p>
        </aside>
      </aside>
  </section>
</template>

<script>
import Books from './../components/Books'
import Cart from './Cart'
export default {
  props: { allBooks: Array }, 
  components: {
    Books,
    Cart
  },
}
</script>

<style>
</style>