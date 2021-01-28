<template>
  <section>
      <AllBooks @allBooks="booksAll" />
      <Book v-for="book in allBooks" :key='book.id' :allBooks="book"/>
  </section>
</template>

<script>
import AllBooks from './../components/books/AllBooks'
import Book from '../components/books/Book' 

export default {
  props: { 
    allBooks: Array 
  }, 
  components: {
    AllBooks, Book
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