<template>
  <div class="books" @click="goToCart()">
    <h2>{{ book.Title }}</h2>
    <h3>{{ book.Price }}</h3>
    <img :src="book.Img" alt="bild"/>
    <div >
        <button @click="add(book)" class="addButton">Add to cart
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OutletSale',
  props: {
    book: Object
  },
  methods: {
    goToCart() {
      //this.$router.push(`/BookInfo/${id}`);
    },
  add(cartItem) {
    this.$store.dispatch("addToCart", cartItem);
  }
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

.addButton {
  float: right;
	display: block;
	text-decoration: none;
	background: #2f5289;
	color: #eeeeee;
	text-transform: uppercase;
  font-weight: bold;
	font-size: 15px;
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	transition: .7s;
  letter-spacing: 1px;
  width: 180px;
  margin-right: 30px;
  align-self: start;
  }
.addButton:hover {
	background: #2c3339;
	color: #ffffff;
	transition: .7s;
	cursor: pointer;
}
.addButton span {
	float: left; 
}


</style>