<template>
  <section>
    <h1>Här är Outlet</h1>
      <OutletSale v-for="book in books" :key='book.id' :book="book" v-show="book.sale === true"/>
  </section>
</template>

<script>
import OutletSale from './../components/outlet/OutletSale'

export default {
  props: { 
    books: Array
  }, 
  components: {
    OutletSale
  }  
}
</script>

<style>
</style>