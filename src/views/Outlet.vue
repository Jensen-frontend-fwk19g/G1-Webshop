<template>
  <section>
      <h2>This is outlet</h2>
      <OutletSale v-for="book in allBooks" :key='book.id' :book="book" />
  </section>
</template>

<script>
import OutletSale from './../components/outlet/OutletSale'

export default {
    component: {
      OutletSale
    },
    props: { 
      allBooks: Array 
    },
}
</script>

<style>

</style>