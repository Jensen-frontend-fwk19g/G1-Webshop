<template>
  <div>
    <h1>Boken du valt</h1>
      <h2>info om {{ book.Title }}</h2>
        <h2>{{book.Title}}</h2>
        <h3>{{book.Price}}</h3>
        <h3>{{book.Description}}</h3>
  </div>
</template>

<script>
export default {
 name: 'Book',
 props: {
     allBooks: Array
 },
 computed: {
   book() {
     let result = this.allBooks.filter(book => book.id === this.$route.params.id)[0]
     return console.log(result)
   }
 }
}
</script>

<style>

</style>