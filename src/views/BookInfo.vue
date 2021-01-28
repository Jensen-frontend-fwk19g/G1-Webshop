<template>
  <div>
    <h2>boken du valt</h2>
    <Book v-for="book in allBooks" :key='book.id' :allBooks="book"/>
  </div>
</template>

<script>
import Book from '../components/books/Book' 
export default {
 components: {
    Book
  },
  props: {
    allBooks: Array
  }
}
</script>

<style>

</style>