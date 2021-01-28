<template>
  <section>
    <h1>Här är alla Böcker</h1>
      <AllBooks v-for="book in books" :key='book.id' :book="book" />
  </section>
</template>

<script>
import AllBooks from './../components/books/AllBooks'

export default {
  props: { 
    books: Array
  }, 
  components: {
    AllBooks,
  },
}
</script>

<style>

</style>