<template>
  <section>
      <AllBooks @allBooks="booksAll"/>
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
  methods: {
    booksAll(books) {
      this.$emit('allBooks', books)
    }
  }
}
</script>

<style>
</style>