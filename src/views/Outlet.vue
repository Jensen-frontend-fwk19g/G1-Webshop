<template>
  <section>
    <h1>..Everything in outlet..</h1>
    <div><OutletSale
      v-for="book in books"
      :key="book.id"
      :book="book"
      v-show="book.sale === true"
    /></div>
  </section>
</template>

<script>
import OutletSale from "./../components/outlet/OutletSale";
export default {
  props: {
    books: Array,
  },
  components: {
    OutletSale,
  },
};
</script>

<style>

</style>