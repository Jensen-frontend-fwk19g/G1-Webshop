<template>
  <div>
    <div class="books">
     <h2>{{item.Title}}</h2>
    <h3>{{item.Price}}</h3>
    <div style="display: flex; margin-left: 70px">
     <h3>Quantity: </h3> <h3>{{item.quantity}}</h3>
    </div>
    <img src="../../assets/hp.jpg" alt="hp">
    </div>
  </div>
</template>

<script>
export default {
 name: 'CartItems',
  props: {
        item: Object
    },
 computed: {
    cartItems() {
      return this.$store.state.cartItems;
    }
 }
}
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