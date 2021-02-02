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

export default {
  props: {
    cartItems: Array
  },
  data() {
    return {
      items: true,
      totalCost: 0,
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
        },
        {
          "id": 18,
          "Title": "Wuthering height",
          "Price": 300,
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
</style>
