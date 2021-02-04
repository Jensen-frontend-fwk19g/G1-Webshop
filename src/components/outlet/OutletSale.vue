<template>
  <div class="books" @click="goToCart()">
    <h2>{{ book.Title }}</h2>
    <h4>Type: {{book.Type}}</h4>
    <h3>{{ book.Price }} :-</h3>
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
  add(cart) {
    this.$store.dispatch("addToCart", cart);
    alert('added to your basket')
  }
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

.addButton {
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
	transition: .7s;
  letter-spacing: 1px;
  width: 180px;
  margin-right: 30px;
  align-self: start;
  }
.addButton:hover {
	background: #3d2f27;
	color: #ffffff;
	transition: .7s;
	cursor: pointer;
}
.addButton span {
	float: left; 
}


</style>
