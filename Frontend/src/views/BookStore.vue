<template>
  <section>
      <Books @allBooks="allBooks"/>
  </section>
</template>

<script>
import Books from './../components/books/Books'
export default {
  props: { allBooks: Array }, 
  components: {
    Books
  },
}
</script>

<style>

</style>