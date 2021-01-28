<template>
  <section>
      <AllBooks @allBooks="allBooks"/>
  </section>
</template>

<script>
import AllBooks from './../components/books/AllBooks'
export default {
  props: { 
    allBooks: Array 
  }, 
  components: {
    AllBooks
  },
}
</script>

<style>
</style>