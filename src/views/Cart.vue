<template>
  <article>
    <h1>
      You have <span class="cart-lenght">{{ cartLenght }} </span> items in your
      basket
    </h1>
    <div class="cartItems">
      <section v-for="(book, index) in cart" :key="index" :book="book">
        <div class="items">
          <h2>{{ book.Title }}</h2>
          <h4>Type: {{ book.Type }}</h4>
          <h3>{{ book.Price }} :-</h3>
          <img :src="book.Img" alt="bild" />
          <div>
            <button @click="removeItem(book)" :id="book.id" class="dltBtn">
              Remove
            </button>
          </div>
        </div>
      </section>
    </div>

    <h3 class="totalPrice">Total price: {{ totalPrice }} :-</h3>
  </article>
</template>

<script>
import json from "../assets/products.json";
export default {
  props: {
    cartItem: Array,
  },
  data() {
    return {
      items: true,
      totalCost: 0,
      cart: json.cart,
    };
  },
  methods: {
    removeItem(item) {
      let index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
    },
  },
  computed: {
    cartLenght() {
      if (this.items) {
        return this.cart.length;
      } else {
        return 0;
      }
    },
    totalPrice() {
      let totalCost = 0;
      this.cart.forEach((item) => {
        totalCost += item.Price;
      });
      return totalCost;
    },
  },
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
}

h1, h3 {
  color: #3d2f27;
}

.cartItems {
  display: flex;
  flex-wrap: wrap;
}
.items {
  margin: 15px;
  padding: 1rem;
  border: 1px solid rgba(15, 15, 15, 0.329);
  background-color: #c9c9c750;
  box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
  float: left;
  width: 240px;
  color: #3d2f27;
}

img {
  width: 200px;
  height: 160px;
}

.dltBtn {
  float: right;
  display: block;
  text-decoration: none;
  background: #705546;
  color: #eeeeee;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  transition: 0.7s;
  letter-spacing: 1px;
  width: 180px;
  margin-right: 30px;
  align-self: start;
}
.dltBtn:hover {
  background: #3d2f27;
  color: #ffffff;
  transition: 0.7s;
  cursor: pointer;
}
.dltBtn span {
  float: left;
}
</style>

