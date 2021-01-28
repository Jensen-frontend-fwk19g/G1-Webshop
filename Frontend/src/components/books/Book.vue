<template>
  <div>
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
     book: Object
 }
}
</script>

<style>

</style>