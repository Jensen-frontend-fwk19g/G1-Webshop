<template>
  <div>
    <h2>Här är rea</h2>
    <h2>{{ book.Title }}</h2>
    <h3>{{ book.Price }}</h3>
    <h3>{{ book.Description }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    book: Object
  },
};
</script>

<style>
</style>