<template>
  <div>
    <h1>Boken du valt</h1>
      <h2>info om {{ allBooks.Title }}</h2>
        <h2>{{allBooks.Title}}</h2>
        <h3>{{allBooks.Price}}</h3>
        <h3>{{allBooks.Description}}</h3>
  </div>
</template>

<script>
export default {
 name: 'Book',
 props: {
     allBooks: Object
 },
 computed: {
   /*
   book() {
     let result = this.allBooks.filter(book => book.id === this.$route.params.id)[0]
     return console.log(result)
   }
   */
 }
}
</script>

<style>

</style>