<template>
  <section>
    <h2>This is outlet</h2>
    <OutletSale v-for="book in allBooks" :key='book.id' :outletBook="book" />
  </section>
</template>

<script>
import OutletSale from "./../components/outlet/OutletSale";

export default {
  props: {
    allBooks: Array,
  },
  component: {
    OutletSale,
  }
  
}
</script>

<style>
</style>