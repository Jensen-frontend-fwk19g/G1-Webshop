<template>
  <article>
    <h2>You have <span class="cart-lenght">{{ cartLenght }} </span>  in your basket</h2>
    <div class="cartItems">
      <section v-for="(book, index) in cart" :key="index" :book="book" >
        <div class="items">
          <p class="bookTitle">{{ book.Title }} <br>
          <span class="bookType"> ( {{ book.Type }} )</span>
          </p>
          <p class="bookPrice"> price: {{ book.Price }} </p>
          <button @click="removeItem(book)" :id="book.id" class="dltBtn">X</button>
        </div>
      </section>
    </div>

    <p class="totalPrice">total price: {{ totalPrice }}</p>
  </article>
</template>

<script>
import json from "../assets/products.json"
export default {
  props: {
    cartItem: Array
  },
  data() {
    return {
      items: true,
      totalCost: 0,
      cart: json.cart
    }
  },
  methods: {
    removeItem(item){
      let index= this.cart.indexOf(item);
      this.cart.splice(index, 1);
    }
  },
  computed: {
    cartLenght(){
      if(this.items){
        return this.cart.length;
      }else{
        return 0;
      }
    },
    totalPrice() {
      let totalCost = 0;
      this.cart.forEach( item => {
        totalCost += item.Price
      })
      return totalCost;
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
}
.cartItems {
  display: flex;
  flex-wrap: wrap;
}
.items {
  margin: 15px;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 0 16px gray;
  /*float: left;*/
  width: 150px;
}
.bookType {
  color:lightskyblue;
  font-size: 12.5px;
}
.bookTitle {
  font-weight: bold;
}
</style>

