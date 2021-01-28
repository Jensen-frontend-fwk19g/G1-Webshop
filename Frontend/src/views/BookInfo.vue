<template>
  <div>
    <h2>boken du valt</h2>
    <Book v-for="book in AllBooks" :key='book.id' :book="book"/>
  </div>
</template>

<script>
import Book from '../components/books/Book' 
export default {
components: {
    Book
  },
  props: {
    AllBooks: Array
  }
}
</script>

<style>

</style>