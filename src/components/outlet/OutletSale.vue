<template>
  <div class="books">  
    <h2>{{book.Title}}</h2>
    <h3>{{book.Price}}</h3>
    <img :src="'/img/'+book.Img" alt="bild">  
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
    border: 1px solid #ccc;
    background-color: white;
    box-shadow: 0 0 16px gray;
    float: left;
    width: 240px;
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
