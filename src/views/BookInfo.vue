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
 props: {
     books: Object
 },
 computed: {
    book(){ 
        return this.books.filter( b => b.id == this.$route.params.id )[0]
    }
 }
}
</script>

<style>

</style>