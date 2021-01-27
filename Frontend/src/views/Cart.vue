<template>
  <div>
      <h2>This is your cart</h2>
      <h4>in your cart</h4>
      <article v-for="(book,index) in cartItem" :key="index">
        <div class="options">
          <h3 class="item-title">{{ book.Title }}</h3>
          <h4 class="item-dots"></h4>
          <h6 class="item-price">{{ book.Price }}:-</h6>
        </div>
      </article>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cartItem: Array
  }
}
</script>

<style>

</style>