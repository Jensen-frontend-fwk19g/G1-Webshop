<template>
  <div>
    <h2>This is your basket</h2>
    <section class="cartItems" v-for="(book, index) in cart" :key="index" :book="book" >
      <div class="items">
        <p class="bookTitle">{{ book.Title }} <br>
        <span class="bookType"> ( {{ book.Type }} )</span>
        </p>
        <p class="bookPrice"> price: {{ book.Price }} </p>
        <button @click="removeItem(book)" :id="book.id" class="dltBtn">X</button>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    cartItems: Array
  },
  data() {
    return {
        cart:[
          {
              "id": 9,
              "Title": "Gone with the Wind",
              "Price": 400,
              "Type": "Hard cover"
          },
          {
              "id": 1,
              "Title": "Harry Potter",
              "Price": 250,
              "Type": "Pocket"
          },
          {
              "id": 6,
              "Title": "Lord of the Rings",
              "Price": 350,
              "Type": "Hard cover"
          }
      ]
    }
  },
  methods: {
    removeItem(item){
      let index= this.cart.indexOf(item);
      this.cart.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.items {
    margin: 15px;
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: white;
    box-shadow: 0 0 16px gray;
    float: left;
    width: 150px;
}
span {
  color:lightskyblue;
  font-size: 12.5px;
}
.bookTitle {
  font-weight: bold;
}
</style>
