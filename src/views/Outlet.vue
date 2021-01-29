<template>
  <section>
    <h1>Här är Outlet</h1>
      <Outlet v-for="book in books" :key='book.id' :book="book" v-show="book.sale === true"/>
  </section>
</template>

<script>
import Outlet from './../components/outlet/OutletSale'

export default {
<<<<<<< HEAD
    component: {
      OutletSale
    },
    props: { 
      allBooks: Array 
    },
=======
  props: { 
    books: Array
  }, 
  components: {
    Outlet
  },
  component: {
    OutletSale,
  }
  
>>>>>>> dev
}
</script>

<style>
</style>