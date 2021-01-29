<template>
  <div>
      <h2>info om {{ books.Title }}</h2>
        <h2>{{book.Title}}</h2>
        <h3>{{books.Price}}</h3>
        <h3>{{bookInfo.Description}}</h3>
  </div>
</template>

<script>
export default {
 name: 'Book',
 props: {
     books: Array
 }
}
</script>

<style>

</style>