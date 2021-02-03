<template>
  <div class="books" @click="goToCart(book.id)">
    <h2>{{ book.Title }}</h2>
    <h3>{{ book.Price }}</h3>
    <img :src="book.Img" alt="bild"/>
  </div>
</template>

<script>
export default {
  name: 'OutletSale',
  props: {
    book: Object
  }
};
</script>

<style scoped>

.books {
    margin: 15px;
    padding: 1rem;
    border: 1px solid rgba(15, 15, 15, 0.329);
    background-color: #c9c9c750;
    box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
    width: 240px;
    float: left;
    color: #3d2f27;
}
img {
    width: 10px;
    height: 10px;
}
  
  
.books img {
    width: 200px;
    height: 160px;
  }
</style>